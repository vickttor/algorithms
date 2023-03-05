'use strict';

function searchLower(arr) {
  let lower = arr[0];
  let lowerIndex = 0;

  for (let i in arr) {
    if(arr[i] < lower) {
      lower = arr[i];
      lowerIndex = i;
    }
  }

  return lowerIndex;
}

function selectionSort(arr) {
  let length = arr.length;
  let newArr = [];

  for(let i = 0; i < length - 1; i++) {
    let lowerIndex = searchLower(arr);
    newArr.push(+arr.splice(lowerIndex, 1).join(""));
  }
    
  return newArr;

}

const list = [5, 6, 8, ,2, 1];


console.log(selectionSort(list));


