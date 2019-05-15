const createCounter = () => {
    let count = 0
    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-30))

// Tipper
const createTipper = (percentage) => {
    return (amount) => {
        return amount * (percentage / 100)
    }
}

const discount15 = createTipper(15)
console.log(discount15(200))
const discount50 = createTipper(50)
console.log(discount50(180))