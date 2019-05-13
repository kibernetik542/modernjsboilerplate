// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filter
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(t => {
        const searchTextMatch = t.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !t.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incomplete = filteredTodos.filter(t => !t.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incomplete))

    filteredTodos.forEach(t => {
        document.querySelector('#todos').appendChild(generateTodoDOM(t))
    })
}

const uuidTodo = function () {
    var uuid = "",
        i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}

// Remove element by given id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change completeness status of todos
const toggleTodo = function (id) {
    const toggleIndex = todos.find(function (todo) {
        return todo.id === id
    })
    if (toggleIndex !== undefined) {
        toggleIndex.completed = !toggleIndex.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (t) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = t.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleTodo(t.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup todo text
    todoText.textContent = t.text
    todoEl.appendChild(todoText)

    // Setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(t.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incomplete) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplete.length} todos left`
    return summary
}