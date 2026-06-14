import { global } from './_global.js';

/**
 * コピーライト（#js-copy-year）に現在の西暦を表示する。
 */
export const updateCopyright = () => {
  console.log(global.SITE_URL);
  const year = document.getElementById('js-copy-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
};
