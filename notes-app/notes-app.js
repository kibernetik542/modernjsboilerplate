// Query and remove first element
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(
//     // p => p.remove()
//     // p => console.log(p.textContent)
//     p => p.textContent = '***S.O.S****'
// )

// // Adding new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element'
// document.querySelector('body').appendChild(newParagraph)

const notes = [{
        title: 'B FC Barcelona',
        body: 'Leo Messi is the best player FC'
    },
    {
        title: 'A FC Juventus',
        body: 'C.Ronaldo is the best player FC'
    },
    {
        title: 'Man Utd CF',
        body: 'Rooney is the best of reds CF'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(n => {
        const noteEl = document.createElement('p')
        noteEl.textContent = n.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function (e) {
    e.target.textContent = 'Clicked'
})

// document.querySelector('#remove-note').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(n => n.remove())
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value)
})