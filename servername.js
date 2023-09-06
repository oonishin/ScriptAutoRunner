$.ajax({
  type    : 'GET',
  url     : '',
  cache   : false,
  success : function (data, status, xhr) {
    var serverName = xhr.getResponseHeader('Server');
    console.log(serverName);
    $("#imui-user-utility > li > a > span.ui-button-text").append('<br>' + serverName);
    $("#im-element-4 > div > div.im-hichee-side-menu-utility > ul > li > span.im-hichee-side-menu-utility-user-name").append(' (' + serverName + ')');
  }
});
