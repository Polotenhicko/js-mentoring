// https://learn.javascript.ru/closure

// Замыкание - внутренняя функция, которая может получить доступ к переменным внешней функции

// Лексическое окружение (LexicalEnvironment) - недоступный объект, который содержит информацию о конкретной функции\блоке\скрипте, состоит из:
// 1. Environment Record - объект, в котором хранятся локальные переменные и некоторая информация типа this
// 2. [[Environment]] - Когда создается функция, она получает ссылку на внешнее лексическое окружение.

// [[Environment]] не меняется (как this) и обеспечивает достижимость родительского эл-та, пока внутренняя функция жива.

// Благодаря замыканию можно возвращать функции => создавать цепочки вызовов ()()()()

// (!) При каждом выполнении функции создается новое лексическое окружение, ссылающееся на родительский эл-т
const makeCounter = function () {
  let counter = 0;

  return function () {
    return counter++
  };

};
const foo1 = makeCounter();
const foo2 = makeCounter();
console.log(foo1());               // Output: 0
console.log(foo1());               // Output: 1
console.log(foo2());               // Output: 0

const foo3 = foo1;
console.log(foo3());               // Output: 2

console.log(makeCounter()());      // Output: 0
console.log(makeCounter()());      // Output: 0
console.log(makeCounter()());      // Output: 0

// Переменные на самом деле это св-ва Environment Record
// Код сначала ищет переменные в текущей функции, потом во внешней, потом в след. внешней и тд


// Function Declaration подгружается в лексическое окружение заранее
// Function Expression подгружается когда до ее объявления(выражения) дойдет выполнение


// Лексическое окружение цикла for работает уникально и отличается от других циклов:
// каждую итерацию переменная-итератор не перезаписывается, а пересоздается со след. значением, то есть уникальна каждый шаг
// ps i нельзя объявить с const потому, что при получении след. переменной i мы сначала изменяем текущую i, потом задаем ее значение следующей
const arr10 = [];
for (let i = 0; i < 10; i++) {

  const foo = function () {
    console.log(`for: ${i}`);
  };

  arr10.push(foo);
}

arr10[5]();       // Output: for: 5
arr10[9]();       // Output: for: 9


// то же самое, только с циклом while:
const arr11 = [];
let i = 0;
while (i < 10) {

  const foo = function () {
    console.log(`while: ${i}`);
  };

  arr11.push(foo);
  i++;
}

arr11[5]();       // Output: while: 10
arr11[9]();       // Output: while: 10



//----------------------------------------------------------------------------------------------------------------------
// Task 1
// Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
function makeCounter1() {
  let count = 0;

  return function() {
    return count++;
  };
}

const counter = makeCounter1();
const counter2 = makeCounter1();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?   - Output: 0
console.log( counter2() ); // ?   - Output: 1


// Task 2
// Будет ли работать? Что покажет?
function Counter3() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
const counter3 = new Counter3();

console.log( counter3.up() );     // Output: 1
console.log( counter3.up() );     // Output: 2
console.log( counter3.down() );   // Output: 1


// Task 3
//  Какой будет результат у вызова на последней строке?
const phrase = "Hello";

if (true) {
  const user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();                            // Output: 'Hello, John'  (с юзстриктом ошибка объявления)


// Task 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
const sum = function (a) {
  return function (b) {
    return a + b;
  };
};
console.log(sum(10)(20));     // Output: 30


// Task 5
// Сделайте набор «готовых к употреблению» фильтров для .filter:
//    inBetween(a, b) – между a и b (включительно).
//    inArray([...]) – находится в данном массиве.
const arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = function (a, b) {
  return function (e) {
    return e >= a && e <= b;
  };
};

const inArray = (arr) => {
  return function (e) {
    return arr.includes(e);
  };
};
console.log(arr.filter(inBetween(3, 6)));       // Output: [ 3, 4, 5, 6 ]
console.log(arr.filter(inArray([1, 2, 10])));     // Output: [ 1, 2 ]


// Task 6
// Сделайте набор «готовых к употреблению» фильтров для .sort:
//  - по имени (Ann, John, Pete)
//    users.sort((a, b) => a.name > b.name ? 1 : -1);
//  - по возрасту (Pete, Ann, John)
//    users.sort((a, b) => a.age > b.age ? 1 : -1);
const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = function (field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
};

console.log(users.sort(byField('name')));
// Output: [
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' }
// ]

console.log(users.sort(byField('age')));
// Output: [
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
//   { name: 'John', age: 20, surname: 'Johnson' }
// ]


// Task 7
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
function makeArmy() {
  const shooters = [];

  for (let i = 0; i < 10; i++) {           // ~~~ Исправлен цикл: let i = 0; while (i < 10) {... i++} ~~~
    const shooter = function () {          // функция shooter
      console.log( i );                    // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

const army = makeArmy();

army[0]();                        // у 0-го стрелка будет номер 10
army[5]();                        // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// Сначала объявляются все функции, пока i растёт до 10, потом при выполнении i выдает для всех 10
// Так происходит из-за того, что i объявлена вне цикла while и не обновляется
// Можно поменять цикл на for, чтобы i создавалась с след. числом внутри цикла