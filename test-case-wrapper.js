const template = document.createElement('template');
template.innerHTML = `
  <style>
    #test-case-wrapper {
      font-family: var(--font-family);
      box-sizing: border-box;
      border: 1px solid black;
      padding: 16px;
      margin: 8px auto;
      max-width: 800px;

    }
  </style>
  <div id="test-case-wrapper">
    <h2>Test Cases</h2>
    <slot></slot>
  </div>
`;


class TestCaseWrapper extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('test-case-wrapper', TestCaseWrapper);