function sum(num1, num2, sumFn) {
    console.log(sumFn(num1, num2))
}
function add(num1, num2) {
    return num1 + num2
}
 function sub(num1, num2) {
    return num1 - num2
 }
 function mul(num1, num2) {
    return num1 * num2
 }
 var m = 20
 var n = 30
 sum(m, n, add)