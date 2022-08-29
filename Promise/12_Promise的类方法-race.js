//创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(111111)
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(22222)
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3333)
    }, 1000);
})
//race 
// 只要有一个Promise有结果就结束
Promise.race([p1, p2, p3,]).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})