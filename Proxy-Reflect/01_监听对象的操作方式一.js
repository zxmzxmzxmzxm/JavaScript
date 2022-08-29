const obj = {
    name: 'zxm',
    age: 18
}
// Object.defineProperty(obj, "name", {
//     get() {
//         console.log('访问到值了')
//     },
//     set() {
//         console.log('设置值')
//     }
// })
// console.log(obj.name)
// obj.name = 'wxw'
Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
        get() {
            console.log(`监听到${key}的值被访问了`)
            return value
        },
        set(newValue) {
            value = newValue
            console.log(`监听到${key}的值被设置`)
        }
    })
})
obj.name = 'wxw'
obj.age = 20

console.log(obj.name)
console.log(obj.age)
