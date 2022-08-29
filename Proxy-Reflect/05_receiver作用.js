const obj = {
    _name: 'zxm',
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }
}
const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log('get访问')
        console.log(receiver === objProxy)
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver){
        Reflect.set(target, key, newValue, receiver)
    }
})
// .name  访问的是obj的  get name()
// receiver是创建出来的代理对象，参数是会使对对象的操作都经过代理对象的   不是直接操作原对象  作用是改变this指向
console.log(objProxy.name)
