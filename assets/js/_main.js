// _main.js

import { accordion } from './_accordion.js';
import { modal } from './_modal.js';
import { slider } from './_slider.js';

window.addEventListener('load', function () {
  accordion();
});

document.addEventListener('DOMContentLoaded', function () {
  modal();
  slider();
});
