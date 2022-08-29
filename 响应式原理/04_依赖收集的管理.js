class Depend {
    constructor() {
        this.reactivesFns = []
    }
    addDepend(reactivesFn) {
        this.reactivesFns.push(reactivesFn)
    }
    notify() {
        this.reactivesFns.forEach(fn => {
            fn()
        })
    }
}
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}
const obj = {
    name: 'zxm',
    age: 18
}
const info = {
    address: '上海市'
}
watchFn(function() {
    console.log(info.address, '监听info的address------1')
})
watchFn(function() {
    console.log(info.address, '监听info的address------2')
})
const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        depend.notify()
    }
})
watchFn(function() {
    const newName = objProxy.name
})

watchFn(function() {
    console.log(objProxy.name)
})
objProxy.name = 'aaa'
objProxy.name = 'bbb'
objProxy.name = 'cccc'