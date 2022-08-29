const newPromise = new Promise((resolve, reject) => {
    // resolve('success')
    resolve('fail')
})
// 传入promise
// new Promise((resolve, reject) => {
//     resolve(newPromise)
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

//传入一个对象，这个对象有then方法
new Promise((resolve, reject) => {
    const obj = {
        then: function(resolve, reject) {
            // resolve('success')
            reject('fail')
        }
    }
    resolve(obj)
}).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})