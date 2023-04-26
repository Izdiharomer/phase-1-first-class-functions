
function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  }
  function myFunction() {
    console.log("I love coding");
  }
 
  receivesAFunction(myFunction);


 
  function returnsANamedFunction() {

    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  };
 
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }

  
