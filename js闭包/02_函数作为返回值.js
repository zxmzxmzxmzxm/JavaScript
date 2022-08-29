function foo() {
    function bar() {
        console.log('bar')
    }
    return bar()
}
// var fn = foo()
// fn()


foo()

// function makeAdder(count) {
//     function add(num) {
//         return count + num
//     }
//     return add
// }
// var add5 = makeAdder(5)
// console.log(add5(6))
// console.log(add5(10))

// var add10 = makeAdder(10)
// var add100 = makeAdder(100)