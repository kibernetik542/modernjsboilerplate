//#region DUMMY DATA
// const todos = [{
//         text: 'Javascript',
//         completed: true
//     },
//     {
//         text: 'React',
//         completed: false
//     },
//     {
//         text: 'Node JS',
//         completed: false
//     },
//     {
//         text: 'C#',
//         completed: true
//     },
//     {
//         text: 'Java',
//         completed: true
//     }
// ]
//#endregion

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(p => {
//     if (p.textContent.includes('serrat')) {
//         p.remove()
//     }
// })

// You have 2 todos left (p  element)
// Add a p for each todo above (use text value)


document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidTodo(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    text: e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

renderTodos(todos, filters)