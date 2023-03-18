/**
 * @param arr number[]
 * @returns number[]
 * 
 * It'll returns a sorted array.
 */
function quicksort(arr: number[]): number[] {
  if(arr.length < 2) return arr;

  const pivot = arr.shift()!;
  const minors = arr.filter((v)=>v <= pivot);
  const bigger = arr.filter((v)=>v > pivot);
  return [...quicksort(minors),pivot, ...quicksort(bigger)];
}

const list = [2,5,9,8,10,42,9,100];


console.log(quicksort(list));
