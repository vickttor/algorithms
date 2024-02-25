import len from "./len"

export default function max(arr: number[]): number {
    if(len(arr) == 1) return arr[0]
    const maximum = max(arr.slice(1))
    return arr[0] > maximum ? arr[0] : maximum
}