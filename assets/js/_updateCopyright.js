/**
 * コピーライト（#js-copy-year）に現在の西暦を表示する。
 *
 * @returns {void}
 */
export function updateCopyright() {
  const year = document.getElementById('js-copy-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}
