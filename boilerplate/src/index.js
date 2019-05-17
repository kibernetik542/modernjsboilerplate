// Rest operator PUSHES
const calculateAverage = (thing, ...args) => {
    let sum = 0
    args.forEach((num) => sum += num)
    const average = sum / args.length
    return `The average ${thing} is ${average}`
}

// console.log(calculateAverage('grade', 2, 40, 56, 46))

const printTeam = (name, coach, ...players) => {
    return `Team: ${name}\nCoach: ${coach}\nPlayers: ${players.join('-')}\n`
}

// console.log(printTeam('Barcelona', 'Pep Guardiola', 'Messi', 'Suarez', 'Ter Stegen', 'Iniesta'))


// Spread operator GRABS
// const printTeamWithSpread = (name, coach, firstPlayer, secondPlayer) => {
const printTeamWithSpread = (name, coach, ...players) => {
    return `Team: ${name}\nCoach: ${coach}\nPlayers: ${players.join(', ')}\n`
    // return `${firstPlayer} ${secondPlayer}`
}

const team = {
    name: 'Real Madrid',
    coach: 'Zineddine Zidane',
    players: [
        'Modric', 'Isco', 'Bale', 'Marcelo', 'Varane'
    ]
}

// console.log(printTeamWithSpread(team.name, team.coach, ...team.players))

// examples
const cities = ['Lucerne', 'Milan', 'London']
const citiesCopy = ['Rio', ...cities]

// console.log(citiesCopy)
// console.log(cities)

// examples
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2018
}

let newHouse = {
    location: 'Beverly Hills',
    isNew: true,
    ...house,
    bedrooms: 4 // if we override it we should use after spread
}
newHouse.yearBuilt = 2019

// console.log(house)
// console.log(newHouse)

// DESTRUCTURING
const todo = {
    id: 'kjhadsald1223klads',
    year: 2019,
    text: 'Angular training',
    completed: false
}

// const text = todo.text
// const completed = todo.completed
const {
    text: courseText,
    completed,
    level = 'Advanced',
    ...others
} = todo


console.log(courseText)
console.log(completed)
console.log(level)
console.log(others) // id & year

const age = [55, 29, 30, 62]
const [sara, john, , olga, tom = 41] = age
console.log(sara, john, olga, tom) //olga 62

const printTodo = ({
    text,
    completed
}) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)