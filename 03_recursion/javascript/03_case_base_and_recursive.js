'use strict';

function countdown(number){
  console.log(number);
  if(number >= 1) return countdown(number - 1);
  return;
}

countdown(10)