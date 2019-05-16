const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

const processData = async () => {
  let data = await getDataPromise(5)
  data = await getDataPromise(data)
  data = await getDataPromise(data)
  return data
}

// async always returns promise
processData().then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log('Error', err)
})