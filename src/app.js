import { LitElement, html } from "https://cdn.skypack.dev/lit";
import Header from "./components/header/header.js";

class App extends LitElement {
  
  render() {
    return html`
      <app-header></app-header>
      page
    `;
  }
}

customElements.define("app-root", App);
