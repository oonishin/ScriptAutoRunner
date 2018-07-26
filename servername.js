$.ajax({
  type    : 'GET',
  url     : '',
  cache   : false,
  success : function (data, status, xhr) {
    var serverName = xhr.getResponseHeader('Server');
    console.log(serverName);
    $("#imui-container > div.imui-title > h1 ").text("MyBox: " + serverName)
  }
});
