// const animals = ['Cat', 'Dog', 'Crocodile', 'Lion', 'Bear']
// console.log(`Before modifying : You have ${animals.length} animals`)
// // console.log(animals)
// animals.forEach((item, index) => console.log(`${index+1}. ${item}`))
// animals.splice(2, 1)
// animals.push('Wolf')
// animals.splice(0, 1) // or shift()
// console.log(`After modifying : You have ${animals.length} animals`)
// // foreach
// animals.forEach((item, index) => console.log(`${index+1}. ${item}`))


const todos = [{
        text: 'Javascript',
        completed: true
    },
    {
        text: 'React',
        completed: false
    },
    {
        text: 'Node JS',
        completed: false
    },
    {
        text: 'C#',
        completed: true
    },
    {
        text: 'Java',
        completed: true
    }
]

const deleteTodo = (todos, todoText) => {
    const idx = todos.findIndex((todo) => todo.text.toLowerCase() === todoText.toLowerCase())
    if (idx > -1) {
        todos.splice(idx, 1)
    }
}

const getThingsTodo = (todos) => todos.filter((todo) => !todo.completed)

const sortTodos = (todos) => todos.sort((a, b) => {
    if (!a.completed && b.completed) {
        return -1
    } else if (!b.completed && a.completed) {
        return 1
    } else {
        return 0
    }
})


sortTodos(todos)
console.log(todos)


// deleteTodo(todos, 'React')
// deleteTodo(todos, 'c#')
// deleteTodo(todos, 'JavA')
// deleteTodo(todos, 'JavAasasa')
// console.log(todos)
// console.log(getThingsTodo(todos))