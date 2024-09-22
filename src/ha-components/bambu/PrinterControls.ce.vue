<script setup>
  import { defineProps, computed, inject } from 'vue';
  import {
    mdiThermometerLines,
    mdiPrinter3dNozzleHeat,
    mdiHomeThermometerOutline,
  } from '@mdi/js';


  const props = defineProps({
    parentAttrs: Object
  })

  const attributes = inject('attributes');

  const attrs = computed(() => {
    if(props.parentAttrs) {
      return props.parentAttrs;
    }

    return attributes.value ? attributes.value : null
  })
</script>

<template>
  <ha-card class="custom-card printer-controls-card">
    <div class="custom-card__content printer-controls-card__content">
      <div class="printer-controls-card__column">
        a
      </div>
      <div class="printer-controls-card__column">
        b
      </div>
      <custom-entity-row
        title="Bed Temperature"
        :value="`${attrs.bed_temper} / ${attrs.bed_target_temper}`"
        suffix="°C"
        :icon="mdiThermometerLines"
      />
      <custom-entity-row
        title="Nozzle Temperature"
        :value="`${attrs.nozzle_temper} / ${attrs.nozzle_target_temper}`"
        suffix="°C"
        :icon="mdiPrinter3dNozzleHeat"
      />
      <custom-entity-row
        title="Chamber Temperature"
        :value="attrs.chamber_temper"
        suffix="°C"
        :icon="mdiHomeThermometerOutline"
      />
    </div>
  </ha-card>
</template>

<style lang="scss" scoped>
  @import url('@/main.scss');
</style>

<script>
export default {
  name: 'printer-controls-card',
  friendlyName: 'Printer controls Card',
  description: 'Show printer actions and controls',
}

</script>
