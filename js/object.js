"use strict";

const options = {
      name: 'test',
      width: 1024,
      height: 1024,
      colors: {
            border: 'black',
            bg: 'red'
      },
      someMethod: function() {
            console.log(`object do some logic`);
      }
};

for (let key in options) {
      console.log(options[key]);
}
console.log(Object.keys(options).length);

// get border and bg as variable
let {border, bg} = options.colors;
console.log(`${border}, ${bg}`);

options.someMethod();

console.log(options);