'use strict';

// 引入hello模块:
var con = require('./nodeText');

var s = 'Michael';
console.log(con.node());
con.con(con.node);
console.log(typeof(window))
var fs=require('fs');
fs.readFile('sample.txt','UTF-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
fs.readFile('sample.png','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        var text=data.toString('utf-8');
        // console.log(text);
        var buf=Buffer.from(text,'utf-8');
        console.log(buf);
    }
})
try {
    var data=fs.readFileSync('sample.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}
var data2='hello, node.js!';
fs.writeFile('output.txt',data2,function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})
fs.stat('sample.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log('isFile:'+stat.isFile());
        console.log('isDirectory:'+stat.isDirectory());
        if(stat.isFile()){
            console.log('size:'+stat.size);
            console.log('birth time:'+stat.birthtime);
            console.log('modified time:'+stat.mtime);
        }
    }
})
// con(s); // Hello, Michael!
// var arr=['sd','fd','dfad','fdsf','ad'];
// for (const i of arr) {
//     console.log(i);
// }
// arr.forEach(item => {
//     console.log(item);
// });