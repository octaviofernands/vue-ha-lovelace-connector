<script setup>
  import { defineProps, computed } from 'vue';

  const props = defineProps({
    min: Number,
    max: Number,
    value: Number,
    color: String
  })

  const normalize = (value, min, max) => {
    if (isNaN(value) || isNaN(min) || isNaN(max)) {
      // Not a number, return 0
      return 0;
    }
    if (value > max) return max;
    if (value < min) return min;
    return value;
  };

  const getValueInPercentage = (
    value,
    min,
    max
  ) => {
    const newMax = max - min;
    const newVal = value - min;
    return (100 * newVal) / newMax;
  };

  const roundWithOneDecimal = (value) =>
    Math.round(value * 10) / 10;

  const percentage = computed(() => {
    return roundWithOneDecimal(
      getValueInPercentage(
        normalize(props.value, props.min, props.max),
        props.min,
        props.max
      )
    );
  });
</script>

<template>
  <div class="custom-bar">
    <svg> <g> <rect></rect> <rect :width="`${percentage}%`"></rect> </g> </svg>
  </div>

</template>
<style lang="scss">
  .custom-bar {
    display: block;



    svg {
      height: 12px;
      border-radius: 4px;
      width: 100%;

      rect {
        height: 100%;
      }

      rect:first-child {
        width: 100%;
        fill: var(--ha-bar-background-color, var(--secondary-background-color));
      }

      rect:last-child {
        fill: var(--primary-color);
      }
    }
  }
</style>
<script>
export default {
  name: 'custom-bar',
  friendlyName: 'Custom Bar',
  description: '',
}

</script>
