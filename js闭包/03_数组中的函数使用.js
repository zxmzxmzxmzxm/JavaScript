var arr = [10, 21, 30, 43, 50]
// filter  过滤
// var newNums = arr.filter((item) => {
//     return item % 2 === 0
// })
// console.log(newNums)

// map 映射
// var newNum2 = arr.map((item) => {
//     return item * 10
// })
// console.log(newNum2)

// forEach  迭代，遍历  没有返回值
// arr.forEach((item) => {
//     console.log(item)
// })

// find  返回当前item
// var item = arr.find((item) => {
//     return item === 21
// })
// console.log(item)

// findIndex
// var index = arr.findIndex((item) => {
//     return item === 21
// })
// console.log(index)

// reduce 累加
//prevValue  前一次的值
var total = arr.reduce((prevValue, item) => {
    return prevValue + item
}, 0)
console.log(total)