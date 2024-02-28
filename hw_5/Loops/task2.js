const { task } = require("./helper.js");
task(1);
let room = {
  heigh: "3",
  tv: "Samsung",
  big: true,
};
task(2);
console.log("<<<<<<<<<<<<<<<<1>>>>>>>>>>>>");
for (const key in room) {
  console.log(key, room[key]);
}
console.log("<<<<<<<<<<<<<<<<2>>>>>>>>>>>>>");
for (let k in room) {
  console.log(`${k}->${room[k]}`);
}
console.log("<<<<<<<<<<<<<<<<3>>>>>>>>>>>>>");
Object.keys(room).forEach((key) => {
  console.log(key, room[key]);
});
console.log("<<<<<<<<<<<<<<<<4>>>>>>>>>>>>>");
Object.keys(room).forEach((key) => {
  console.log(key);
});
console.log("<<<<<<<<<<<<<<<<4>>>>>>>>>>>>>");
Object.keys(room).forEach((values) => {
  console.log(values);
});
console.log("<<<<<<<<<<<<<<<<5>>>>>>>>>>>>>");
console.log(Object.keys(room));
console.log(Object.values(room));
console.log(room);

task(3);
console.log(typeof room.big);
console.log(typeof room.tv);
console.log(typeof room["heigh"]);

task(4);
console.log(room["tv"].length);
task(5);
console.log(room["tv"].length - 1);

console.log(room.tv.length - 1);
task(6);
// Получаем ключи объекта room в виде массива
const keys = Object.keys(room);

// Второй ключ объекта имеет индекс 1 в массиве ключей
const secondKey = keys[1];

console.log(secondKey);
task(7);
console.log((room.tv = "LG"));
task(8);
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);
task(9);
delete room.big;

console.log(room);

task(10);
let paint = "color";
room[paint] = "blue";
console.log(room);

task(11);
// Создаем объект Testing с принципами тестирования
let Testing = {
  "Принцип 1: Тестирование показывает наличие дефектов": true,
  "Принцип 2: Исчерпывающее тестирование невозможно": true,
  "Принцип 3: Избирательность тестирования": true,
  "Принцип 4: Парадокс пестроты": true,
  "Принцип 5: Осредненное тестирование": true,
  "Принцип 6: Ранняя ошибка": true,
  "Принцип 7: Необходимость контроля": true,
};

// Создаем массив типов тестирования, которые обладают этими свойствами
let typesOfTesting = [
  "Unit Testing",
  "Integration Testing",
  "System Testing",
  "Acceptance Testing",
];

// Устанавливаем значения для типов тестирования
Testing["Принцип 1: Тестирование показывает наличие дефектов"] = true;
Testing["Принцип 2: Исчерпывающее тестирование невозможно"] = true;
Testing["Принцип 3: Избирательность тестирования"] = true;
Testing["Принцип 4: Парадокс пестроты"] = false; // Например, Unit Testing обычно не покрывает все аспекты системы
Testing["Принцип 5: Осредненное тестирование"] = false; // Например, System Testing может включать различные типы тестирования
Testing["Принцип 6: Ранняя ошибка"] = true;
Testing["Принцип 7: Необходимость контроля"] = true;

// Выводим информацию о принципах тестирования для каждого типа тестирования
typesOfTesting.forEach((type) => {
  console.log(`Для типа тестирования '${type}':`);
  for (const principle in Testing) {
    console.log(
      `${principle}: ${Testing[principle] ? "Присутствует" : "Отсутствует"}`
    );
  }
  console.log("--------------------");
});
