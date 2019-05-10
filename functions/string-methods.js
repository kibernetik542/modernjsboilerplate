let name = '   David Beckham   '

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123password098'
console.log(password.includes('password'))

console.log(name.trim())

// Challenge area isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdsf'))
console.log(isValidPassword('asd123!@#ewew'))
console.log(isValidPassword('asd123sdpassword'))