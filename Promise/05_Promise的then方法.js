// Promise对象的方法   Object.getOwnPropertyDescriptor(Promise.prototype)
const promise = new Promise((resolve, reject) => {
    resolve('success')
})
//同一个promise可以被多次调用then方法
// promise.then(res => {
//     console.log('res1:', res)
// })
// promise.then(res => {
//     console.log('res2:', res)
// })
// promise.then(res => {
//     console.log('res3:', res)
// })

//then 方法传入的回调函数 可以有返回值
//then 方法本身也是有返回值的，它的返回值是Promise
// 1. 如果我们返回的是一个普通值(数值，字符串，普通对象，undefined，那么这个普通的值被作为一个新的Promise的resolve值
// promise.then(res => {
//     return 'aaaa'
// }).then(res => {
//     console.log(res)
//     return 'bbbbb'
// }).then(res => {
//     console.log(res)
// })
//相当于下面的写法  所以第二个.then是返回的新promisede then 方法
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         resolve('aaaa')
//     })
// })


// 2. 如果返回的是一个Promise
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(111111)
//             reject('22222')
//         }, 3000)
//     })
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })


// 3. 如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
    return {
        then: function(resolve, reject) {
            resolve(2222)
        }
    }
}).then(res => {
    console.log(res)
})


