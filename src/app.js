import { LitElement, html } from "https://cdn.skypack.dev/lit";
import ResetCss from "./resetcss.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

class App extends LitElement {
  static get styles() {
    return [ResetCss];
  }

  render() {
    return html`
      <app-header></app-header>
      page
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-root", App);
