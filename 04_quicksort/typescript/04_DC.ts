
const list = [1,2,3,4,5,6];

/**
 * 
 * @param arr number[]
 * @returns number
 */
function sum(arr: number[]): number {
  if(arr.length == 0) return 0
  return arr[0] + sum(arr.slice(1))
}

console.log(sum(list));

/**
 * 
 * @param arr any[]
 * @returns number
 */
function len<T>(arr: T[]): number {
  let count = 0;

  for(let i in arr) 
    if(arr.hasOwnProperty(i)) 
      count++;

  if(count === 0) 
    return 0

  return 1 + len(arr.slice(1));
}

console.log(len(list));

const letters = ["A", "B", "D", "C", "E", "J", "K", "O", "Z"];

console.log(len(letters));


function max(arr: number[]): number {
  
  return 1;
}
