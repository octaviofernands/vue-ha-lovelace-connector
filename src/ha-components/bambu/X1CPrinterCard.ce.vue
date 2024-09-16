<script setup>
  import { watch, ref, computed, inject } from 'vue';
  import {
    mdiLightbulb,
    mdiLightbulbOff,
    mdiWifi,
  } from '@mdi/js';
  import {
    CONN_STATUSES,
    FANS,
    HMS_ERRORS,
    HMS_MODULES,
    HMS_SEVERITY_LEVELS,
    PRINT_ERROR_ERRORS,
    HMS_AMS_ERRORS
  } from '../../bambu-constants';
  import {
    parseMQTTCoolingPercentage,
    getFanSpeedGCode,
    bambuPrintAction,
    bambuSetSpeedProfile,
    sendMQTTMessage
  } from '../../util';

  const attributes = inject('attributes');
  const hass = inject('hass');
  const config = inject('config');

  const fans = ref({
    part: 0,
    aux: 0,
    chamber: 0
  });

  const isConnected = computed(() => {
    return attributes.value.conn === 'connected';
  });

  const connData = computed(() => {
    return CONN_STATUSES[attributes.value.conn] ? CONN_STATUSES[attributes.value.conn] : {text: "Disconnected",
    color: "--error-color"};
  });

  const isLightOn = computed(() => {
    return attributes.value.lights_report[0].mode === 'on';
  });

  const lightButtonStyle = computed(() => {
    return {
      'custom-switch-button': true,
      'custom-switch-button--active': isLightOn
    }
  })

  const printErrors = computed(() => {
    if(!attributes.value.hms || !Array.isArray(attributes.value.hms))
      return [];


    let code;
    const errorList = attributes.value.hms.map((item) => {
      code = getHMSError(item);
      return {
        code,
        module: getHMSModule(item),
        severity: getHMSSeverity(item),
        link: getWikiLink(code),
        description: HMS_ERRORS[code]
      }
    })

    if(attributes.value.print_error) {
      code = getPrintError(attributes.value.print_error);

      errorList.push({
        code,
        description: PRINT_ERROR_ERRORS[code] ? PRINT_ERROR_ERRORS[code] : 'unknown error'
      })
    }

    return errorList;
  })

  const sendGCode = (gcode) => {

    const message = {
      print: {
        sequence_id: '0',
        command: 'gcode_line',
        param: gcode, // Gcode to execute, can use \n for multiple lines
        user_id: '' // Optional
      }
    }
    console.log('sendGCode', message);

    sendMQTTMessage(message)
  }

  const lightToggle = () => {
    const mode = isLightOn.value ? 'off' : 'on'
    sendMQTTMessage({
      "system": {
          sequence_id: '0',
          command: 'ledctrl',
          led_node: 'chamber_light', // Either "chamber_light" or "work_light"
          led_mode: mode, // "on", "off" or "flashing"

          // The below effects are only used for "flashing" mode
          // but required to be present always
          led_on_time: 500, // LED on time in ms
          led_off_time: 500, // LED off time in ms
          loop_times:  1, // How many times to loop
          interval_time: 1000 // Looping interval
      }
    })
  }



  const changeFan = (which, value) => {
    if(!FANS[which]) {
      throw new Error(`Fan not set: ${which}`);
    }

    let fanID = FANS[which];

    let currentValue = fans.value[which]
    let newValue = currentValue + value;

    if(newValue < 0 || newValue > 100) {
      throw new Error(`Fan percentage ${newValue} is out of range`);
    }


    const gcode = getFanSpeedGCode(fanID, newValue);

    sendGCode(gcode);
  }

  const toggleFan = (which) => {
    if(!FANS[which]) {
      throw new Error(`Fan not set: ${which}`);
    }

    const fanID = FANS[which];
    const currentValue = fans.value[which];
    const newValue = currentValue > 0 ? 0 : 100;
    const gcode = getFanSpeedGCode(fanID, newValue);

    sendGCode(gcode);
  }

  const printAction = (action) => {

    bambuPrintAction(action, hass.value, config.value);
  }

  const setSpeedProfile = (value) => {
    console.log('setSpeedProfile call service', hass.value.callService);
    console.log('setSpeedProfile hass', hass.value);
    bambuSetSpeedProfile(value, hass.value, config.value);
  }

  const getHMSError = (error) => {
    const codeLength = 8;
    const hex1 = error.attr.toString(16).padStart(codeLength, '0');
    const hex2 = error.code.toString(16).padStart(codeLength, '0');

    const hmsError = `${hex1.substring(0, 4)}_${hex1.substring(4)}_${hex2.substring(0, 4)}_${hex2.substring(4)}`;

    return hmsError.toUpperCase();
  }

  const getPrintError = (error) => {
    const codeLength = 8;
    const hex = error.toString(16).padStart(codeLength, '0');

    const printError = `${hex.substring(0, 4)}_${hex.substring(4)}`;

    return printError.toUpperCase();
  }

  const getHMSModule = (hms) => {
    const HMSModule = (hms.attr >> 24) & 0xFF;

    return HMS_MODULES[HMSModule];
  }

  const getHMSSeverity = (hms) => {
    const uintCode = hms.code >> 16

    if(hms.code > 0 && HMS_SEVERITY_LEVELS[uintCode])
        return HMS_SEVERITY_LEVELS[uintCode]

    return HMS_SEVERITY_LEVELS["default"]
  }

  const getWikiLink = (code) => {
    const code1 = parseInt(code.substring(0, 4), 16);
    const code2 = parseInt(code.substring(5, 9), 16);
    const code3 = parseInt(code.substring(10, 14), 16);
    const code4 = parseInt(code.substring(15, 19), 16);

    let parsedCode;
    // 070X_xYxx_xxxx_xxxx = AMS X (0 based index) Slot Y (0 based index) has the error
    if(code.startsWith('070')) {
      parsedCode = `${(code1 & 0xFFF8).toString(16).padStart(4, '0').toUpperCase()}_${(code2 & 0xF8FF).toString(16).padStart(4, '0').toUpperCase()}_${code3.toString(16).padStart(4, '0').toUpperCase()}_${code4.toString(16).padStart(4, '0').toUpperCase()}`;
    } else {
      parsedCode = `${code1.toString(16).padStart(4, '0').toUpperCase()}_${code2.toString(16).padStart(4, '0').toUpperCase()}_${code3.toString(16).padStart(4, '0').toUpperCase()}_${code4.toString(16).padStart(4, '0').toUpperCase()}`;
    }

    const AMSCode = `${(code1 & 0xFFF8).toString(16).padStart(4, '0').toUpperCase()}_${(code2 & 0xF8FF).toString(16).padStart(4, '0').toUpperCase()}_${code3.toString(16).padStart(4, '0').toUpperCase()}_${code4.toString(16).padStart(4, '0').toUpperCase()}`;
    const ams_error = HMS_AMS_ERRORS[AMSCode] || "";
    if (ams_error !== "") {
      return AMSCode;
    }

    return `https://wiki.bambulab.com/en/x1/troubleshooting/hmscode/${parsedCode}`;
  }

  watch([attributes], ([newAttributes]) => {
    window.hass = hass;
    if(newAttributes.cooling_fan_speed) {
      fans.value = {
        part: parseMQTTCoolingPercentage(parseInt(newAttributes.cooling_fan_speed)),
        aux: parseMQTTCoolingPercentage(parseInt(newAttributes.big_fan1_speed)),
        chamber: parseMQTTCoolingPercentage(parseInt(newAttributes.big_fan2_speed))
      }
    }
  }, {
    immediate: true
  });
