import { accordion } from './_accordion.js';
import { modal } from './_modal.js';
import { slider } from './_slider.js';
import { viewportSwitch } from './_viewportSwitch.js';
import { updateCopyright } from './_updateCopyright.js';

window.addEventListener('load', function () {
  accordion();
  updateCopyright();
  viewportSwitch();
});

document.addEventListener('DOMContentLoaded', function () {
  modal();
  slider();
});
