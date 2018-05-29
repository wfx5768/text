'use strict';

// 引入hello模块:
var con = require('./nodeText');

var s = 'Michael';
console.log(con.node());
con.con(con.node);
console.log(typeof(window))
var fs=require('fs');
// fs.readFile('sample.txt','UTF-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// fs.readFile('sample.png','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         var text=data.toString('utf-8');
//         // console.log(text);
//         var buf=Buffer.from(text,'utf-8');
//         console.log(buf);
//     }
// })
// try {
//     var data=fs.readFileSync('sample.txt','utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }
// var data2='hello, node.js!';
// fs.writeFile('output.txt',data2,function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok');
//     }
// })
// fs.stat('sample.txt',function(err,stat){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('isFile:'+stat.isFile());
//         console.log('isDirectory:'+stat.isDirectory());
//         if(stat.isFile()){
//             console.log('size:'+stat.size);
//             console.log('birth time:'+stat.birthtime);
//             console.log('modified time:'+stat.mtime);
//         }
//     }
// })
var rs=fs.createReadStream('sample.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA:');
    console.log(chunk);
});
rs.on('end',function(){
    console.log('END');
});
rs.on('error',function(err){
    console.log('ERROR:'+err);
});
var ws1=fs.createWriteStream('output1.txt','utf-8');
ws1.write('使用stream写入文本数据...、n');
ws1.write('END');
ws1.end();
var ws2=fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用stream写入二进制数据...、n','utf-8'));
ws2.write(new Buffer('END',"utf-8"));
ws2.end();
var ws=fs.createWriteStream('copied.txt');
rs.pipe(ws);
// con(s); // Hello, Michael!
// var arr=['sd','fd','dfad','fdsf','ad'];
// for (const i of arr) {
//     console.log(i);
// }
// arr.forEach(item => {
//     console.log(item);
// });