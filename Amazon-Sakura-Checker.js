window.addEventListener('load', () => {
  const target = document.querySelector('#averageCustomerReviews_feature_div');
  const id = location.pathname.split('/')[3];
  if (!id || !target) return;
  const iframe = document.createElement('iframe');
  iframe.src = `https://sakura-checker.jp/search/${id}/`;
  iframe.setAttribute('frameborder', 0);
  iframe.style = `width: 100%; height: 600px;`;
  target.parentNode.insertBefore(iframe, target);
});
