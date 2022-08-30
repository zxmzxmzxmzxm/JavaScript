function* foo(num) {
    console.log('函数开始执行~')
    const value1 = 111 * num
    console.log('第一段代码：', value1)
    const n = yield value1

    // return n

    const value2 = 222 * n
    console.log('第二段代码：', value2)
    const count = yield value2
    const value3 = 333 * count
    console.log('第三段代码：', value3)
    console.log('函数执行结束~')
    return '123123'
}

// 生成器是可以抛出异常的
const generator = foo(10)
console.log(generator.next())

// 第二段代码的执行,使用return  相当于在第一段代码后面加上return  就会提前终止生成器函数代码的继续执行
console.log(generator.return(30))