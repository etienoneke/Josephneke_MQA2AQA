function simulateAsyncOperation(callback) {
    setTimeout(function () {
      console.log("Async operation complete");
      callback(); // Invoke the callback function
    }, 2000); // Simulate a 2-second delay
  }
  
  // Callback function to be executed after the async operation
  function onComplete() {
    console.log("Callback executed");
  }
  
  /* Let's now observe the execution of the following expressions.
   *** Let's try to forsee how the output would look like. ***
   */
  
  console.log("Start of the program");
  simulateAsyncOperation(onComplete);
  console.log("End of the program");

// *** Let's try to forsee how the output would look like. ***

// OUTPUT

/* 
/opt/homebrew/bin/node ./Callback_Assignment.js

Start of the program
Callback_Assignment.js:17

End of the program
Callback_Assignment.js:19

Async operation complete
Callback_Assignment.js:3

Callback executed										
Callback_Assignment.js:10
*/