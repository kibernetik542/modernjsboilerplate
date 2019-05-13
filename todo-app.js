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
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    text: e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(t => {
        const searchTextMatch = t.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !t.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incomplete = filteredTodos.filter(t => !t.completed)

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplete.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(t => {
        const p = document.createElement('p')
        p.textContent = t.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)