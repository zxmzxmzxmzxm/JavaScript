// const promise = Promise.reject('sad')
// 相当于
const promise = new Promise((resolve, reject) => {
    // reject('sad')
    reject({
        then: function(resolve, reject) {
            resolve('1111111')
        }
    })
})
promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})