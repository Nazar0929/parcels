// перший приклад

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


// другий приклад



import { students } from "./students.js";
import { average, maxScore, minScore } from "./addition.js";

students.forEach(student => {
  console.log(`Учень: ${student.name}`);
  console.log(`Середній бал: ${average(student.scores).toFixed(1)}`);
  console.log(`Максимальний: ${maxScore(student.scores)}`);
  console.log(`Мінімальний: ${minScore(student.scores)}`);
  console.log("---------------------------");
});
