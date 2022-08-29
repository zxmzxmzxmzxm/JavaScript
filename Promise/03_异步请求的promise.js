function requestData(url) {
    //异步请求代码会被放入executor中
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url === 'zxm') {
                let arr = [10, 20, 30]
                resolve('success message')
            } else {
                reject('fail message')
            }
        }, 3000);
    })
}

const promise = requestData()
promise.then((res) => {
    console.log(res)
    console.log('请求成功')
}, (err) => {
    console.log(err)
    console.log('请求失败')
})