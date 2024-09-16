<script setup>
  import { defineProps, computed, inject } from 'vue';
  import {
    mdiThermometerLines,
    mdiPrinter3dNozzleHeat,
    mdiHomeThermometerOutline,
  } from '@mdi/js';


  const props = defineProps({
    parentattrs: Object
  })

  const attributes = inject('attributes');

  const attrs = computed(() => {
    if(props.parentattrs) {
      return props.parentattrs;
    }

    return attributes.value ? attributes.value : null
  })
</script>

<template>
  <ha-card class="custom-card printer-info-card">
    <div class="custom-card__content">
      <custom-entity-row
        title="Bed Temperature"
        :value="`${attrs.bed_temper} / ${attrs.bed_target_temper}`"
        suffix="°C"
        :icon="mdiThermometerLines"
        ></custom-entity-row>
      <custom-entity-row
        title="Nozzle Temperature"
        :value="`${attrs.nozzle_temper} / ${attrs.nozzle_target_temper}`"
        suffix="°C"
        :icon="mdiPrinter3dNozzleHeat"
        ></custom-entity-row>
        <custom-entity-row
        title="Chamber Temperature"
        :value="attrs.chamber_temper"
        suffix="°C"
        :icon="mdiHomeThermometerOutline"
        ></custom-entity-row>
    </div>
  </ha-card>
</template>

<style lang="scss" scoped>
  @import url('@/main.scss');
</style>

<script>
export default {
  name: 'printer-info-card',
  friendlyName: 'Printer Info Card',
  description: 'Show printer data',
}

</script>
