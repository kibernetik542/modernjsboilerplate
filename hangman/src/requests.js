//#region OldCode fetch api
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }
// const getCountryOld = (countryCode) => {
//     return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch country')
//         }
//     }).then((data) => data.find(c => c.alpha2Code === countryCode))
// }

// const getLocationOld = () => {
//     return fetch('http://ipinfo.io/json?token=ceaa94756445bb').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch location')
//         }
//     })
// }
// Inside app.js
// getCountry('AZ').then(
//     (c) => {
//         console.log(c.name)
//     })
// .catch((err) => {
//     console.log(err)
// })


// Promise chaining
// getLocation().then((location) => {
//         return getCountry(location.country)
//     })
//     .then((country) => {
//         console.log(country.name)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//#endregion

const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
    if (response.status === 200) {
        const data = await response.json()
        return data.find(c => c.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=ceaa94756445bb')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get location')
    }
}

const getCurrentCountryCode = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

export {
    getPuzzle as
    default
}