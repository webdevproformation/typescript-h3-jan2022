export {}

function aggregate<T> (tableau1 : Array<T> , tableau2 : Array<T> ) : Array<T>{
    return [...tableau1 , ...tableau2]; // ES6
}

console.log(aggregate<string>(["a","b"] , ["c","d"]))
console.log(aggregate<number>([1,2], [3,4]))

// tsc 17-exo.ts && node 17-exo.js