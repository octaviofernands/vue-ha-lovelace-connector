<template>
  <ha-card style="padding:1em;">
    <h1>Configuration</h1>
    <pre>{{ config }}</pre>
    <h2>Status: {{ hass && hass.connected ? 'HA Connected' : 'No HA Connection' }}</h2>
    <div>
      bed temp: {{ attributes.bed_temp }}
    </div>
    <div>

    </div>
  </ha-card>
</template>

<script>
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'x1c-printer-card',
  friendlyName: 'X1C Printer Card',
  description: 'Manage data from BambuLab X1C Printer (MQTT)',
  props: {
    config: Object,
    hass: Object
  },
  setup(props) {
    const attributes = ref({});
    console.log('PROPS', props)
    watch(() => props.hass, (newVal) => {
      console.log('WATCH', newVal)
      if (props.hass) {
        const state = props.hass.states[props.config.entity];
        attributes.value = state.attributes;
      }
    }, {
      immediate: true
    })



    return {
      attributes: attributes
    };

    // return {
    //   callService,
    //   callWebSocket
    // };
  },
});
</script>
