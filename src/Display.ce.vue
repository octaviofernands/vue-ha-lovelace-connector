<script setup>
  import { ref } from 'vue';

  const mockProps = ref({});
  if (process.env.NODE_ENV === 'development') {

    import('./mock').then((hassMock) => {
      mockProps.value = {
        hass: hassMock.default
      }
    })
  }
</script>
<template>
  <x1c-printer-card :hass="mockProps.hass" :config="{entity: 'sensor.x1c_status'}"></x1c-printer-card>
</template>

<script>
export default {
  name: 'appdev-display'
}
</script>
