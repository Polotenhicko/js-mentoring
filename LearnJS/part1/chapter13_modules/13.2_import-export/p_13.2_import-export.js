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
// { default: function default(), name: "Lydia" }
// - импорт всего (*) создает объект с св-ми, которые содержат ссылки на все экспорты. Дефолтный экспорт лежит в св-ве `default`



// == Task 4 ==
// Как мы можем вызвать функцию sum в sum.js из index.js?

// - sum.js -
// export default function sum(x) {
//   return x + x;
// }

// - index.js -
// import * as sum from './sum';


// sum.default(4)       - импорт всего (*) создает объект с св-ми, которые содержат ссылки на все экспорты. Дефолтный экспорт лежит в св-ве `default`

function prot() {
  console.log( x );
}
Object.prototype.x  =  10;
prot();