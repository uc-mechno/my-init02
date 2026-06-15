import { global } from './_global.js';
/**
 * ヘッダーの固定表示を Intersection Observer API で実装
 */
export const headerFixedObserver = () => {
  const scrollObserver = document.querySelector('.scroll-observer');
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.header');

  if (!scrollObserver || !hamburger || !header) return;

  const headerHeight = header.offsetHeight;

  const observerOptions = {
    root: null,
    rootMargin: `${headerHeight}px 0px 0px 0px`,
    threshold: 0,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hamburger.classList.remove('is-fixed');
      } else {
        hamburger.classList.add('is-fixed');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(scrollObserver);
};
