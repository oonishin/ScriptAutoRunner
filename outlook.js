// 受信トレイの欄を消す
var targetClass = '_3oZkxfK_sfMuqvT6pZ7cT9 R13rCAdCs2xraNrPX7bVq _3dW5_u_jpraXm7_TFtLx1F';
var targetElements = document.getElementsByClassName(targetClass);
if (targetElements.length == 1){
  targetElements[0].parentNode.removeChild(targetElements[0]);
}

// 転送メール無効化通知を自動クローズ
  var close = function(){
    //console.log('Event Fire!');
    // 監視ターゲットの取得
    const targetClass = 'ms-Button _23T7xmD47XsO8wwTa_w-ro ms-Button--icon _1HNQs-NWhKrh1Bs9Hh_iTS root-58';
    const targetElements = document.getElementsByClassName(targetClass);
    if (targetElements.length == 1){
      targetElements[0].click();
    }
  }

setTimeout(close, 5500);
