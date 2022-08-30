const names = ['aaa', 'bbb', 'cccc']
console.log(names[Symbol.iterator])
const iterator1 = names[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())