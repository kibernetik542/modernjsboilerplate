const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'black',
    getSummary() {
        return `The car color : ${this.color}`
    }
}

console.log(car.getSummary())