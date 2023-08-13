const template = document.createElement('template');

template.innerHTML = `
  <style>
    #test-case {
      font-family: var(--font-family);
      display: flex;
      justify-content: space-between;
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

  #handleCallback(callback) {
    const indicator = this.shadowRoot.querySelector('#indicator');
    if (callback()) {
      indicator.textContent = '✅';
    } else {
      indicator.textContent = '❌';
    }
  }

  #handleClick = (callback) => () => {
    this.#handleCallback(callback);
    this.button.remove();
  }

  test(callback) {
    if (this.hasAttribute('defer')) {
      this.button.addEventListener('click', this.#handleClick(callback))
    } else {
      this.#handleCallback(callback)
    }
  }

  connectedCallback() {
    const indicator = this.shadowRoot.querySelector('#indicator');
    const description = this.shadowRoot.querySelector('#description');
    const testDescription = this.getAttribute('description')
    const testCaseEl = this.shadowRoot.querySelector('#test-case');

    const shouldDefer = this.hasAttribute('defer');

    description.textContent = testDescription;

    indicator.textContent = '❌';

    if (shouldDefer) {
      indicator.textContent = '🕔';

      this.button = document.createElement('button');
      this.button.textContent = 'Run';
      testCaseEl.appendChild(this.button);
    }
  }
}

customElements.define('test-case', TestCase);