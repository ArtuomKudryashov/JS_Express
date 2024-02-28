let array = ['a', 'b', 'c', 'd', 'e'];

// Копируем элементы массива, начиная с индекса 0, и вставляем их начиная с индекса 3
console.log(array.copyWithin(3, 0)); // ['a', 'b', 'c', 'a', 'b']

// Копируем элементы массива, начиная с индекса 1, и вставляем их начиная с индекса 3
console.log(array.copyWithin(3, 1)); // ['a', 'b', 'c', 'b', 'c']

// Копируем элементы массива, начиная с индекса 1 и заканчивая индексом 3, и вставляем их начиная с индекса 0
console.log(array.copyWithin(0, 1, 3)); // [ 'b', 'c', 'c', 'b', 'c' ]


// Элементы массива, начиная с индекса -2 и заканчивая индексом -1, копируются и вставляются, начиная с индекса 0
console.log(array.copyWithin(0, -2, -1)); //[ 'b', 'c', 'c', 'b', 'c' ]

console.log(array.copyWithin(0, -3, -1));// [ 'c', 'b', 'c', 'b', 'c' ]


console.log("<<<<<<<<<<<<<<<<<<<<Length>>>>>>>>>>>>>>>>>>>")
const arrNumbers = [1, 2, 3]; arrNumbers.length = 7;

console.log("Но сейчас Длина массива [1, 2, 3] = " + arrNumbers.length); // Выведет 7

console.log(` При длине массива = 7 arrNumbers[5] = ${arrNumbers[5]};`);


console.log(`2. Метод array.toString :  `);

const arrToString = [1, 2, 3];

console.log(arrToString.toString()); // Выведет "1,2,3"
console.log(typeof arrToString.toString()); // Выведет string;
console.log(typeof arrToString); // Выведет object;


console.log(`3. Метод array.at() :  `);

const arrAt = [1, 2, 3];
atIndex = 1;
atIndexNegative = -1;
console.log(
  `Массив arrAt = ${arrAt} при положительном индексе at(${atIndex}) = ${arrAt.at(
    atIndex

  )}, а при отрицательном индексе at(${atIndexNegative}) = ${arrAt.at(
    atIndexNegative
  )};`
); // Выведет 2 и 3

console.log(
    `Массив arrAt = ${arrAt} может итерироваться через длину length - at(arrAt.length - ${atIndex}) = ${arrAt.at(
      arrAt.length - atIndex
    )},`
  ); // Выведет 3;

  // Массив со значениями
const cart = ["apple", "banana", "pear"];

// Функция, которая возвращает последний элемент переданного массива
function returnLast(arr) {
  return arr.at(-1);
}
// Получить последний элемент нашего массива 'cart'
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'


// Добавить элемент в наш массив 'cart'
cart.push("orange");
const item2 = returnLast(cart);

console.log(item2); // Выведет: 'orange'
console.log(returnLast(["apple", "banana", "pear", "orange"])); // Выведет: 'orange'


const elements = ["Fire", "Air", "Water"];

console.log(`4. Метод array.join() :  `);

console.log(elements.join()); // Выведет: "Fire,Air,Water"

console.log(elements.join("")); // Выведет: "FireAirWater"

console.log(elements.join(" | ")); // Выведет "Fire | Air | Water"

console.log(elements.join(", and ")); // Выведет: "Fire, and Air, and Water"


console.log(`5. Метод array.pop() :  `);

const arrPop = [1, 2, 3];
console.log(arrPop.pop()); // Выведет 3;
console.log(arrPop); // [ 1, 2 ];

console.log(`6. Метод array.push() :  `);

const arr = [1, 2, 3];
console.log(arr.push(4)); // Выведет 4 и в конец массива добавит 4 [1, 2, 3, 4]-изменит массив


console.log(`7. Метод array.shift() :  `);

// const arr = [1, 2, 3, 4];
console.log(arr.shift()); // Выведет 1 и удалит нулевой элемент массива, изменит массив [2,3]
console.log(arr)

console.log(`8. Метод array.unshift() :  `);

