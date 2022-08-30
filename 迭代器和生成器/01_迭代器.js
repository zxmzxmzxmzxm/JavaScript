const names = ['aaa', 'bbb', 'ccc']
const nums = [11, 22, 33, 44]
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function() {
            if(index < arr.length) {
                return { done: false, value: arr[index++]}
            } else {
                return { done: true, value: undefined}
            }
        }
    }
}
const nameIterator = createArrayIterator(names)

console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())


const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())

// 创建一个无限迭代器
function createNumberIterator() {
    let index = 0
    return {
        next: function() {
            return { done: false, value: index++ }
        }
    }
}

const numberIterator = createNumberIterator()
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())