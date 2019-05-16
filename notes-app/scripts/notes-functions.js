'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []  
    } catch (error) {
        return []
    }   
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Unique identifier
const uuid = function () {
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
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((n) => 
        n.title.toLowerCase().includes(filters.searchText.toLowerCase()))

        notesEl.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((n) => {
            const noteEl = generateNoteDOM(n)
            notesEl.appendChild(noteEl)
        })
    } else{
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }    
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

// Sort your notes by one of ways from dropdown
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}