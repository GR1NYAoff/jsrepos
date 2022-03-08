"use strict";

function first (callback){
      console.log(1);
      callback();
}

function second(callback){
      console.log(2);
      callback();
}
function third() {
      console.log(3);
}
first(function() {
      second(function(){
            third();
      });
});

console.log();

// ANOTHER WAY
         //1    2    3   4    5
function first(cb1, cb2, cb3, cb4){
      console.log('1');
      if (cb1) {
            cb1(cb2, cb3, cb4);
      }
}
function second(cb2, cb3, cb4){
      console.log('2');
      if (cb2){
            cb2(cb3, cb4);
      }
}
function third(cb3, cb4){
      console.log('3');
      if(cb3){
            cb3(cb4);
      }
}
function fourth(cb4){
      console.log('4');
      if (cb4){
            cb4();
      }
}
function fifth (){
      console.log('5');
}
first(second,third,fourth, fifth); //1 2 3 4 5

console.log();

first(second,fourth); // 1 2 4