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
    },
    // 监听in  捕获器
    has(target, key) {
        console.log(`监听到${key}的属性in操作`, target)
        return key in target
    },
    // delete
    deleteProperty(target, key) {
        delete target[key]
    }
})

// console.log("name" in objProxy)
delete objProxy.name
console.log(obj)
