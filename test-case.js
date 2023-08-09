const template = document.createElement('template');

template.innerHTML = `
  <style>
    #test-case {
      font-family: var(--font-family);
    }
  </style>

  <div id="test-case">
    <p>
      <span id="indicator"></span>
      <span id="description"><span>
    </p>
  </div>
`

class TestCase extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  test(callback) {
    if (callback()) {
      const indicator = this.shadowRoot.querySelector('#indicator'); 
      indicator.textContent = '✅';
    }
  }


  connectedCallback() {
    const indicator = this.shadowRoot.querySelector('#indicator');
    const description = this.shadowRoot.querySelector('#description');
    const testDescription = this.getAttribute('description')

    description.textContent = testDescription;
    indicator.textContent = '❌';
  }
}

customElements.define('test-case', TestCase);