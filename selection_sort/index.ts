function selection_sort<T>(arr: T[]): T[] {
    let sorted_arr: T[] = [];

    while(arr.length >= 1) {
        const min = find_min(arr);
        sorted_arr.push(arr.splice(min, 1)[0])
    }

    return sorted_arr;
}

/* 
 Algorithm to find the minor
 return the index of the minor value in the array
*/
function find_min<T>(arr: T[]): number {
    let min = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }

    return min;
}

// Testing

const list1 = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];

console.log("List 1 - before: ", list1);
console.log("List 1 - after: ", selection_sort(list1));


const list2 = [20, 3, 6, 8, 4, 33, 67, 9];

console.log("\nList 2 - before: ", list2);
console.log("List 2 - after: ", selection_sort(list2));


