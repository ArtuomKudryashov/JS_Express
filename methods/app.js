let  s =  "Knowledge of built-in JavaScript methods speeds up a tester's work"
// Методы:
console. log (s)
console.log(s.charAt(0))
console. log (`1---${s}`)
// ; или s[0]
console.log(s[0])
console. log (`2---${s}`)

// s.charAt(s.length - 1);
console.log(s.charAt(s.length - 1))
console. log (`3---${s}`)
// извлечение подстроки:
// s.substring(1, 4); 
console.log(s.substring(1,4))
console. log (`4---${s}`)


// s.substr(1, 3); 
console.log(s.substring(1,3))
console. log (`5---${s}`)
// s.slice(1, 4); 
console.log(s.slice(4,-4))
console. log (`6---${s}`)

s.slice(-3);
console.log(s.slice(6,-10));
console.log(s.slice(-3));
console.log(s.indexOf("l")); 
console.log(s.lastIndexOf("l")); 
console.log(s.split(", "));
console.log(s.replace("l", "L")); 
console.log(s.replaceAll("l", "L")); 

console.log(s.toUpperCase());
console.log(s.toLowerCase()); 
