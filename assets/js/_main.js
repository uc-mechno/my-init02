import { viewportSwitch } from './_viewportSwitch.js';
import { updateCopyright } from './_updateCopyright.js';

window.addEventListener('load', function () {
  updateCopyright();
  viewportSwitch();
});

document.addEventListener('DOMContentLoaded', function () {});
