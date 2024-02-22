// Implementação em Typescript
// O(Log n)
function binary_search<T>(list: T[], item: T): number {
    
    let low = 0
    let high = list.length - 1

    while(low <= high) {
	   let middle = Math.floor((low + high) / 2)
	   let guess: T = list[middle]

	   if(guess === item) return middle

	   if (item > guess) low = middle + 1
	   if (item < guess) high = middle - 1
    }

    return -1
}


const numbers = [1, 2, 5, 8, 9, 12, 27]

const find_nine = binary_search(numbers, 9)
console.log("Resultado (9): ", find_nine) // Success

const find_thirty = binary_search(numbers, 30)
console.log("Resultado (30): ", find_thirty) // Fails

// With strings

const names = ["Alexandre", "Bianca", "Carlos", "Daniel"]
const name_to_be_found = "Carlos"

const find_carlos = binary_search(names.map(v=>v.toLowerCase()), "Carlos".toLowerCase())

console.log("Resultado (Carlos) ", find_carlos); // Success