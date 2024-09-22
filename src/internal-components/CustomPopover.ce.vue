<script setup>
  import { defineProps, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [String, Object],
      required: true
    }
  })

  const showContent = ref(props.open);
  const contentElement = ref(null);

  onClickOutside(contentElement, () => {
    showContent.value = false;
  })

  const togglePopover = () => {
    showContent.value = !showContent.value;
  }
</script>

<template>
  <div class="custom-popover">
    <a
      href=""
      class="custom-popover__cta"
      @click.prevent="togglePopover"
    >
      <ha-svg-icon :path="props.icon" />
      {{ title }}
    </a>
    <div
      class="custom-popover__content"
      ref="targetElement"
      v-if="showContent"
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
  .custom-popover {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40px;
    height: 40px;

    &__content {
      position: absolute;
      height: 80px;
      max-width: 100vh;
      background: #fff;
      border: solid 1px #ccc;
      border-radius: 4px;
      z-index: 999;
    }
  }
</style>
<script>
export default {
  name: 'custom-popover',
  friendlyName: 'Custom Popover',
  description: '',
}

</script>
