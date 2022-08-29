const obj = {
    name: 'zxm',
    age: 18
}
const objProxy = new Proxy(obj, {
    // 获取值时的捕获器
    //target 代理对象  key: 对象属性
    get(target, key) {
        console.log(`监听到${key}的值被访问了`, target)
        return target[key]
    },
    // 设置值时的捕获器
    set(target, key, newValue) {
        console.log(`监听到${key}的值被设置`, target)
        target[key] = newValue
    }
})

// console.log(objProxy.name)
// console.log(objProxy.age)
objProxy.name = 'wxw'
objProxy.age = 20

console.log(obj.name)
console.log(obj.age)