'use strict';

/**
 * Searches recursively number fron the list 
 * @param list list Source array 
 * @param itemToFind item to be searched
 * @returns number if the value is found or NULL otherwise
 */
function bynarySearch(list, itemToFind) {
  
    let low = 0;
    let high  = list.length - 1;
  
  
    while(low <= high){
      const middle = Math.floor((low + high) / 2);
      const guess = list[middle];
    
      if(guess === itemToFind) return middle;
    
      if(guess > itemToFind){
        high = middle - 1;
      }else{
        low = middle + 1;
      }      
      
    }
  
    return null;
}


const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(bynarySearch(list, 7)) // must print 6
console.log(bynarySearch(list, 15)) // must print 14
console.log(bynarySearch(list, -1)) // must print null