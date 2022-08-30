const iterableObj = {
    names: ['aaa', 'bbb', 'ccc'],
    [Symbol.iterator]: function() {
        let index = 0
        return {
            next: () => {
                if(index < this.names.length) {
                    return { done: false, value: this.names[index++]}
                } else {
                    return { done: true, value: undefined}
                }
            }
        }
    }
}

console.log(iterableObj[Symbol.iterator])
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())