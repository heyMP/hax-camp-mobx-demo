import { LitElement, html } from "https://unpkg.com/lit-element?module";
import { MobxLitElement } from "https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module";
import { store } from "./hax-store.js"
import "./hax-app-toolbar.js"

class HaxApp extends MobxLitElement {
  constructor() {
    super();
    this.store = store;
  }

  render() {
    return html`
      <hax-app-toolbar></hax-app-toolbar>
      <h1>Welcome to my app</h1>
      Count: ${this.store.count}
      <button @click=${this._updateCount}>Update Count</button>
    `
  }

  _updateCount() {
    this.store.count = ++this.store.count
  }

}

customElements.define('hax-app', HaxApp)