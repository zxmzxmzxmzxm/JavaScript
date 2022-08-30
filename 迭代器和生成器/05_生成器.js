function* foo() {
    console.log('函数开始执行~')
    const value1 = 111
    console.log('第一段代码：', value1)
    yield
    const value2 = 222
    console.log('第二段代码：', value2)
    yield
    const value3 = 333
    console.log('第三段代码：', value3)
    console.log('函数执行结束~')
}
const generator = foo()

generator.next()

console.log('开始执行第二段代码')
generator.next()
generator.next()

console.log('开始执行第三段代码')
generator.next()
generator.next()
generator.next()