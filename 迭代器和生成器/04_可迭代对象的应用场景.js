const names = ['sda', 'dff', 'sdfds']


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
// 展开语法
const newNames = [...iterableObj, ...names]
console.log(newNames)

// 解构语法
const [ name1, name2 ] = names

// 创建一些其他对象
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from(iterableObj)

// Promise.all
Promise.all(iterableObj)