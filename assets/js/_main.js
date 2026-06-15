import { viewportSwitch } from './_viewportSwitch.js';
import { updateCopyright } from './_updateCopyright.js';
import { scrollAnimationObserver } from './_scrollAnimationObserver.js';
import { headerFixedObserver } from './_headerFixedObserver.js';

document.addEventListener('DOMContentLoaded', function () {
  updateCopyright();
  viewportSwitch();
  scrollAnimationObserver();
  headerFixedObserver();
});

window.addEventListener('load', function () {});

window.addEventListener('resize', function () {});
