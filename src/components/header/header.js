import { LitElement, html, css } from "https://cdn.skypack.dev/lit";
import Logo from "./logo.js";

export default class Header extends LitElement {
  static styles = css`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`;

  render() {
    return html` 
    <header>
      <app-logo></app-logo>
      <div>test</div>
    </header>`;
  }
}

customElements.define("app-header", Header);