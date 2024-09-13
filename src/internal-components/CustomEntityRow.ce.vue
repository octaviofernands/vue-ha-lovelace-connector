<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String,
    value: [String, Number],
    suffix: {
      type: String,
      default: ''
    },
    icon: [String, Object]
  })
</script>

<template>
  <div class="custom-entity-row">
    <div class="custom-entity-row--container">
      <div class="custom-entity-row--icon">
        <ha-svg-icon :path="props.icon" v-if="props.icon"></ha-svg-icon>
      </div>
      <div class="custom-entity-row--info">
        {{ props.title }}
      </div>
      <div class="custom-entity-row--value">
        {{ props.value }} {{ props.suffix }}
      </div>
    </div>
  </div>

</template>
<style lang="scss">
  .custom-entity-row {
    display: block;
    overflow: clip visible;

    &--container {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    &--icon {
      flex: 0 0 40px;
      position: relative;
      display: inline-block;
      width: 40px;
      color: var(--paper-item-icon-color, #44739e);
      border-radius: 50%;
      height: 40px;
      text-align: center;
      background-size: cover;
      line-height: 40px;
      vertical-align: middle;
      box-sizing: border-box;
    }

    &--info {
      margin-left: 16px;
      margin-right: 8px;
      margin-inline: 16px 8px;
      flex: 1 1 30%;
    }

    &--info, &--info > * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
<script>
export default {
  name: 'custom-entity-row',
  friendlyName: 'Custom Entity Row',
  description: '',
}

</script>
