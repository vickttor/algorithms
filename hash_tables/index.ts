import { MyHashTable } from "./my_hash_table";

const book = new MyHashTable<string, number>();

book.set("banana", 2);
book.set("apple", 1);
book.set("cherry", 3);

book.set("apple", 5);

console.log("Apple Value: ", book.get("apple")); // 5

// -------------------------------------------------

const voted = new Map<string, boolean>();

function checkVoter(name: string) {
  if (voted.get(name)) {
    console.log("Kick them out!");
  } else {
    voted.set(name, true);
    console.log("Let them vote!");
  }
}

checkVoter("tom"); // Let them vote!
checkVoter("mike"); // Let them vote!
checkVoter("mike"); // Kick them out

// -------------------------------------------------

const cache = new Map<String, String>();

cache.set("vercel", "https://vercel.com");
cache.set("google", "https://google.com");
cache.set("facebook", "https://facebook.com");

function getCache(key: string) {
  if (cache.has(key)) {
    return cache.get(key);
  } else {
    const result = "Some value";
    cache.set(key, result);
    return result;
  }
}

console.log(getCache("google")); // Some value
