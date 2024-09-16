import { defineCustomElement, toRefs, h, watchEffect, ref, mergeProps, provide } from 'vue';
import * as HAcomponents from './ha-components/';
import * as internalComponents from './internal-components';
import AppdevDisplay from './Display.ce.vue';


const createElementInstance = ({ component = null, props = [] } = {}) => {
  return class extends defineCustomElement({
    props: mergeProps(component.props, props),
    emits: component.emits,
    styles: component.styles,
    setup(props, { emit }) {
      const {hass, config} = toRefs(props);
      const attributes = ref({});
      watchEffect(() => {
        if (hass.value && hass.value.states && config.value && config.value.entity) {
          const state = hass.value.states[config.value.entity];
          attributes.value = state.attributes;
        }
      })


      provide('attributes', attributes);
      provide('hass', hass);
      provide('config', config);

      const events = Object.fromEntries(
        (component.emits || []).map((event) => {
          return [
            `on${ event[0].toUpperCase() }${ event.slice(1) }`,
            (payload) => emit(event, payload)
          ];
        })
      );

      return () => h(component, {
        ...props,
        ...events
      })
    }
  }) {
      setConfig(value) {
        this.config = value
      }
    };
}

window.customCards = window.customCards || [];
const registerHAComponent = (Component) => {
  let VueCustomClass;

  if (!window.customCards.some(card => card.type === Component.name)) {
    window.customCards.push({
      type: Component.name,
      name: Component.friendlyName,
      preview: true,
      description: Component.description,
    });
  }

  if (!customElements.get(Component.name)) {

    VueCustomClass = createElementInstance({
      component: Component,
      props: {
        hass: {
          default: ()=>({})
        },
        config: {
          default: ()=>({})
        }
      }
    })

    customElements.define(Component.name, VueCustomClass);
  }
}



const registerInternalComponent = (InternalComponent) => {
  let VueCustomElement = defineCustomElement(InternalComponent);

  customElements.define(InternalComponent.name, VueCustomElement);
}

let InternalComponent;
let HAComponent;

Object.keys(internalComponents).forEach(async key => {
  InternalComponent = internalComponents[key];
  registerInternalComponent(InternalComponent)
});

Object.keys(HAcomponents).forEach(async key => {
  HAComponent = HAcomponents[key];
  registerHAComponent(HAComponent)
});

if (process.env.NODE_ENV === 'development') {
  registerHAComponent(AppdevDisplay);
}

