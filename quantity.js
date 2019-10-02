/**
 *  @class
 *  @function Quantity
 *  @param {DOMobject} element to create a quantity wrapper around
 */
export default class QuantityInput extends HTMLElement {
  constructor(decreaseText, increaseText) {
    super();

    // Create input
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'number');
    this.input.setAttribute('name', 'quantity');
    this.input.setAttribute('pattern', '[0-9]+');
    this.input.setAttribute('aria-label', 'Current quantity');

    // Set default attribute
    this.input.value = 1;

    // Get text for buttons
    this.decreaseText = decreaseText || 'Decrease quantity';
    this.increaseText = increaseText || 'Increase quantity';

    // Button constructor
    function Button(text, label = 'change quantity', className){
      this.button = document.createElement('button');
      this.button.textContent = text;
      this.button.classList.add(className);

      this.button.setAttribute('title', text);
      this.button.setAttribute('aria-label', label);
      this.button.setAttribute('role', 'button');
      this.button.setAttribute('type', 'button');

      return this.button;
    }

    // Create buttons
    this.subtract = new Button(this.decreaseText, 'Decrease quantity', 'sub');
    this.add = new Button(this.increaseText, 'Increase quantity', 'add');

    // Add functionality to buttons
    this.subtract.addEventListener('click', () => this.change_quantity(-1));
    this.add.addEventListener('click', () => this.change_quantity(1));

    // Add input and buttons to wrapper
    this.appendChild(this.subtract);
    this.appendChild(this.input);
    this.appendChild(this.add);
  }

  change_quantity(change) {
    // Get current value
    let quantity = Number(this.input.value);

    // Ensure quantity is a valid number
    if (isNaN(quantity)) quantity = 1;

    // Change quantity
    quantity += change;

    // Ensure quantity is always a number
    quantity = Math.max(quantity, 1);

    // Output number
    this.input.value = quantity;
  }

  set value(val) {
    this.input.value = val;
  }

  get value() {
    return this.input.value;
  }

  get name() {
    return this.input.name;
  }

  get id() {
    return this.input.id;
  }
}
