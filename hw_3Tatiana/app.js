let x = 20;
let y = 30;
x = x + y; //50
y = x - y; //50-30=20
x = x - y; //50-20=30

console.log(x, y);

x = 50;
y = 90;

console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

console.log()

// Задача 2 Create variables for the names with age: Tom, Sam, Jack, Ted.
//  Tom is 16, each friend is 2 years older, starting from Tom in order.

//  a)Count the age of each person;

// b) Insert the names with the age to the string, using concatenation and ${}:
// “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
//  Ted is … years old. And the total of our age is ….years old”.

//  c) Find out what is the Unicode Value of the 1sr letter of the name,
// and add the total to the string: “The total of the Unicode values of
//  the 1st letter of the all names is ….!”.

let tomAge = 16;
let samAge = tomAge + 2;
let jackAge = samAge + 2;
let tedAge = jackAge + 2;

let resultString =
  `Tom is ${tomAge} years old,\n` +
  `Sam is ${samAge} years old,\n` +
  `Jack is ${jackAge} years old,\n` +
  `Ted is ${tedAge} years old. \n` +
  `And the total of our age is ${
    tomAge + samAge + jackAge + tedAge
  } years old.`;

console.log(resultString);

console.log()

let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let position = 0;
let sum = 0;
let namePerson = ["Tom","Sam","Jack","Ted"]
for(let i = 0; i < namePerson.length; i++){
  let firstLettInd = alp.indexOf(namePerson[i][0])+1
  position = firstLettInd + 41
  sum = sum + position
}
console.log (sum)

function letPosition(letter) {
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  alp = alp.toLowerCase();
  letter = letter.toLowerCase();
  let position;
  for (let i = 0; i < alp.length; i++) {
    if (letter === alp[i]) {
      position = i + 1;
      break;
    }
  }
  return `Position of alphabet: ${position}`;
}
console.log(letPosition('d'))