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
// con(s); // Hello, Michael!
// var arr=['sd','fd','dfad','fdsf','ad'];
// for (const i of arr) {
//     console.log(i);
// }
// arr.forEach(item => {
//     console.log(item);
// });