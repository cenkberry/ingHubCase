import { LitElement, html } from "https://cdn.skypack.dev/lit";

export default class Footer extends LitElement {
  render() {
    return html` 
    <footer>
      footer
    </footer>`;
  }
}

customElements.define("app-footer", Footer);