// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    if (num % 2 === 0 ) {
    num = true
} else {
    num = false
}
return num
}
let num = isEven(74200)

// let num = 8

console.log(num)
