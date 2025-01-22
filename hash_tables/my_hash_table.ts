export class MyHashTable<T, K> {
  private size: number = 10;
  private table: Array<Array<[T, K]>> = new Array(this.size);

  constructor(size: number = 10) {
    this.size = size;
    this.table = new Array(this.size);
  }

  private hash(key: T): number {
    return String(key).length % this.size;
  }

  public set(key: T, value: K): void {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  public get(key: T): K | null {
    const index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    const found = this.table[index].find((item) => item[0] === key);
    return found ? found[1] : null;
  }
}
