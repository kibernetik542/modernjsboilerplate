import Hangman from './hangman'
import getPuzzle from './requests'
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resetButton = document.querySelector('#reset')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

resetButton.addEventListener('click', startGame)
startGame()



// getPuzzle('3').then(
//         (puzzle) => {
//             console.log(puzzle)
//         })
//     .catch((err) => {
//         console.log(err)
//     })

// getCurrentCountryCode().then((country) =>{
//     console.log(country.alpha2Code)
// }).catch((err) => {
//     console.log(err)
// })