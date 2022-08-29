function Student(name, age) {
    this.name = name
    this.age = age
}
function Teacher() {

}
// const stu = new Student('zxm', 20)
// console.log(stu)
// console.log(stu.__proto__ === Student.prototype)

// 执行 Student的内容，创建的是Teacher对象
const teacher = Reflect.construct(Student, ['zxm', 10], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)