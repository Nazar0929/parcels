

// // дефолтний імпорт

// import added from "./addition"

// const result = added(2,9)
// console.log(result);


// іменований імпорт

// import { add, subtraction } from "./addition";
// const result = add(2,92);
// console.log(result);

// const results = subtraction(2,92);
// console.log(results);



// import calculate from "./addition"
// console.log(calculate);

// const result3 = calculate.add(11,4);
// const result4 = calculate.subtraction(11,4);
// console.log(result3);
// console.log(result4);



import { nanoid } from "nanoid";

const people = [
  { name: "Іса", lastName: "Петренко", age: 25 },
  { name: "Олена", lastName: "Ковальчук", age: 32 },
  { name: "Максим", lastName: "Сидоренко", age: 28 },
  { name: "Аліна", lastName: "Ткаченко", age: 22 },
  { name: "Юрій", lastName: "Мельник", age: 35 },
  { name: "Наталя", lastName: "Іванова", age: 30 },
  { name: "Дмитро", lastName: "Бондар", age: 27 },
  { name: "Світлана", lastName: "Кравченко", age: 29 },
  { name: "Артем", lastName: "Гончар", age: 31 },
  { name: "Марина", lastName: "Литвин", age: 26 }
];

const formatId = people.map(user => ({...user, id : nanoid()}))
console.log(formatId);


import * as calculate from "./addition"
console.log(calculate);

const result3 = calculate.add(11,4);
const result4 = calculate.subtraction(11,4);
console.log(result3);
console.log(result4);
