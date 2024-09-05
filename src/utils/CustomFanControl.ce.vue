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
      'custom-fan-control--active': props.value > 0
    }
  })

</script>

<template>
  <div class="custom-fan-control" :class="fanStyle">
    <ha-button @click="$emit('main-click')" class="custom-fan-control--main-button">
      <ha-svg-icon :path="mdiFan"></ha-svg-icon>
    </ha-button>
    <div class="custom-fan-control--button-group">
      <ha-button @click="$emit('minus-click')" :disabled="props.value === 0">
        <ha-svg-icon :path="mdiMinusThick"></ha-svg-icon>
      </ha-button>
      <span>
        {{ props.value }}%
      </span>
      <ha-button @click="$emit('plus-click')" :disabled="props.value === 100">
        <ha-svg-icon :path="mdiPlusThick"></ha-svg-icon>
      </ha-button>
    </div>
  </div>
</template>
<style lang="scss">
  .custom-fan-control {
    &--main-button {
      ha-svg-icon {
        fill:var(--secondary-text-color, #9b9b9b);
      }
    }

    &--active {
      .custom-fan-control--main-button {
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
  name: 'custom-fan-control',
  friendlyName: 'Custom Fan Control',
  description: '',
}

</script>
