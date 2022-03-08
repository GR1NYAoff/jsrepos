// The series of functions now follow the same pattern, which is how they were before
// p1 data object and p2 is a callback, except for last().
function first(data, cb){
      console.log("first()", data);
      cb(data);
  }
  function second(data, cb) {
      console.log("second()",data);
      cb(data);
  }
  function third(data, cb) {
      console.log("third()",data);
      cb(data);
  }
  function last(data) {
      console.log("last() ", data);
  }
  
  // And the named functions can be called pretty much in any order without 
  // the called functions knowing or caring. 
  
  // first() + last()
  first("THEDATA", function (data) { // The anonymous function is called-back, receives the data, 
      last(data);                    // and calls the next function.
  });
  
  // first() + second() + last()
  first("THEDATA2", function (data) {
      second(data, function (data){
          last(data);
      }); // end second();
  }); // end first();
  
  // first() + third()! + second()! + last()
  first("THEDATA3", function (data) {
      third(data, function (data){
          second(data, function (data){
              last(data);
          }); // end third();
      }); // end second();
  }); // end first();

  // ANOTHER SOLUTION
  function first(data, cb1, cb2, cb3){
      console.log("first()", data); // return something
      if(cb1){
          cb1(data,cb2, cb3);
      }
  }
  function second(data, cb1, cb2) {
      console.log("second()",data); // return something
      if(cb1){
          cb1(data, cb2);
      }
  }
  function third(data, cb) {
      console.log("third()",data); // return something
      if(cb){
          cb(data);
      }
  }
  function last(data) {
      console.log("last() ", data); // return something
  }
  first("THEDATA", second, third, last);  // This work OK
  first("THEDATA2", second, last);        // This works OK
  first("THEDATA3", second);