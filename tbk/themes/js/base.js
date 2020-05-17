// var CTX = "http://localhost:8080";

// var CTX = "http://192.168.0.101:8080";


//线上地址
var CTX = "http://139.155.87.87:8080/aebiz";


//获取传递的单个参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}