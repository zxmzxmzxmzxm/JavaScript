// 当遇到yield时暂停函数执行
// 当遇到return时停止函数执行
function* foo() {
    console.log('函数开始执行~')
    const value1 = 111
    console.log('第一段代码：', value1)
    const n = yield value1
    const value2 = 222 * n
    console.log('第二段代码：', value2)
    const count = yield value2
    const value3 = 333 * count
    console.log('第三段代码：', value3)
    console.log('函数执行结束~')
    return '123123'
}
const generator = foo()


console.log(generator.next())
// 生成器的next函数可以传递参数

// 第二段代码，第二次调用next的时候执行的
console.log(generator.next(10))

console.log(generator.next(20))

console.log(generator.next())
console.log(generator.next())

// 生成器是可以抛出异常的