const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (n) {
    return n.id === noteId
})

// if (note === undefined) {
//     location.assign('/index.html')
// }

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        JSON.parse(e.newValue)
    }

    notes = getSavedNotes()
    note = notes.find(function (n) {
        return n.id === noteId
    })

    // if (note === undefined) {
    //     location.assign('/index.html')
    // }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
})