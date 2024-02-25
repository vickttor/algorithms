import len from "./len"

export default function sum(arr: number[]): number {
    if(len(arr) == 0) return 0
    return arr[0] + sum(arr.slice(1))
}
