import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

export default class Logo extends LitElement {
  static styles = css`
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

  render() {
    return html` 
    <a href="/" class="logo">
      <div>logo</div>
      <div>ING</div>
    </a>`;
  }
}

customElements.define("app-logo", Logo);
