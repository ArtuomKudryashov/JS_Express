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
