// function foo() {
//     const obj = {
//         name: 'zxm'
//     }
//     return new Promise((resolve, reject) => {
//         resolve(obj)
//     })
// }
// foo().then(res => {
//     console.log(res)
// })
// 类方法 Promise.resolve
// 1. 普通的值
// const promise = Promise.resolve({ name: 'zxm' })
// 相当于
// const promise = new Promise((resolve, reject) => {
//     resolve({name: 'zxm'})
// })

// 2. 传入Promise
const promise = Promise.resolve(new Promise((resolve, reject) => {
    resolve('1111111')
}))
promise.then(res => {
    console.log(res)
})

// 3. 传入thenable对象