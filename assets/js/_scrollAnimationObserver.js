import { global } from './_global.js';
/**
 * スクロールアニメーションを Intersection Observer API で実装。
 * @param {boolean} once - true: 一度だけアニメーション、false: 無限にアニメーション（デフォルト: false）
 */
export const scrollAnimationObserver = (once = false) => {
  const animationElements = document.querySelectorAll('.js-trigger');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        if (once) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!once) {
          entry.target.classList.remove('is-animated');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  animationElements.forEach((element) => observer.observe(element));
};
