'use strict';

function factorial(number){
  if(number === 1){
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(6)) // It returns 720