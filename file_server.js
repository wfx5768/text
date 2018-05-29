'use strict'

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
// 获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir' + root);
// 创建服务器
var server = http.createServer(function(request,response){
    // 获取url路径
    var pathname = url.parse(request.url).pathname;
    // 获取对应的本地文件路径
    var filepath = path.join(root,pathname);
    // 获取文件状态
    fs.stat(filepath,function(err,status){
        if(!err&&status.isFile()){
            // 没出错且文件存在
            console.log('200'+request.url);
            // 发出200响应
            response.writeHead(200);
            // 将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404'+request.url);
            // 发出404响应
            response.writeHead(404);
            response.end('404 NOT FOUND');
        }
    })
})

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');