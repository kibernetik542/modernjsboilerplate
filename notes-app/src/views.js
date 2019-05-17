import moment from 'moment'
import {
    getFilters
} from './filters'
import {
    sortNotes, getNotes
} from './notes'

// Generate the DOM structure for a note
const generateNoteDOM = (n) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    if (n.title.length > 0) {
        textEl.textContent = n.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${n.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = generateLastEdited(n.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((n) =>
        n.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((n) => {
            const noteEl = generateNoteDOM(n)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title');
    const bodyElement = document.querySelector('#note-body');
    const dateElement = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((n) => n.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export {
    generateNoteDOM,
    renderNotes,
    generateLastEdited,
    initializeEditPage
}