var str = 'Hello World! You are welcome'.split(" "); // разделить строку по пробелу и записать в массив, 
                                                     // где каждый элемент - строка
// console.log(str);
for (let i=0; i < str.length; i++){               // i - это индекс слова
//  console.log(str[i]);                          // текущий элемент строки - слово
  for (let j=0; j < str[i].length; j++) {         // j - это индекс буквы слова
  if (str[i][j] === 'W') {                        // i,j - это буква j для слова i
    console.log(str[i]);
//  console.log(str[i][j]);                         // выводим букву каждого слова
  }
  }
}