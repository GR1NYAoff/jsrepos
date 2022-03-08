"use strict";

// implemented shedule of my day using callbacks

function startMyDay (cb1, cb2, cb3, cb4) {
      console.log('start a new day');
      if (cb1){
            cb1(cb2, cb3, cb4);
      }
}
function wakeUp(cb2, cb3, cb4) {
      console.log('I am waking up');
      if(cb2) {
            cb2(cb3, cb4);
      }
}
function haveBreakfast (cb3, cb4) {
      console.log('I am having breakfast');
      if (cb3){
            cb3(cb4);
      }
}
function programming (cb4){
      console.log('I am programming');
      if (cb4){
            cb4();
      }
}
function goSleep () {
      console.log('I am sleeping');
}

startMyDay(wakeUp, haveBreakfast, programming, goSleep);