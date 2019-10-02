import QuantityInput from '../quantity.js';

// Define custom element
window.customElements.define('quantity-input', QuantityInput);

// Add test element
(function(){
  let fieldset = document.querySelector('[data-quantity]');

  fieldset.appendChild(new QuantityInput('Down', 'Up'));
})();
