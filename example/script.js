import QuantityInput from '../quantity.js';

// Set up quantity forms
(function(){
  let quantities = document.querySelectorAll('[data-quantity]');

  if (quantities instanceof Node) quantities = [quantities];
  if (quantities instanceof NodeList) quantities = [].slice.call(quantities);
  if (quantities instanceof Array) {
    quantities.forEach(div => (div.quantity = new QuantityInput(div, 'Down', 'Up')));
  }
})();
