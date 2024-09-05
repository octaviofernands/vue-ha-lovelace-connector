<script setup>
  import { defineProps, watch, ref, computed } from 'vue';
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
    mdiWifi
  } from '@mdi/js';

//   function getActionName(actionId) {
//     switch (actionId) {
//         case 0:
//             return " ";  // idle or printing
//         case 1:
//             return "Auto bed leveling";
//         case 2:
//             return "Heatbed preheating";
//         case 3:
//             return "Sweeping XY mech mode";
//         case 4:
//             return "Changing filament";
//         case 5:
//             return "M400 pause";
//         case 6:
//             return "Paused due to filament runout";
//         case 7:
//             return "Heating hotend";
//         case 8:
//             return "Calibrating extrusion";
//         case 9:
//             return "Scanning bed surface";
//         case 10:
//             return "Inspecting first layer";
//         case 11:
//             return "Identifying build plate type";
//         case 12:
//             return "Calibrating Micro Lidar";
//         case 13:
//             return "Homing toolhead";
//         case 14:
//             return "Cleaning nozzle tip";
//         case 15:
//             return "Checking extruder temperature";
//         case 16:
//             return "Printing was paused by the user";
//         case 17:
//             return "Pause of front cover falling";
//         case 18:
//             return "Calibrating the micro lida";
//         case 19:
//             return "Calibrating extrusion flow";
//         case 20:
//             return "Paused due to nozzle temperature malfunction";
//         case 21:
//             return "Paused due to heat bed temperature malfunction";
//         default:
//             return actionId.toString()
//     }
// }

  const CONN_STATUSES = {
    connected: {
      text: "Connected",
      color: "--success-color"
    },
    connecting: {
      text: "Trying to connect",
      color: "--warning-color"
    },
    disconnected: {
      text: "Disconnected",
      color: "--error-color"
    }
  };

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
    const printingStatuses = ['RUNNING', 'FAILED', 'COMPLETED'];

    return printingStatuses.includes(attributes.value.status)

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

  const parseMQTTCoolingPercentage = (value) => {
    const percentage = Math.ceil(value * 100 / 15);
    const roundPercentage = Math.round(percentage/10) * 10;

    return roundPercentage;
  }

  const coolingPercentageToGCodeSpeed = (value) => {
    let percentage = Math.round(value / 10) * 10
    let speed = Math.ceil(255 * percentage / 100)

    if(speed > 255) speed = 255;
    if(speed < 0) speed = 0;

    return speed;
  }

  const FANS = {
    part: 'P1',
    aux: 'P2',
    chamber: 'P3'
  }

  const getFanSpeedGCode = (fanID, percentage) => {
    const speed = coolingPercentageToGCodeSpeed(percentage);
    const gcode = `M106 ${fanID} S${speed}\n`;

    return gcode
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

    <div v-if="isConnected">
    <ha-card>
      <div class="x1c-printer-card--content">
        <h2 class="x1c-printer-card--title">Filament</h2>
        <div class="x1c-printer-card--filament">
          <template v-if="hasAMS">
          <div class="x1c-printer-card--ams" v-for="(ams, index) in attributes.ams.ams" v-bind:key="`ams-${index}`">
            <div class="x1c-printer-card--header">
              <h3 class="x1c-printer-card--title">AMS {{ index+1 }}</h3>
              <a class="x1c-printer-card--header-prop" :title="`Temperature: ${ams.temp}°C`">
                <ha-svg-icon :path="mdiThermometer"></ha-svg-icon>
                {{ ams.temp }}°C
              </a>
              <a class="x1c-printer-card--header-prop" :style="`color: var(${getHumidityColor(ams.humidity)})`" :title="`Humidity index: ${ams.humidity}`">
                <ha-svg-icon :path="mdiWaterPercent"></ha-svg-icon>
              </a>
            </div>
            <div class="x1c-printer-card--ams-slots">
              <div class="x1c-printer-card--ams-slot" v-for="(tray, trayIndex) in ams.tray" v-bind:key="`ams-${index}_tray-${trayIndex}`">
                <div class="x1c-printer-card--ams-slot-filament">{{ tray.tray_type }}</div>
                <ha-svg-icon class="x1c-printer-card--ams-slot-icon" :path="mdiPrinter3dNozzle" :style="`color:#${tray.tray_color.substring(0, 6)};`"></ha-svg-icon>
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
          <h3 class="x1c-printer-card--title">Print Progress</h3>
          <a class="x1c-printer-card--header-prop" :title="`Progress: ${attributes.mc_percent}%`">
            {{ attributes.mc_percent }}%
          </a>
        </div>
        <custom-bar
          min="0"
          max="100"
          :value="attributes.mc_percent"
        >
        </custom-bar>
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
    }

    &--header-prop {
      display: inline-block;
      margin-left: 8px;
    }

    &--ams-slots {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    &--ams-slot {
      background: #cccccc;
      margin: 0 8px;
      padding: 8px 0;
      text-align: center;

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

  .fan-control {
    &--main-button {
      ha-svg-icon {
        fill:var(--secondary-text-color, #9b9b9b);
      }
    }

    &--active {
      .fan-control--main-button {
        ha-svg-icon {
          fill: var(--primary-color, #03a9f4);
        }
      }
    }

    &--button-group {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;

      span {
        display: inline-block;
        flex: 1;
      }
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
