import { LitElement, html } from "https://cdn.skypack.dev/lit";

export default class Header extends LitElement {
  render() {
    return html` 
    <header>
      header
    </header>`;
  }
}

customElements.define("app-header", Header);