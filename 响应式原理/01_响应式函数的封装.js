let reactive = []
function watchFn(fn) {
    reactive.push(fn)
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

function bar() {
    console.log('bar function')
}
obj.name = 'wxw'
reactive.forEach((fn) => {
    fn()
})