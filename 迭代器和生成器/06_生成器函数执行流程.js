// 当遇到yield时暂停函数执行
// 当遇到return时停止函数执行
function* foo() {
    console.log('函数开始执行~')
    const value1 = 111
    console.log('第一段代码：', value1)
    // return value1
    yield value1
    const value2 = 222
    console.log('第二段代码：', value2)
    yield
    const value3 = 333
    console.log('第三段代码：', value3)
    console.log('函数执行结束~')
    return '123123'
}
const generator = foo()


console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())