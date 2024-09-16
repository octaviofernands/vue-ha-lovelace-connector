<script setup>
  import { ref } from 'vue';

  const mockProps = ref({});
  if (process.env.NODE_ENV === 'development') {

    import('./mock').then((hassMock) => {
      mockProps.value = {
        hass: hassMock.default
      }

      window.hass = hassMock.default(new Date())
    })
  }

  const $$$ = (selector, rootNode=document.body) => {
    const arr = []

    const traverser = node => {
        // 1. decline all nodes that are not elements
        if(node.nodeType !== Node.ELEMENT_NODE) {
            return
        }

        // 2. add the node to the array, if it matches the selector
        if(node.matches(selector)) {
            arr.push(node)
        }

        // 3. loop through the children
        const children = node.children
        if (children.length) {
            for(const child of children) {
                traverser(child)
            }
        }

        // 4. check for shadow DOM, and loop through it's children
        const shadowRoot = node.shadowRoot
        if (shadowRoot) {
            const shadowChildren = shadowRoot.children
            for(const shadowChild of shadowChildren) {
                traverser(shadowChild)
            }
        }
    }

    traverser(rootNode)

    return arr
}



  const provideHass = () => {
    if(window.customCards && Array.isArray(window.customCards) && mockProps.value.hass) {
      const cardsSelector = window.customCards.map(card => card.type).join(',');
      const cards = $$$(cardsSelector);
      for(let el of cards) {
        el.hass = mockProps.value.hass((new Date()).getTime())
        if(!el.config || !el.config.type)
        el.setConfig({
          type: 'custom:x1c-printer-card',
          entity: 'sensor.x1c_status',
          input_topic: import.meta.env.VITE_X1C_INPUT_TOPIC,
          title: 'E o bambu?'
        })
      }
    }
  }

  const simulateHass = () => {
    const interval = setInterval(() => {
      provideHass();
    }, 1000)
  }
  provideHass();
  simulateHass();
</script>
<template>
  <!-- <ams-card></ams-card> -->

  <x1c-printer-card></x1c-printer-card>
</template>

<script>
export default {
  name: 'appdev-display'
}
</script>
