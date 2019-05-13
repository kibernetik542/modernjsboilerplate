//#region SELECTORS
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

// const notes = [{
//         title: 'B FC Barcelona',
//         body: 'Leo Messi is the best player FC'
//     },
//     {
//         title: 'A FC Juventus',
//         body: 'C.Ronaldo is the best player FC'
//     },
//     {
//         title: 'Man Utd CF',
//         body: 'Rooney is the best of reds CF'
//     }
// ]

//#endregion

//#region LOCAL STORAGE EXAMPLE
// console.log(localStorage.getItem('location'))
// localStorage.removeItem('location')
// localStorage.clear()

// const user = {
//     name: 'Anna',
//     age: 25
// }

// const userJson = JSON.stringify(user)
// console.log(userJson)
// // localStorage.setItem('user', userJson)
// const userJson = localStorage.getItem('user')
// const user = JSON.parse(userJson)
// console.log(`${user.name} ${user.age}`)
//localStorage.setItem('location', 'Prague')
//#endregion

const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function (e) {
    notes.push({
        // id: Math.random().toString(26).slice(2),
        id: uuid(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
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