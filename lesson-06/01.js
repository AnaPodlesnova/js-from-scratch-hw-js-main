/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/






const bouquet = [ 
  {
    flowers : 'Roses',
    quantity: 5,
    price : 100,
    inStock: true
  },
    {
    flowers : 'Iris',
    quantity: 7,
    price : 200,
    inStock: true
  },
    {
    flowers : 'Lavender',
    quantity: 3,
    price : 60,
    inStock: false
  }
]


// const findInStock = bouquet.filter((element, index) => {
//   return element.price <= 100
// })
function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const index = i;
    
    if (callback(element, index)) {
      newArray.push(element)
    }
  }
 return newArray
}

const findInStock = filter(bouquet, function(element){
  return element.price <= 100
})

console.log(findInStock);