// const arr = [1, 2, 3];
console.log(arr.unshift(0)); // Выведет 4 и добавит 0 вначало массива. изменит массив [0,1,2,3]
console.log(arr)

console.log(`9. Метод delete array[] :  `);

const fruits = ["apple", "banana", "orange"];
delete fruits[0];
console.log(fruits); // Выведет [ <1 empty item>, 'banana', 'orange' ]


console.log(`12. Метод array.flat() :  `);

const arrFlat = [1, 2, [3, 4]];
console.log(arrFlat.flat()); // Выведет [1, 2, 3, 4]

/*
let newArray = arr.flat(depth = *На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.*);
*/
const arrFlat1 = [1, 2, [3, 4]];
console.log(arrFlat1.flat()); // [1, 2, 3, 4]

let arrFlat2 = [1, 2, [3, 4, [5, 6]]];
console.log(arrFlat2.flat()); // [1, 2, 3, 4, [5, 6]]

let arrFlat3 = [1, 2, [3, 4, [5, 6]]];
console.log(arrFlat3.flat(2)); // [1, 2, 3, 4, 5, 6]

let arrFlat4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arrFlat4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Метод flat удаляет пустые слоты из массива:
*/
const arrFlat5 = [1, 2, , 4, 5];
console.log(arrFlat5.flat()); // [1, 2, 4, 5]


//Метод concat(): Этот метод создает новый массив, который содержит элементы всех указанных массивов.
// Он не изменяет исходные массивы, а возвращает новый массив, содержащий элементы из всех переданных массивов.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
//Оператор расширения (Spread Operator): Этот оператор позволяет распространять элементы массива в другой массив. Он также создает новый массив.


combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//Метод push(): 
//Можно использовать метод push() для добавления элементов одного массива в конец другого массива. Этот метод изменяет исходный массив.



array1.push(...array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]

//Метод splice(): 
//Этот метод позволяет добавлять элементы в массив в указанной позиции. Он также изменяет исходный массив.



array1.splice(array1.length, 0, ...array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]


console.log(`13. Метод array.splice() :  `);

const arrSplice = [1, 2, 3, 4, 5];
console.log(arrSplice.splice(2, 1, "a", "b")); // Выведет [3]
console.log(arrSplice); // [ 1, 2, 'a', 'b', 4, 5 ]

const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruitsSplice);


// Удаляет 0 элементов по индексу 2 и вставляет "drum"

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log(removed); // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено

// Удаляет 1 элемент по индексу 3

const myFish1 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed1 = myFish1.splice(3, 1);

console.log(removed1);

const fruitSplice = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitSplice.splice(0, 1));
console.log(fruitSplice)


// Удаляет 1 элемент по индексу -2

const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
const removed7 = myFish7.splice(-2, 1);
console.log(myFish7)

// Удаляет все элементы после индекса 2 (включительно)

const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
const removed5 = myFish5.splice(2);

console.log(myFish5)


/*14. Array toSpliced(): Метод toSpliced() Возвращает новый массив с удалёнными и/или заменёнными элементами без изменения исходного массива.
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Example
*/
// console.log(`14. Метод array.toSpliced() :  `);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced();
// months.toSpliced(0, 1);
// console.log(spliced)

// const months7 = ["Jan", "Mar", "Apr", "May"];

// // Inserting an element at index 1
// const months2 = months7.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// // Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// // Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// // Original array is not modified
// console.log(months7); // ["Jan", "Mar", "Apr", "May"]


/*15. Array slice(): Метод slice() возвращает новый массив, содержащий копию части исходного массива от начального до конечного индекса (не включая конечный). Пример использования:
*/

console.log(`15. Метод array.slice() :  `);

arr22 = [1, 2, 3, 4, 5];
console.log(arr22.slice(2)); // Выведет [3, 4, 5]

arr11 =  [17, 'test', true, 'last'];
temporaryArr = arr11.slice(); //  [ 17, 'test', true, 'last' ] - slice() используют для копирования массива.
console.log(temporaryArr);

//  newArr = [];

arrLength = arr11.length;

console.log(`Метод arr.length:  arrLength = ${arrLength} и  
arr = ${arr11}.`);








