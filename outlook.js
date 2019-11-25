// 転送メール無効化通知を自動クローズ
console.log('Event Load!');

  var close = function(){
    console.log('Event Fire!');
    // 監視ターゲットの取得
    const targetClass = 'ms-Button _23T7xmD47XsO8wwTa_w-ro ms-Button--icon _1HNQs-NWhKrh1Bs9Hh_iTS root-58';
    const targetElements = document.getElementsByClassName(targetClass);
    if (targetElements.length == 1){
      targetElements[0].click();
    }
  }

setTimeout(close, 5500);
