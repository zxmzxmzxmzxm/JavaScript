const promise = new Promise((resolve, reject) => {
    // resolve('success')
    reject('fail rejected')
})
promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})