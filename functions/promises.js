// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Should be number')
        }
    }, 2000)
}

getDataCallback(2, (error, data) => {
    if (error) {
        console.log(`Error : ${error}`)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('error')
            } else {
                console.log(data)
            }
        })
    }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data : ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(3)
    .then((data) => {
        return getDataPromise(data)
    })
    .then((data) => {
        return getDataPromise(data)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })