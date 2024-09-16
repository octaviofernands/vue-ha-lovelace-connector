<script setup>
  import { defineProps, defineEmits, computed, inject } from 'vue';
  import {
    mdiTimer,
    mdiLayersTriple,
    mdiPrinter3d,
    mdiTooltipTextOutline,
    mdiPlay,
    mdiPause,
    mdiStop,
  } from '@mdi/js';
  import {
    SPEED_PROFILE,
  } from '../../bambu-constants';

  import { bambuPrintAction, bambuSetSpeedProfile } from '../../util'


  const props = defineProps({
    parentattrs: Object
  })

  const emit = defineEmits(['updatePrintAction', 'updateSpeedProfile'])


  const attributes = inject('attributes');
  const hass = inject('hass');

  const attrs = computed(() => {
    if(props.parentattrs) {
      return props.parentattrs;
    }

    return attributes.value ? attributes.value : null
  })

  const isChild = computed(()=>{
    return !!props.parentattrs
  })

  const layerProgress = computed(() => {
    return `${ attrs.value.layer_num } / ${ attrs.value.total_layer_num }`
  })

  const eta = computed(() => {
    let mins = parseInt(attrs.value.mc_remaining_time);
    let hours = (mins / 60);
    let rHours = Math.floor(hours);
    let rMinutes = Math.round((hours - rHours) * 60);

    return `${rHours}h${rMinutes}m`;
  })

  const isPrinting = computed(() => {
    // const printingStatuses = ['RUNNING', 'FAILED', 'COMPLETED'];

    // return printingStatuses.includes(attributes.value.gcode_state)

    return attrs.value.gcode_state && attrs.value.gcode_state === 'RUNNING';

  });

  const pauseResumePrintingStyle = computed(() => {
    return {

    }
  })

  const printActionUpdate = (action)=>{
    if(isChild.value) {
      emit('updatePrintAction', action);
      return;
    }

    if(action && hass)
      bambuPrintAction(action, hass);
  }

  const speedProfileUpdate = (speedProfile) => {
    if(isChild.value) {
      emit('updateSpeedProfile', speedProfile);
      return;
    }

    if(speedProfile && hass)
      bambuSetSpeedProfile(speedProfile, hass);
  }
</script>

<template>
  <ha-card class="custom-card print-status-card">
    <div class="custom-card__content">
      <div class="custom-card__header">
        <h3 class="custom-card__title">{{ attrs.subtask_name }}</h3>
        <a class="custom-card__header-prop" :title="`Print progress: ${attrs.mc_percent}%`">
          {{ attrs.mc_percent }}%
        </a>
      </div>
      <div class="printer-progress-control">
        <div class="printer-progress-control--bar">
          <custom-bar
            min="0"
            max="100"
            :value="attrs.mc_percent"
          >
          </custom-bar>
        </div>
        <div class="printer-progress-control--button">
          <ha-button @click="printActionUpdate(isPrinting ? 'pause' : 'resume')" :class="pauseResumePrintingStyle">
            <ha-svg-icon :path="isPrinting ? mdiPause : mdiPlay"></ha-svg-icon>
          </ha-button>
        </div>
        <div class="printer-progress-control--button">
          <ha-button @click="printActionUpdate('stop')" class="printer-progress-control--button-stop" :disabled="!isPrinting">
            <ha-svg-icon :path="mdiStop"></ha-svg-icon>
          </ha-button>
        </div>
      </div>

      <div class="printer-speed-control">
        <custom-radio-group
          :options="SPEED_PROFILE"
          name="speed_profile"
          :modelValue="attrs.spd_lvl"
          @update:modelValue="$event => speedProfileUpdate($event.detail[0])"
          ></custom-radio-group>
      </div>

      <custom-entity-row
        title="Status"
        :value="attrs.gcode_state"
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
        :value="attrs.gcode_file"
        :icon="mdiPrinter3d"
        ></custom-entity-row>
    </div>
  </ha-card>
</template>

<style lang="scss" scoped>
  @import url('@/main.scss');

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
  name: 'print-status-card',
  friendlyName: 'Print Status Card',
  description: 'Show Bambu printer print progress',
}

</script>
