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

watchFn(function() {
    const newName = obj.name
    console.log(newName)
})

watchFn(function() {
    console.log(obj.name)
})
obj.name = 'aaa'
depend.notify()