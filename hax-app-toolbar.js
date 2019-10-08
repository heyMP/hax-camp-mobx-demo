import { LitElement, html } from "https://unpkg.com/lit-element?module";
import { MobxLitElement } from "https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module";
import { store } from "./hax-store.js"

class HaxAppToolbar extends MobxLitElement {
  constructor() {
    super();
    this.store = store;
  }
  render() {
    return html`
      ${this.store.countDisplay}
    `
  }

}

customElements.define('hax-app-toolbar', HaxAppToolbar)