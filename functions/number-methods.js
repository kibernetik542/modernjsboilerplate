let num = 234.132

console.log(num.toFixed(2))
console.log(Math.round(num)) // 234  eger 234.932 olsa idi 235 olacaqdi
console.log(Math.floor(num)) // 234
console.log(Math.ceil(num)) // 235

let min = 10
let max = 20
// 0 - .999999 random by default
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Challenge area
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}
console.log(makeGuess(1))