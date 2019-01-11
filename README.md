# Quantity Input #

JavaScript snippet to create a super-light-weight (1.49kb uncompressed, 0.71kb compressed, 0.35kb gzipped), usable and reliable quantity input that replaces the horrible, fiddly little input buttons built in to the `number` input in the browser. It is written using ES6 modules, so will need to be transpiled for older browsers.


## Installation ##

You can install either by copying the files from this repository or running `npm i @ohepworthbell\quantityinput`


## How to use it ##

HTML
```html
<fieldset id="your-element"></fieldset>
```

Javascript
```javascript
// export default class QuantityInput { ... }

// Import QuantityInput.js (ES6)
import QuantityInput from './quantityinput.js';

// Get element to add QuantityInput to
let element = document.getElementById('your-element');

/**
 * @class
 * @function QuantityInput
 * @param element the wrapping element to display the form
 * @param {String} decreaseText (optional) text for 'decrease' button
 * @param {String} increaseText (optional) text for 'increase' button
 */
new QuantityInput(element);
new QuantityInput(element, decreaseText, increaseText);

// Example
element.changeQuantity = new QuantityInput(element, 'Minus 1', 'Add 1'));
```


## To do ##

- Provide transpiled/compressed variants
- ~~Allow for typing in numbers to input (including pattern regex for smartphones/tablets)~~


## Feedback ##

Any feedback or bugs, please raise an issue