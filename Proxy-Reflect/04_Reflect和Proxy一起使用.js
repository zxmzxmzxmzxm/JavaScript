const obj = {
    name: 'zxm',
    age: 18
}
const objProxy = new Proxy(obj, {
    // 获取值时的捕获器
    //target 代理对象  key: 对象属性
    get(target, key, receiver) {
        console.log(`监听到${key}的值被访问了`, target)
        return Reflect.get(target, key)
    },
    // 设置值时的捕获器
    set(target, key, newValue) {
        console.log(`监听到${key}的值被设置`, target)
        // Object.freeze() 冻结不允许设置值
        // reflect可以监听有没有赋值成功  set有布尔值
        Reflect.set(target, key, newValue)
    }
})

objProxy.name = 'wxw'
console.log(objProxy.name)
