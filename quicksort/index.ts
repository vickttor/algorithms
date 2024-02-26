export default function quicksort<T>(arr: T[]): T[] {

    if(arr.length < 2) return arr

    const pivo = arr[0]

    let minors: T[] = []
    let highers: T[] = []

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivo) {
            minors = [...minors, arr[i]]
        }else{
            highers = [...highers, arr[i]]
        }
    }

    return [...quicksort(minors), pivo, ...quicksort(highers)]
}


const numbers = [55, 33, 22, 84, 7, 9, 101]
const names = ["Victor", "Lincon", "André", "Robson", "Gustavo"]

console.log("Sorted number List: ", quicksort(numbers))
console.log("Sorted name List: ", quicksort(names))