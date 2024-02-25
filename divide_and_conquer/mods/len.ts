export default function len<T>(arr: T[]): number {
    if(arr[0] === undefined) return 0 
    return 1 + len(arr.slice(1))
}