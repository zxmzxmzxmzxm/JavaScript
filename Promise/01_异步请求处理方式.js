function requestData(url, successCallback, errorCallback) {
    setTimeout(() => {
        if(url === 'zxm') {
            let arr = [10, 20, 30]
            successCallback(arr)
        } else {
            let errorMessage = '失败'
            errorCallback(errorMessage)
        }
    }, 1000);
}

requestData('kobe', (res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
//good code!
