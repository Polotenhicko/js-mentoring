// https://github.com/lydiahallie/javascript-questions/blob/master/ru-RU/README.md

// == Task 1 ==
// Какой будет вывод?

// - counter.js -
// let counter = 10;
// export default counter;

// - index.js -
// import myCounter from "./counter";
// myCounter += 1;                            // TypeError      - нельзя изменять импортированный модуль, тк он является Read-only.
// console.log(myCounter);



// == Task 2 ==
// Какой будет вывод?

// - index.js -
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// - sum.js -
// console.log('running sum.js');
// export const sum = (a, b) => a + b;


// Output: running sum.js, running index.js, 3      - `import` всплывает



// == Task 3 ==
// Какой будет вывод?

// - module.js -
// export default () => "Hello world"
// export const name = "Lydia"

// - index.js -
// import * as data from "./module"
// console.log(data)


// Ненужное удалить:
// A: { default: function default(), name: "Lydia" }
// B: { default: function default() }
// C: { default: "Hello world", name: "Lydia" }
// D: Global object of module.js



// == Task 4 ==
// Как мы можем вызвать функцию sum в sum.js из index.js?

// - sum.js -
// export default function sum(x) {
//   return x + x;
// }

// - index.js -
// import * as sum from './sum';


// Ненужное удалить:
// A: sum(4)
// B: sum.sum(4)
// C: sum.default(4)
// D: Нельзя импортировать значения по умолчанию используя *, только именованные экспорты