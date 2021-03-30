window.addEventListener('load', () => {
  var target = document.getElementsByClassName("fc-close");
  if(!target) return;
  var event = document.createEvent( "MouseEvents" ); // イベントオブジェクトを作成
  event.initEvent("click", false, true); // イベントの内容を設定
  target[0].dispatchEvent(event); // イベントを発火させる
});
