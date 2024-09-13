<script setup>
  import { defineProps, computed, watch, ref } from 'vue';
  import {
    mdiPrinter3dNozzle,
    mdiThermometer,
    mdiWaterPercent,
    mdiCircle,
    mdiHelp
  } from '@mdi/js';

  const props = defineProps({
    title: {
      type: String,
      default: 'Filament'
    },
    config: Object,
    hass: Object
  })

  const attributes = ref({});
  // const attributes = computed(() => {
  //   if (props.hass && props.config.entity) {
  //     const state = props.hass.states[props.config.entity];
  //     return state.attributes;
  //   }
  //   return null;
  // });

  const activeAMS = computed(() => {
    const trayNow = parseInt(attributes.value.ams.tray_now);
    if(trayNow === 254) {
      return -1;
    }
    const ams = Math.floor(trayNow / 4);
    const tray = trayNow % 4;

    return {
      ams,
      tray
    };
  })

  console.log('AMS Attributes', attributes.value);

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

  watch(() => props.hass, () => {
    console.log('AMSCARD props', props)
    if (props.hass) {
      const state = props.hass.states[props.config.entity];

      attributes.value = state.attributes;
      console.log('AMSCARD state.attributes', state.attributes)
    }
  }, {
    immediate: true
  });
</script>

<template>
  <h2 class="custom-card__title">{{ props.title }}</h2>
  <ha-card class="custom-card ams-card" v-if="attributes && attributes.ams">
    <h2 class="custom-card__title">{{ props.title }}</h2>
    <div class="custom-card__content ams-card__filament">
      <div
            v-for="(ams, index) in attributes.ams.ams"
            v-bind:key="`ams-${index}`"
            class="ams-card__ams"
            :class="AMSStyle(ams)">
            <div class="custom-card__header">
              <h3 class="custom-card__title">
                AMS {{ index+1 }}
                <ha-svg-icon class="ams-active-indicator" :path="mdiCircle"></ha-svg-icon>
              </h3>
              <a class="custom-card__header-prop" :title="`Temperature: ${ams.temp}°C`">
                <ha-svg-icon :path="mdiThermometer"></ha-svg-icon>
                {{ ams.temp }}°C
              </a>
              <a class="custom-card__header-prop" :style="`color: var(${getHumidityColor(ams.humidity)})`" :title="`Humidity index: ${ams.humidity}`">
                <ha-svg-icon :path="mdiWaterPercent"></ha-svg-icon>
              </a>
            </div>
            <div class="ams-card__ams-trays">
              <div
                v-for="(tray, trayIndex) in ams.tray"
                v-bind:key="`ams-${index}_tray-${trayIndex}`"
                class="ams-card__ams-tray"
                :class="trayStyle(ams, tray)">
                <template v-if="tray.tray_type">
                  <div class="ams-card__ams-tray-filament">{{ tray.tray_type }}</div>
                  <ha-svg-icon class="ams-card__ams-tray-icon" :path="mdiPrinter3dNozzle" :style="`color:#${tray.tray_color.substring(0, 6)};`"></ha-svg-icon>
                </template>
                <template v-else>
                  <ha-svg-icon class="ams-card__ams-tray-icon" :path="mdiHelp"></ha-svg-icon>
                </template>
              </div>
            </div>

          </div>
    </div>
  </ha-card>
</template>

<style lang="scss" scoped>
  // @import '../../main.scss';
  :host {
    border: solid 1px #000;
  }
  .ams-card {
    border: solid 1px #000;
  }
</style>

<script>
export default {
  name: 'ams-card',
  friendlyName: 'AMS Card',
  description: 'Show filament data for given printer',
}

</script>
