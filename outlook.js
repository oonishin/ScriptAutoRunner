// 転送メール無効化通知を自動クローズ
console.log('Event Load!');
window.addEventListener('DOMContentLoaded', function(e){
  alert('Event Load2!');

  // 監視ターゲットの取得
  const targetClass = 'ms-Button _23T7xmD47XsO8wwTa_w-ro ms-Button--icon _1HNQs-NWhKrh1Bs9Hh_iTS root-58';
  const target = document.getElementsByClassName(targetClass);
  if (targetElements.length == 1){
    targetElements[0].click();
  }
  /*
  // オブザーバーの作成
  const observer = new MutationObserver(records => {
    // 変化が発生したときの処理を記述
    console.log('Event Fire!');
    target[0].click();
  })
  
  // 監視の開始
  observer.observe(target[0], {
    attributes: true,
    childList: true
  })
*/
}, {once: true});
