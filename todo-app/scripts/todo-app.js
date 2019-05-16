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

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(p => {
//     if (p.textContent.includes('serrat')) {
//         p.remove()
//     }
// })

// You have 2 todos left (p  element)
// Add a p for each todo above (use text value)
//#endregion
'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if(text.length > 0) {
        todos.push({
            id: uuidTodo(),
            text, //es6 text:text
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''
    }   
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

renderTodos(todos, filters)