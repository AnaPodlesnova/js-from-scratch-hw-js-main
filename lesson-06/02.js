/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
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

const filterCheapBouquet =  (flowers, callback) => {
  const filtred =[];
  for (let i = 0; i < flowers.length; i++) {
  const flower = flowers[i]
  
  if (callback(flower)) {
    filtred.push(flower)
  }
}
return filtred 
}

const CheapBouquet = filterCheapBouquet(bouquet, (flower) => {
return flower.price <= 100
})

const result = CheapBouquet.map((flower) => {return flower.flowers}
)

console.log(result);
