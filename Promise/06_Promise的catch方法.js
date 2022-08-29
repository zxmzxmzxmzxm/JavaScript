// Promise对象的方法   Object.getOwnPropertyDescriptor(Promise.prototype)
const promise = new Promise((resolve, reject) => {
    // resolve('success')
    reject('fail rejected')
    // throw new Error('fail rejected')
})
// 当executor抛出异常时，也是会调用错误（拒绝）捕获的回调函数的
// promise.then(undefined, err => {
//     console.log(err)
//     console.log('---------')
// })

//catch 的语法糖写法
// promise.catch(err => {
//     console.log(err)
// })

//  这个catch是外层第一个promise的catch 
// promise.then(res => {
//     return 1111
// }).catch(err => {
//     console.log(err)
// })


// 如果外层没有错误，也会捕获到第二个promise的错误 
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         reject('then fail rejected')
//     })
// }).catch(err => {
//     console.log(err)
// })


//catch方法的返回值,也是一个promise
promise.then(res => {
    console.log(res)
}).catch(err => {
    return 'return catch'
}).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})