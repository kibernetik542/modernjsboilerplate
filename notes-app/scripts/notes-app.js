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
'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

document.querySelector('#add-note').addEventListener('click', (e) => {
    const timestamp = moment().valueOf()
    notes.push({
        // id: Math.random().toString(26).slice(2),
        id: uuid(),
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

// document.querySelector('#remove-note').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(n => n.remove())
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

renderNotes(notes, filters)

// const now = moment()
// now.add(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString())

// const birthday = moment()
// birthday.year(1990).month(1).date(17)
// console.log(birthday.format('MMMM Do, YYYY'))