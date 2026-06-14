/**
 * ビューポート幅に応じて `meta[name="viewport"]` を切り替える。
 *
 * 360px 以下では固定幅にし、それ以外ではデバイス幅に合わせる。
 * 画面幅の判定には `window.screen.width` を使い、`width=360` に切り替えた後でも
 * 元の画面幅へ戻ったことを判定できるようにする。
 *
 * @returns {void}
 */
export const viewportSwitch = () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) return;

  const getViewportWidth = () => window.screen.width || window.innerWidth;

  const switchViewport = () => {
    const value =
      getViewportWidth() > 360
        ? 'width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=2.0'
        : 'width=360';

    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  window.addEventListener('resize', switchViewport, false);
  window.addEventListener('orientationchange', switchViewport, false);
  switchViewport();
};
