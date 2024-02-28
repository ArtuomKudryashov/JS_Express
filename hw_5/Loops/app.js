const { task,
     findTargetSum,
      sumWithFirstNeg,
      taskStringFor,
      addSpacesForOf,
      addSpacesForIn,
      addSpacesWhile } = require("./helper.js");
task(1)
const nums = [3, 88, 65, 5, 9];
let ar =[];
for (let i = 0; i<nums.length; i++){
    ar.push(nums[i]*2);

}
console.log(ar)
task(2)


salary = [1200, 2400, 3700, 750] 
let upSal=[];

for(let three of salary){
    upSal.push(three*3);
}
console.log(upSal);

task(3)

let count = 0;
let up = 6;
let goToBed = 22;
for(let i = up+1; i< goToBed; i=i+2){
    count++;

    
}
console.log(count);
task(4)
console.log()
const multiArr = [[1,2], [3,4], [5,6]];
const flattenedArray = [];

for (let i = 0; i < multiArr.length; i++) {
    for (let j = 0; j < multiArr[i].length; j++) {
        flattenedArray.push(multiArr[i][j]);
    }
}

console.log(flattenedArray); 
console.log()
const multiArr1 = [[1,2], [3,4], [5,6]];
const flattenedArray1 = [];

for (const subArrayIndex in multiArr1) {
    for (const elementIndex in multiArr1[subArrayIndex]) {
        flattenedArray1.push(multiArr1[subArrayIndex][elementIndex]);
    }
}
console.log()

console.log(flattenedArray); 
console.log()
const multiArr2 = [[1,2], [3,4], [5,6]];
const flattenedArray2 = [];

for (const subArray of multiArr2) {
    for (const element of subArray) {
        flattenedArray2.push(element);
    }
}

console.log(flattenedArray2);

let arrFlat4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arrFlat4.flat(4));

console.log(multiArr2.flat());

task(5)
const arr = [1234, 5678, 9012];
let target = 14690;
console.log(findTargetSum(arr, target));

task(6)

const arr2 = [10, 20, 30, 40, 50,-4,7,0];
console.log(sumWithFirstNeg(arr2))

const digits = [1, 32, 73, 4, 59, -16, 47, -85, 69, -10];
console.log(sumWithFirstNeg(digits))

task(7)

let taskString = "This is winter."
taskStringFor(taskString)
console.log()
console.log(2)


let taskString1 = "This is winter.";
console.log(addSpacesForOf(taskString1));
console.log()
console.log(3)

let taskString2 = "This is winter.";
console.log(addSpacesForIn(taskString2));
console.log(4)

let taskString3 = "This is winter.";
console.log(addSpacesWhile(taskString3));

task(8)
const booleanArray = [true, true, false, true, true];
let allTrue = true;

for (const value of booleanArray) {
    if (value !== true) {
        allTrue = false;
        break;
    }
}

console.log(allTrue); 
task(9)
// Задача 1
console.log("1)");
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
        line += '*';
    }
    console.log(line);
}

// Задача 2
console.log("\n2)");
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
        if (j === 0 || j === 4 || i === 0 || i === 4) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

// Задача 3
console.log("\n3)");
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}

// Задача 4
console.log("\n4)");
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
        if (j >= 4 - i) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

// Задача 5
console.log("\n5)");
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 9; j++) {
        if (j >= 4 - i && j <= 4 + i) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

// Задача 6
console.log("\n6)");
for (let i = 5; i > 0; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    console.log(line);
}

// Задача 7
console.log("\n7)");
for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '$';
    }
    console.log(line);
}
for (let i = 4; i > 0; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '%';
    }
    console.log(line);
}

// Задача 8
console.log("\n8)");
for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += i;
    }
    console.log(line);
}

// Задача 9
console.log("\n9)");
let num = 1;
for (let i = 1; i <= 6; i++) {
    let line = '';
    for (let j = 0; j < 6 - i; j++) {
        line += ' ';
    }
    for (let j = 0; j < i; j++) {
        line += num + ' ';
        num++;
    }
    console.log(line);
}

