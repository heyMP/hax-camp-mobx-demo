import { LitElement, html } from 'http://unpkg.com/lit-element?module';
import { autorun } from "https://unpkg.com/mobx?module"
import { store } from "./store.js"
import { MobxLitElement } from "https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module";

class CountApp extends MobxLitElement {

  render(){
    return html`
      <button @click=${() => store.decrementCount()} alt="Decrement Count">-</button>
      ${store.count}
      <button @click=${() => ++store.count} alt="Increment Count">+</button>
    `;
  }

}
customElements.define('count-app', CountApp);