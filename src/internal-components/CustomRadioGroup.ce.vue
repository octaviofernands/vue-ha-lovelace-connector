<script setup>

import {
  mdiRadioboxIndeterminateVariant
} from '@mdi/js';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: Object,
  modelValue: [String, Number],
  name: String
})

const getRadioStyle = (value) => {
  return {
    'custom-radio-group--option-active': value == props.modelValue
  }
}

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="custom-radio-group">
    <label v-for="(opt, value) in props.options" :key="`${props.name}_${value}`" class="custom-radio-group--option"
      :class="getRadioStyle(value)">
      <input type="radio" :name="props.name" :value="value" :modelValue="value" :checked="value == props.modelValue"
        @input="emit('update:modelValue', $event.target.value)" />
      <ha-svg-icon :path="opt.icon ? opt.icon : mdiRadioboxIndeterminateVariant"></ha-svg-icon>

      {{ opt.label }}
    </label>
  </div>
</template>
<style lang="scss">
:host {
  display: block;
  width: 100%;
  margin: 4px 0;
}

.custom-radio-group {
  display: flex;
  align-items: center;
  justify-content: center;

  &--option {
    cursor: pointer;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      position: absolute;
      visibility: hidden;
    }

    ha-svg-icon {
      width: 40px;
      height: 40px;
      margin-bottom: 8px;
    }

    &-active {
      ha-svg-icon {
        fill: var(--primary-color, #03a9f4);
      }

    }
  }
}
</style>
<script>
export default {
  name: 'custom-radio-group',
  friendlyName: 'Custom Radio Group',
  description: '',
}

</script>
