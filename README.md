# Odyssey Test Utils

Make assertions against the HTML document on load

## Installation

`npm i -D odyssey-test-utils`

## Usage

### HTML

Add the following web components to your page.

```html
<test-case-wrapper>
  <test-case id="test-1" description="should pass"></test-case>
  <test-case id="test-2" description="should fail"></test-case>
</test-case-wrapper>
```

### JavaScript

Provide the following JavaScript to your file

```js
import "./test-case.js";
import "./test-case-wrapper.js";

const test1 = document.querySelector("#test-1");

test1.test(() => {
  // Replace this with whatever assertions you need, as long the function returns a boolean
  return true;
});
```
