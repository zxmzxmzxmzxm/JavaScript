//创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(111111)
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(22222)
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3333)
    }, 3000);
})
//不会进入catch
Promise.allSettled([p1, p2, p3, '5555']).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})