import { LitElement, html } from 'http://unpkg.com/lit-element?module';
import { autorun } from "https://unpkg.com/mobx?module"
import { store } from "./store.js"
import { MobxLitElement } from "https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module";

class CountToolbar extends MobxLitElement {

  render(){
    return html`
      Hey there user! You have a count of ${store.count}!
      <button @click=${() => store.decrementCount()} alt="Decrement Count">-</button>
      <button @click=${() => store.count = 0} alt="Reset Count">reset</button>
    `;
  }
}
customElements.define('count-toolbar', CountToolbar);