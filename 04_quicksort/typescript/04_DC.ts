
const list = [1,2,3,13,4,5,6];

/**
 * 
 * @param arr number[]
 * @returns number
 */
function sum(arr: number[]): number {
  if(arr.length == 0) return 0
  return arr[0] + sum(arr.slice(1))
}

console.log("Sum: " + sum(list));

/**
 * 
 * @param arr any[]
 * @returns number
 */
function len<T>(arr: T[]): number {
  let count = 0;
  for(let i in arr) count++;
  if(count === 0) return 0
  return 1 + len(arr.slice(1));
}

console.log("Length: " + len(list));

function max(arr: number[]): number {
  let count = 0;
  for(let i in arr) count++;
  if(count == 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  let subMax = max(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

console.log("Max: " + max(list));