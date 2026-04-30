/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
let  array1 =[1, 2, 3, 4, 5, 6, 7, 8, 0]
let  array2 =[11, 12, 12, 32, 22, 15, 23]

function findCommonElements(someArray1, someArray2) {
    let result = []
    for(let i = 0; i < someArray1.length; i++){
        if (includesElement(someArray2, someArray1[i])){
            result.push(someArray1[i])
        }
        
    }
    return result
}
console.log(findCommonElements(array1, array2));







function includesElement(array, element) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === element){
            return true
        }
    }
    return false
}