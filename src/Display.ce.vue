<script setup>
  import { ref } from 'vue';
  import X1CPrinterCard from './ha-components/bambu/X1CPrinterCard.ce.vue';

  const mockProps = ref({});
  if (process.env.NODE_ENV === 'development') {

    import('./mock').then((hassMock) => {
      mockProps.value = {
        hass: hassMock.default
      }
    })
  }

  const provideHass = () => {
    if(window.customCards && Array.isArray(window.customCards)) {
      let cards;
      window.customCards.forEach((card) => {
        cards = document.getElementsByTagName(card.type)
        for(let el of cards) {
          el.hass = mockProps.value.hass
          el.setConfig({entity: 'sensor.x1c_status'})
        }
      })
    }
  }

  const simulateHass = () => {
    const interval = setInterval(() => {
      provideHass();
    }, 2000)
  }

  simulateHass();
</script>
<template>
  <!-- <ams-card :hass="mockProps.hass" :config="{entity: 'sensor.x1c_status'}"></ams-card> -->
  <x1c-printer-card></x1c-printer-card>
</template>

<script>
export default {
  name: 'appdev-display'
}
</script>
