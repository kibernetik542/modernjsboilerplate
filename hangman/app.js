const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Dog Plutto', 2)
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('3').then(
    (puzzle) => {
        console.log(puzzle)
    },
    (err) => {
        console.log(`Error: ${err}`)
    })

getCountry('AZ').then(
    (country) => {
        console.log('Country name : ' + country.name)
    },
    (err) => {
        console.log(`Error: ${err}`)
    })