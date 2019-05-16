'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filter
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter(t => {
        const searchTextMatch = t.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !t.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incomplete = filteredTodos.filter(t => !t.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incomplete))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach(t => {
            todoEl.appendChild(generateTodoDOM(t))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No todo(s) to show'
        todoEl.appendChild(messageEl)
    }
}

const uuidTodo = () => {
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
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change completeness status of todos
const toggleTodo = (id) => {
    const toggleIndex = todos.find((todo) => todo.id === id)
    if (toggleIndex) {
        toggleIndex.completed = !toggleIndex.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (t) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = t.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(t.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup todo text
    todoText.textContent = t.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(t.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incomplete) => {
    const summary = document.createElement('h2')
    const plural = incomplete.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incomplete.length} todo${plural} left`
    return summary
}