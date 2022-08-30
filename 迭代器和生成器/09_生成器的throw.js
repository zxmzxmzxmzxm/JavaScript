function* foo() {
    console.log('函数开始执行~')
    const value1 = 111
    console.log('第一段代码：', value1)
    try {
        yield value1

    } catch(error) {
        console.log('捕获到的异常情况', error)
        yield '2222222'
    }
    const value2 = 222
    console.log('第二段代码：', value2)
    yield value2
    const value3 = 333 * count
    console.log('第三段代码：', value3)
    console.log('函数执行结束~')
}

const generator = foo()
console.log(generator.next())

console.log(generator.throw())