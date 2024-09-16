<script setup>
  import { defineProps, computed, inject } from 'vue';
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
    ams: Object
  })

  const attributes = inject('attributes');

  const AMSObj = computed(() => {
    if(props.ams) {
      return props.ams;
    }

    return attributes.value.ams ? attributes.value.ams : null
  })

  const activeAMS = computed(() => {
    const trayNow = parseInt(AMSObj.value.tray_now);
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

  const AMSStyle = (ams) => {
    return {
      'ams-card__ams--active': ams.id == activeAMS.value.ams
    }
  }

  const trayStyle = (ams, tray) => {
    return {
      'ams-card__tray--active': ams.id == activeAMS.value.ams && tray.id == activeAMS.value.tray
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
</script>

<template>
  <ha-card class="custom-card ams-card" v-if="AMSObj">

    <div class="custom-card__content ams-card__filament">
      <h2 class="custom-card__title">{{ props.title }}</h2>
      <div
            v-for="(ams, index) in AMSObj.ams"
            v-bind:key="`ams-${index}`"
            class="ams-card__ams"
            :class="AMSStyle(ams)">
            <div class="custom-card__header">
              <h3 class="custom-card__title">
                AMS {{ index+1 }}
                <ha-svg-icon class="ams-card__ams-active-indicator" :path="mdiCircle"></ha-svg-icon>
              </h3>
              <a class="custom-card__header-prop" :title="`Temperature: ${ams.temp}°C`">
                <ha-svg-icon :path="mdiThermometer"></ha-svg-icon>
                {{ ams.temp }}°C
              </a>
              <a class="custom-card__header-prop" :style="`color: var(${getHumidityColor(ams.humidity)})`" :title="`Humidity index: ${ams.humidity}`">
                <ha-svg-icon :path="mdiWaterPercent"></ha-svg-icon>
              </a>
            </div>
            <div class="ams-card__trays">
              <div
                v-for="(tray, trayIndex) in ams.tray"
                v-bind:key="`ams-${index}_tray-${trayIndex}`"
                class="ams-card__tray"
                :class="trayStyle(ams, tray)">
                <template v-if="tray.tray_type">
                  <div class="ams-card__tray-filament">{{ tray.tray_type }}</div>
                  <ha-svg-icon class="ams-card__tray-icon" :path="mdiPrinter3dNozzle" :style="`color:#${tray.tray_color.substring(0, 6)};`"></ha-svg-icon>
                </template>
                <template v-else>
                  <ha-svg-icon class="ams-card__tray-icon" :path="mdiHelp"></ha-svg-icon>
                </template>
              </div>
            </div>

          </div>
    </div>
  </ha-card>
</template>

<style lang="scss" scoped>
  @import url('@/main.scss');

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

  .ams-card {
    &__ams-active-indicator {
      width: 12px;
      height: 12px;
      fill: var(--ha-bar-background-color, var(--secondary-background-color));
    }

    &__ams {
      &--active {
        .ams-card__ams-active-indicator {
          fill: var(--primary-color, #03a9f4);
          transition: all 0.5s ease-in-out;
          animation: blink normal 2s infinite ease-in-out;
        }

        .ams-card__tray--active {
          border: solid 4px var(--primary-color, #03a9f4);

          ha-svg-icon {
            // stroke: var(--primary-color, #03a9f4);
            // stroke-width: 1px;
            transform: scale(1.1);
          }
        }
      }
    }

    &__trays {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    &__tray {
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
  }
</style>

<script>
export default {
  name: 'ams-card',
  friendlyName: 'AMS Card',
  description: 'Show filament data for given printer',
}

</script>
