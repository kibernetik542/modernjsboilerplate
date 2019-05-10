const notes = ['C#', 'Angular', 'Javascript', 'Typescript']
const objects = [{
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

//#region boilerplate
// console.log('Removed item is ' + notes.pop()) // Removes Typescript and adds React
// notes.push('React') // adding to last of the array
// notes.shift() // Removes C#
// notes.unshift('Java') // Adds to the beginning

// notes.splice(1, 3) // Java start from index 1 and delete 3 items including index number 1
// notes.splice(1, 0, 'New item') // After first index dont delete any item but add 1 item : Output is Java, New Item ....
// notes[0] = 'Laravel' // Instead of Java it should be replace to Laravel
// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length) // 4
// console.log(notes)
// console.log(notes[0])
// console.log(notes[notes.length - 1]) // typescript

// Counting... 1,2,3
// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// console.log(notes.indexOf('Angular')) // result is 1 --- sdsdsadasdas result is -1

// const idx = objects.findIndex((note, index) => {
//     console.log(note)
//     return note.title === 'Juventus' // next all items will be ignored not shown Man Utd 
// })
// console.log(idx)
//#endregion

// const findObject = (objects, objectTitle) => {
//     const idx = objects.findIndex((object, index) =>  object.title.toLowerCase() === objectTitle.toLowerCase())
//     return objects[idx]
// }

const findObject = (objects, objectTitle) => objects.find((object, index) => object.title.toLowerCase() === objectTitle.toLowerCase())

const findObjects = (objects, query) => {
    return objects.filter((obj, index) => {
        const isTitleMatch = obj.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = obj.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortObjects = (objects) => objects.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
    } else {
        return 0
    }
})

// console.log(findObjects(objects, 'fc'))

// const obj = findObject(objects, 'Man utd')
// console.log(obj)
sortObjects(objects)
console.log(objects)