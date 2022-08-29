const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfill'
const PROMISE_STATUS_REJECTED = 'reject'
class HYPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.value = value
                this.status = PROMISE_STATUS_FULFILLED
                console.log('resolve被调用了')
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.reason = reason
                this.status = PROMISE_STATUS_REJECTED
                console.log('reject被调用了')
            }
        }
        executor(resolve, reject)
    }
}
const promise = new HYPromise((resolve, reject) => {
    resolve()
})

// promise.then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })