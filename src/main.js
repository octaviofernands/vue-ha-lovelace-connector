import { defineCustomElement } from 'vue';
import * as components from './components/';

class VueCustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.vueElement = null;
    this.config = {};
    this.tag = this.nodeName.toLowerCase()
  }

  set hass(hass) {
    console.log('SET HASS', this, hass)
    if (this.vueElement) {
      console.log('SET HASS 2', this, hass)
      this.vueElement.hass = hass;
    }
  }

  setConfig(config) {
    console.log('1 CONFIG', this, config)
    if (!config) {
      return;
    }

    this.config = config;
    if (this.vueElement) {
      console.log('3 has vueElement', this, this.vueElement)
      this.vueElement = {
        ...this.vueElement,
        config: this.config
      }
    }
  }

  createVueApp() {
    this.vueElement = document.createElement(`${this.tag}-ce`);
    console.log('2', this.vueElement)
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
let Component;
Object.keys(components).forEach(key => {
  Component = components[key];
  if (!customElements.get(`${Component.name}-ce`)) {
    const VueCustomElement = defineCustomElement(Component);
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
    customElements.define(Component.name, VueCustomCard);
  }
});



