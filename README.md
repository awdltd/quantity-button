# Quantity Input #

JavaScript snippet to create a super-light-weight (1.49kb uncompressed, 0.71kb compressed, 0.35kb gzipped), usable and reliable quantity input that replaces the horrible, fiddly little input buttons built in to the `number` input in the browser. It is written in ES2015, so will need to be transpiled for older browsers.


## Installation ##

You can install either by copying the files from this repository or running `npm i @ohepworthbell\quantityinput`


## How to use it ##

HTML
```html
<fieldset id="your-element"></fieldset>
```

Javascript
```javascript
// Import (or include) QuantityInput.js
import QuantityInput from './quantityinput.js';

// Basic call
/**
 * @class
 * @function QuantityInput
 * @param element the wrapping element to display the form
 * @param {String} decreaseText (optional) the text to show in the 'decrease' button
 * @param {String} increaseText (optional) the text to show in the 'increase' button
 */
let quantityInput1 = new QuantityInput(element);
let quantityInput2 = new QuantityInput(element, decreaseText, increaseText);

// jQuery
let element = $('#your-element')[0];
element.quantity = new QuantityInput(element, 'Decrease Quantity', 'Increase Quantity'));

// Vanilla
let element = document.getElementById('your-element');
element.quantity = new QuantityInput(element, 'Decrease Quantity', 'Increase Quantity'));
```


## To do ##

- Provide transpiled/compressed variants
- Allow for typing in numbers to input (including pattern regex for smartphones/tablets)


## Feedback ##

Any feedback or bugs, please raise an issue