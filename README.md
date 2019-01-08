# Quantity Input #

JavaScript snippet to create a super-light-weight (1.49kb uncompressed, 0.71kb compressed, 0.35kb gzipped), usable and reliable quantity input that replaces the horrible, fiddly little input buttons built in to the `number` input in the browser. It is written in ES2015, so will need to be transpiled for older browsers.


## Installation ##

You can install either by copying the files from this repository or running `npm i @ohepworthbell\quantityinput`.


## How to use it ##

HTML
```html
<div id="your-element"></div>
```

Javascript
```javascript
// Import (or include) QuantityInput.js
import QuantityInput from './quantityinput.js';

// jQuery
let element = $('div#your-element')[0];
element.quantity = new QuantityInput(element));

// Vanilla
let element = document.getElementById('your-element');
element.quantity = new QuantityInput(element));
```


## To do ##

- Provide transpiled/compressed variants
- Allow for typing in numbers to input (including pattern regex for smartphones/tablets)


## Feedback ##

Any feedback or bugs, please raise an issue