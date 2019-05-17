import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters} from './filters'

// Render application todos based on filter
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const filteredTodos = getTodos().filter(t => {
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
        renderTodos()
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
        renderTodos()
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

export { generateTodoDOM, renderTodos, generateSummaryDOM }