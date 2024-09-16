<script setup>
  import { defineProps, computed } from 'vue';
  import {
    mdiFan,
    mdiMinusThick,
    mdiPlusThick
  } from '@mdi/js';

  const props = defineProps({
    label: String,
    value: Number
  })

  const fanStyle = computed(() => {
    return {
      'custom-switch-button--active': props.value > 0
    }
  })

</script>

<template>
  <div class="custom-fan-control">
    <ha-button @click="$emit('main-click')" class="custom-switch-button" :class="fanStyle" :title="`Toggle ${props.label} fan on/off`">
      <ha-svg-icon :path="mdiFan"></ha-svg-icon>
    </ha-button>
    <div class="custom-fan-control__button-group">
      <ha-button @click="$emit('minus-click')" :disabled="props.value === 0" :title="`${props.label} fan -10%`">
        <ha-svg-icon :path="mdiMinusThick"></ha-svg-icon>
      </ha-button>
      <span>
        {{ props.value }}%
      </span>
      <ha-button @click="$emit('plus-click')" :disabled="props.value === 100" :title="`${props.label} fan +10%`">
        <ha-svg-icon :path="mdiPlusThick"></ha-svg-icon>
      </ha-button>
    </div>
  </div>
</template>
<style lang="scss">
  @import url('@/main.scss');
  .custom-fan-control {
    &__button-group {
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
  name: 'custom-fan-control',
  friendlyName: 'Custom Fan Control',
  description: '',
}

</script>
