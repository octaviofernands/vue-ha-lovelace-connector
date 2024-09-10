import { defineCustomElement } from 'vue';
import * as components from './components/';
import * as utils from './utils/';
import AppdevDisplay from './Display.ce.vue';


class VueCustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.vueElement = null;
    this.config = {};
    this.tag = this.nodeName.toLowerCase()
  }


  set hass(hass) {
    console.log('SET HASS', hass);
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
const registerComponent = (Component) => {
  let VueCustomElement;
  let VueCustomClass;

  if (!customElements.get(`${Component.name}-ce`)) {
    VueCustomElement = defineCustomElement(Component);
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
    VueCustomClass = class extends VueCustomCard { }
    customElements.define(Component.name, VueCustomClass);
  }
}

const registerUtil = (Util) => {
  let VueCustomElement = defineCustomElement(Util);

  customElements.define(Util.name, VueCustomElement);

  return customElements.whenDefined(Util.name)
    .then((res) => {
      console.log(`Util.name ${Util.name} defined`);
      return res
    })
}

let Util;
let Component;

Object.keys(utils).forEach(async key => {
  Util = utils[key];
  registerUtil(Util)
});

Object.keys(components).forEach(async key => {
  Component = components[key];
  registerComponent(Component)
});

if (process.env.NODE_ENV === 'development') {
  registerComponent(AppdevDisplay);
}

