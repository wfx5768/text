'use strict';
var s = 'hello';
var node = 'aaaaa';
function con(name){
    console.log("you are"+name);
}
function ale(name){
    alert("you are"+name);
}
module.exports={
    con:con,
    ale:ale,
    node:function(){
        return node;
    }
}