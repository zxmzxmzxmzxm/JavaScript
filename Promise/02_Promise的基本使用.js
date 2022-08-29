const promise = new Promise((resolve, reject) => {
    console.log('promise传入的函数立即执行了')
    // resolve('success message')
    reject('fail message')
})
promise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})

