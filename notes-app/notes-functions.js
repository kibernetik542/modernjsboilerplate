// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
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
const generateNoteDOM = function (n) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(n.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (n.title.length > 0) {
        textEl.textContent = n.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.setAttribute('href', `/edit.html#${n.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(n => {
        const noteEl = generateNoteDOM(n)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the last edited message
const generateLastEdited = timestamp => `Last edited ${moment(timestamp).fromNow()}`

// Sort your notes by one of ways from dropdown
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
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