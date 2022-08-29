//创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(111111)
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

// 所有的Promise都变成fulfilled时，再拿到结果
// 在拿到所有结果之前，有一个Promise变成rejected，那整个Promise都是rejected
Promise.all([p1, p2, p3, '5555']).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})