import { defineCustomElement } from 'vue';
import * as HAcomponents from './ha-components/';
import * as internalComponents from './internal-components';
import AppdevDisplay from './Display.ce.vue';
// import './main.scss';


class VueCustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.vueElement = null;
    this.config = {};
    this.tag = this.nodeName.toLowerCase()
  }

  static get observedAttributes() { return ['hass', 'config', 'title']; }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, oldValue, newValue)
    if (this.vueElement) {
      console.log('if (this.vueElement) {', name, oldValue, newValue)
      this.vueElement[name] = newValue;
    }
  }


  set hass(hass) {
    console.log(`SET HASS ${this.tag}`, hass);
    if (this.vueElement) {
      this.vueElement.hass = hass;
    }
  }

  setConfig(config) {
    if (!config) {
      return;
    }

    this.config = config;
    if (this.vueElement) {
      this.vueElement = {
        ...this.vueElement,
        config: this.config
      }
    }
  }

  createVueApp() {
    this.vueElement = document.createElement(`${this.tag}-ce`);
    this.vueElement.config = this.config;
    this.shadowRoot.appendChild(this.vueElement);

  }

  connectedCallback() {
    if (!this.vueElement) {
      this.createVueApp();
    }
  }

  disconnectedCallback() {
    if (this.vueElement) {
      this.shadowRoot.removeChild(this.vueElement);
      this.vueElement = null;
    }
  }
}


window.customCards = window.customCards || [];
const registerHAComponent = (Component) => {
  let VueCustomElement;
  let VueCustomClass;


  if (!customElements.get(`${Component.name}-ce`)) {
    VueCustomElement = defineCustomElement(Component);
    console.log('VueCustomElement', VueCustomElement)
    customElements.define(`${Component.name}-ce`, VueCustomElement);
  }

  if (!window.customCards.some(card => card.type === Component.name)) {
    window.customCards.push({
      type: Component.name,
      name: Component.friendlyName,
      preview: true,
      description: Component.description,
    });
  }

  if (!customElements.get(Component.name)) {
    VueCustomClass = class extends VueCustomCard {  }
    customElements.define(Component.name, VueCustomClass);
  }
}

const registerInternalComponent = (InternalComponent) => {
  let VueCustomElement = defineCustomElement(InternalComponent);

  customElements.define(InternalComponent.name, VueCustomElement);

  return customElements.whenDefined(InternalComponent.name)
    .then((res) => {
      console.log(`InternalComponent.name ${InternalComponent.name} defined`);
      return res
    })
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

