$.ajax({
  type    : 'GET',
  url     : '',
  cache   : false,
  success : function (data, status, xhr) {
    var serverName = xhr.getResponseHeader('Server');
    //console.log(serverName);
    //$("#imui-container > div.imui-title > h1 ").text("MyBox: " + serverName)
    $("#imui-nav-global > div > h1 > a > img").append('<div style=”position:absolute; top:50px; left:40px; width: 430px;”>' + serverName
 + '</div>');      
  }
});
