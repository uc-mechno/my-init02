// _main.js
import { global } from './_global.js';
import { accordion } from './_accordion.js';
import { modal } from './_modal.js';
import { slider } from './_slider.js';
import { updateCopyright } from './_updateCopyright.js';

window.addEventListener('load', function () {
  accordion();
  updateCopyright();
});

document.addEventListener('DOMContentLoaded', function () {
  modal();
  slider();
});
