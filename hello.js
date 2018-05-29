'use strict'
var http=require('http');
var server=http.createServer(function(request,response){
    console.log(request.method+':'+request.url);
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello World!</h1>');
})
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
// 将字符串转换成url对象
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// 处理本地文件使用path模块
var path = require('path');
var workDir = path.resolve('.');
var filePath = path.join(workDir,'pub','index.html');