</script>

<template>

  <div class="x1c-printer-card custom-card">
    <ha-alert
      v-for="error in printErrors"
      v-bind:key="error.code"
      alert-type="error"
      >
      <strong>{{ error.code }}</strong>: {{ error.description }} <a v-if="error.link" :href="error.link" target="_blank">(link)</a>
    </ha-alert>
    <div class="custom-card__header">
      <h1 class="custom-card__title">{{ attributes.friendly_name }}</h1>
      <a class="custom-card__header-prop" :style="`color: var(${connData.color})`" :title="connData.text">
        <ha-svg-icon :path="mdiWifi"></ha-svg-icon>
      </a>
    </div>

    <div v-if="isConnected">
      {{ attributes.timestamp }}
    <ams-card :ams="attributes.ams" title="Filament"></ams-card>
    <print-status-card
      :parentattrs="attributes"
      @updatePrintAction="($event) => {printAction($event.detail[0])}"
      @updateSpeedProfile="($event) => {setSpeedProfile($event.detail[0])}"
      ></print-status-card>
    <printer-info-card :parentattrs="attributes"></printer-info-card>
    <ha-card>
      <div class="custom-card__content">
        <div class="custom-card__controls">
          <label class="custom-card__control">
            <ha-button text @click="lightToggle" :class="lightButtonStyle">
              <ha-svg-icon :path="isLightOn ? mdiLightbulb : mdiLightbulbOff"></ha-svg-icon>
            </ha-button>
            Light
          </label>
          <label class="custom-card__control">
            <custom-fan-control
              label="Part"
              :value="fans.part"
              @main-click="toggleFan('part')"
              @minus-click="changeFan('part', -10)"
              @plus-click="changeFan('part', 10)"
              ></custom-fan-control>
            Part
          </label>
          <label class="custom-card__control">
            <custom-fan-control
              label="Aux"
              :value="fans.aux"
              @main-click="toggleFan('aux')"
              @minus-click="changeFan('aux', -10)"
              @plus-click="changeFan('aux', 10)"
              ></custom-fan-control>
            Aux
          </label>
          <label class="custom-card__control">
            <custom-fan-control
              label="Chamber"
              :value="fans.chamber"
              @main-click="toggleFan('chamber')"
              @minus-click="changeFan('chamber', -10)"
              @plus-click="changeFan('chamber', 10)"
              ></custom-fan-control>
            Chamber
          </label>
        </div>
      </div>
    </ha-card>
    </div>
  </div>

</template>
<style lang="scss">
  @import url('@/main.scss');
  .x1c-printer-card {
    ha-alert {
      display: block;
      margin: 4px 0;
    }

    ha-card {
      margin: 4px 0 8px 0;
    }
  }
</style>
<script>
export default {
  name: 'x1c-printer-card',
  friendlyName: 'X1C Printer Card',
  description: 'Manage data from BambuLab X1C Printer (MQTT)',
}

</script>
