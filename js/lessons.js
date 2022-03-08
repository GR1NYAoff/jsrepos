"use strict";

const arr = [1, 2, 4, 34, 32, 19];

let numComparer = function(a,b) {
      return a-b;
};

arr.sort(numComparer);

for (let item of arr) {
      console.log(item);
}

arr.forEach(function(item, index, arr) {
      console.log(`${index}: ${item} in ${arr}`);
});