<script setup>
  import { defineProps, defineModel, watch, ref, computed } from 'vue';
  import {
    mdiPrinter3dNozzle,
    mdiThermometer,
    mdiWaterPercent,
    mdiThermometerLines,
    mdiPrinter3dNozzleHeat,
    mdiHomeThermometerOutline,
    mdiTimer,
    mdiLayersTriple,
    mdiPrinter3d,
    mdiTooltipTextOutline,
    mdiLightbulb,
    mdiLightbulbOff,
    mdiWifi,
    mdiPlay,
    mdiPause,
    mdiStop,
    mdiHelp,
    mdiCircle
  } from '@mdi/js';
  import { CONN_STATUSES, FANS, SPEED_PROFILE, HMS_ERRORS, PRINT_ERROR_ERRORS } from './bambu-constants'
  import { parseMQTTCoolingPercentage, getFanSpeedGCode } from './util'

  const props = defineProps({
    config: Object,
    hass: Object
  })

  const attributes = ref({});
  const fans = ref({
    part: 0,
    aux: 0,
    chamber: 0
  });
  const speedProfile = defineModel(2);

  const isConnected = computed(() => {

    return attributes.value.conn === 'connected';
  });

  const connData = computed(() => {
    return CONN_STATUSES[attributes.value.conn] ? CONN_STATUSES[attributes.value.conn] : {text: "Disconnected",
    color: "--error-color"};
  });

  const eta = computed(() => {
    let mins = parseInt(attributes.value.mc_remaining_time);
    let hours = (mins / 60);
    let rHours = Math.floor(hours);
    let rMinutes = Math.round((hours - rHours) * 60);

    return `${rHours}h${rMinutes}m`;
  })

  const isPrinting = computed(() => {
    // const printingStatuses = ['RUNNING', 'FAILED', 'COMPLETED'];

    // return printingStatuses.includes(attributes.value.gcode_state)

    return attributes.value.gcode_state && attributes.value.gcode_state === 'RUNNING';

  });

  const hasAMS = computed(() => {
    return attributes.value.ams
      && Array.isArray(attributes.value.ams.ams)
      && attributes.value.ams.ams.length > 0;
  });

  const layerProgress = computed(() => {
    return `${ attributes.value.layer_num } / ${ attributes.value.total_layer_num }`
  })

  const isLightOn = computed(() => {
    return attributes.value.lights_report[0].mode === 'on';
  });

  const lightButtonStyle = computed(() => {
    return {
      'x1c-printer-card--button': true,
      'x1c-printer-card--button-active': isLightOn
    }
  })

  const pauseResumePrintingStyle = computed(() => {
    return {

    }
  })

  const activeAMS = computed(() => {
    const trayNow = parseInt(attributes.value.ams.tray_now);
    if(trayNow === 254) {
      return -1;
    }
    const ams = Math.floor(trayNow / 4);
    const tray = trayNow % 4;
    // const ams = attributes.value.ams.ams[trayNow]
    // self.ams.data[math.floor(self.ams.tray_now / 4)]
    return {
      ams,
      tray
    };
  })

  const printErrors = computed(() => {
    if(!attributes.value.hms || !Array.isArray(attributes.value.hms))
      return [];


    let code;
    return attributes.value.hms.map((item) => {
      code = getHMSError(item);
      return {
        code,
        description: HMS_ERRORS[code]
      }
    })
  })


  const getHumidityColor = (humLevel) => {
    humLevel = parseInt(humLevel);

    if(humLevel > 3) {
      return '--success-color';
    }

    if(humLevel === 3) {
      return '--warning-color';
    }

    return '--error-color';
  }

  const sendMessage = (payload) => {
    console.log('sendMessage', payload);
    const domain = 'mqtt';
    const service = 'publish';
    const topic = import.meta.env.VITE_X1C_INPUT_TOPIC;

    if(!topic) {
      throw new Error('topic undefined');
    }

    const serviceData = {
      topic,
      payload: JSON.stringify(payload)
    };

    if(props.hass && props.hass.callService) {
      props.hass.callService(domain, service, serviceData);
    }
  }

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

    sendMessage(message)
  }

  const lightToggle = () => {
    const mode = isLightOn.value ? 'off' : 'on'
    sendMessage({
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
    if(!['pause', 'resume', 'stop'].includes(action)) {
      throw new Error(`Action ${action} cant be used`);
    }

    const msg = {
      print: {
        sequence_id: '0',
        command: action,
        param: '', // Always empty
      }
    }

    console.log('printAction', msg);

    sendMessage(msg);
  }

  const setSpeedProfile = (value) => {
    if(value == '4') {
      return false;
    }

    const msg = {
      print: {
        sequence_id: '0',
        command: 'print_speed',
        param: value.toString() // Print speed level as a string
                                // 1 = silent
                                // 2 = standard
                                // 3 = sport
                                // 4 = ludicrous
      }
    }

    console.log('setSpeedProfile', msg);

    sendMessage(msg);
  }

  const AMSStyle = (ams) => {
    return {
      'ams-active': ams.id == activeAMS.value.ams
    }
  }

  const trayStyle = (ams, tray) => {
    return {
      'tray-active': ams.id == activeAMS.value.ams && tray.id == activeAMS.value.tray
    }
  }

  const getHMSError = (error) => {
    const codeLength = 8;
    const hex1 = error.attr.toString(16).padStart(codeLength, '0');
    const hex2 = error.code.toString(16).padStart(codeLength, '0');

    const hmsError = `${hex1.substring(0, 4)}_${hex1.substring(4)}_${hex2.substring(0, 4)}_${hex2.substring(4)}`;

    return hmsError.toUpperCase();
  }

  watch(() => props.hass, () => {
    if (props.hass) {
      const state = props.hass.states[props.config.entity];

      attributes.value = state.attributes;
      console.log('WATCH attrs', state.attributes)
      fans.value = {
        part: parseMQTTCoolingPercentage(parseInt(state.attributes.cooling_fan_speed)),
        aux: parseMQTTCoolingPercentage(parseInt(state.attributes.big_fan1_speed)),
        chamber: parseMQTTCoolingPercentage(parseInt(state.attributes.big_fan2_speed))
      }

      speedProfile.value = state.attributes.spd_lvl
    }
  }, {
    immediate: true
  });

  console.log('hass', props.hass)
</script>

<template>
  <div class="x1c-printer-card">
    <div class="x1c-printer-card--header">
      <h1 class="x1c-printer-card--title">{{ attributes.friendly_name }}</h1>
      <a class="x1c-printer-card--header-prop" :style="`color: var(${connData.color})`" :title="connData.text">
        <ha-svg-icon :path="mdiWifi"></ha-svg-icon>
      </a>
    </div>
    <div
      v-for="error in printErrors"
      v-bind:key="error.code">
    {{ error.code }}: {{ error.description }}
    </div>

    <div v-if="isConnected">
    <ha-card>
      <div class="x1c-printer-card--content">
        <h2 class="x1c-printer-card--title">Filament</h2>
        <div class="x1c-printer-card--filament">
          <template v-if="hasAMS">
          <div
            v-for="(ams, index) in attributes.ams.ams"
            v-bind:key="`ams-${index}`"
            class="x1c-printer-card--ams"
            :class="AMSStyle(ams)">
            <div class="x1c-printer-card--header">
              <h3 class="x1c-printer-card--title">
                AMS {{ index+1 }}
                <ha-svg-icon class="ams-active-indicator" :path="mdiCircle"></ha-svg-icon>
              </h3>
              <a class="x1c-printer-card--header-prop" :title="`Temperature: ${ams.temp}°C`">
                <ha-svg-icon :path="mdiThermometer"></ha-svg-icon>
                {{ ams.temp }}°C
              </a>
              <a class="x1c-printer-card--header-prop" :style="`color: var(${getHumidityColor(ams.humidity)})`" :title="`Humidity index: ${ams.humidity}`">
                <ha-svg-icon :path="mdiWaterPercent"></ha-svg-icon>
              </a>
            </div>
            <div class="x1c-printer-card--ams-trays">
              <div
                v-for="(tray, trayIndex) in ams.tray"
                v-bind:key="`ams-${index}_tray-${trayIndex}`"
                class="x1c-printer-card--ams-tray"
                :class="trayStyle(ams, tray)">
                <template v-if="tray.tray_type">
                  <div class="x1c-printer-card--ams-tray-filament">{{ tray.tray_type }}</div>
                  <ha-svg-icon class="x1c-printer-card--ams-tray-icon" :path="mdiPrinter3dNozzle" :style="`color:#${tray.tray_color.substring(0, 6)};`"></ha-svg-icon>
                </template>
                <template v-else>
                  <ha-svg-icon class="x1c-printer-card--ams-tray-icon" :path="mdiHelp"></ha-svg-icon>
                </template>
              </div>
            </div>

          </div>
          </template>
        </div>


      </div>
    </ha-card>
    <ha-card v-if="attributes.mc_percent">
      <div class="x1c-printer-card--content">
        <div class="x1c-printer-card--header">
          <h3 class="x1c-printer-card--title">{{ attributes.subtask_name }}</h3>
          <a class="x1c-printer-card--header-prop" :title="`Print progress: ${attributes.mc_percent}%`">
            {{ attributes.mc_percent }}%
          </a>
        </div>
        <div class="printer-progress-control">
          <div class="printer-progress-control--bar">
            <custom-bar
              min="0"
              max="100"
              :value="attributes.mc_percent"
            >
            </custom-bar>
          </div>
          <div class="printer-progress-control--button">
            <ha-button @click="printAction(isPrinting ? 'pause' : 'resume')" :class="pauseResumePrintingStyle">
              <ha-svg-icon :path="isPrinting ? mdiPause : mdiPlay"></ha-svg-icon>
            </ha-button>
          </div>
          <div class="printer-progress-control--button">
            <ha-button @click="printAction('stop')" class="printer-progress-control--button-stop" :disabled="!isPrinting">
              <ha-svg-icon :path="mdiStop"></ha-svg-icon>
            </ha-button>
          </div>
        </div>

        <div class="printer-speed-control">
          <custom-radio-group
            :options="SPEED_PROFILE"
            name="speed_profile"
            :modelValue="speedProfile"
            @update:modelValue="$event => setSpeedProfile($event.detail[0])"
            ></custom-radio-group>
        </div>

        <custom-entity-row
          title="Status"
          :value="attributes.gcode_state"
          :icon="mdiTooltipTextOutline"
          ></custom-entity-row>
        <custom-entity-row
          title="ETA"
          :value="eta"
          :icon="mdiTimer"
          ></custom-entity-row>
          <custom-entity-row
          title="Layers"
          :value="layerProgress"
          :icon="mdiLayersTriple"
          ></custom-entity-row>
          <custom-entity-row
          title="File"
          :value="attributes.gcode_file"
          :icon="mdiPrinter3d"
          ></custom-entity-row>
      </div>
    </ha-card>
    <ha-card>
      <div class="x1c-printer-card--content" v-if="isConnected">
        <custom-entity-row
          title="Bed Temperature"
          :value="`${attributes.bed_temper} / ${attributes.bed_target_temper}`"
          suffix="°C"
          :icon="mdiThermometerLines"
          ></custom-entity-row>
        <custom-entity-row
          title="Nozzle Temperature"
          :value="`${attributes.nozzle_temper} / ${attributes.nozzle_target_temper}`"
          suffix="°C"
          :icon="mdiPrinter3dNozzleHeat"
          ></custom-entity-row>
          <custom-entity-row
          title="Chamber Temperature"
          :value="attributes.chamber_temper"
          suffix="°C"
          :icon="mdiHomeThermometerOutline"
          ></custom-entity-row>
      </div>
    </ha-card>
    <ha-card>
      <div class="x1c-printer-card--content">
        <div class="x1c-printer-card--controls">
          <label class="x1c-printer-card--control">
            <ha-button @click="lightToggle" :class="lightButtonStyle">
              <ha-svg-icon :path="isLightOn ? mdiLightbulb : mdiLightbulbOff"></ha-svg-icon>
            </ha-button>
            Light
          </label>
          <label class="x1c-printer-card--control">
            <custom-fan-control
              label="Part"
              :value="fans.part"
              @main-click="toggleFan('part')"
              @minus-click="changeFan('part', -10)"
              @plus-click="changeFan('part', 10)"
              ></custom-fan-control>
            Part
          </label>
          <label class="x1c-printer-card--control">
            <custom-fan-control
              label="Aux"
              :value="fans.aux"
              @main-click="toggleFan('aux')"
              @minus-click="changeFan('aux', -10)"
              @plus-click="changeFan('aux', 10)"
              ></custom-fan-control>
            Aux
          </label>
          <label class="x1c-printer-card--control">
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
  .x1c-printer-card {
    display: block;


    &--content {
      padding: 8px;
    }

    ha-card {
      margin: 4px 0;
    }

    &--header {
      display: flex;
      align-items: center;
    }

    &--title {
      flex: 1;
      display: flex;
      align-items: center;
    }

    &--header-prop {
      display: inline-block;
      margin-left: 8px;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .ams-active-indicator {
      // font-size: 30px;
      width: 12px;
      height: 12px;
      fill: var(--ha-bar-background-color, var(--secondary-background-color));
    }

    &--ams {
      &.ams-active {

        .ams-active-indicator {
          fill: var(--primary-color, #03a9f4);
          transition: all 0.5s ease-in-out;
          animation: blink normal 2s infinite ease-in-out;
        }

        .tray-active {
          border: solid 4px var(--primary-color, #03a9f4);

          ha-svg-icon {
            // stroke: var(--primary-color, #03a9f4);
            // stroke-width: 1px;
            transform: scale(1.1);
          }
        }
      }
    }

    &--ams-trays {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    &--ams-tray {
      background: var(--ha-bar-background-color, var(--secondary-background-color));
      margin: 0 8px;
      padding: 16px 0;
      text-align: center;
      border-radius: 8px;

      &-filament {
        font-weight: 700;
        margin-bottom: 4px;
      }

      &-icon {
        width:50px;
        height: 50px;
      }


    }

    &--button {
      ha-svg-icon {
        fill: var(--secondary-text-color, #9b9b9b);
      }

      &-active {
        ha-svg-icon {
          fill: var(--primary-color, #03a9f4);
        }
      }
    }

    &--controls {
      display: flex;
    }

    &--control {
      display: flex;
      flex-direction: column;
      text-align: center;
      cursor: pointer;
    }
  }

  .printer-progress-control {
    display: flex;
    align-items: center;
    justify-content: center;

    &--bar {
      flex: 1;
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
