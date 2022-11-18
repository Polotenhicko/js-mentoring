// https://learn.javascript.ru/array-methods
const log = console.log;


// Чтобы отличить массив от объекта, его проверяют `Array.isArray(value)`
const arr1 = [0, 1, 2, 3, 4, 5];
log(Array.isArray(arr1));
console.log("hello")
/*
 *   меняют оригинал    |   не меняют оригинал
 *
 * `.splice()`          |   `.concat()`
 * `.copyWithin()`      |   `.slice()`
 * `.reverse()          |   `.forEach()`
 * `.sort()`            |   `.map()`
 * `.fill()`            |   `.flat()`
 *                      |   `.filter()`
*/


// === Методы добавления/удаления эл-тов === (элементарные в предыдущей главе)

// `.splice(start, count?, ...elements)` - удаляет эл-ты (кол-во - count) начиная с индекса start, добавляет на их место ...elements. -1 и 0 можно. (возвращает удаленные эл-ты)
log(arr1.splice(-2, 4), arr1);          // Output: [ 4, 5 ]    [ 0, 1, 2, 3 ]


// `.slice(start, end?)` - создает новый массив из эл-тов от start до end. Отрицательные индексы можно.
// Часто используют без аргументов, чтобы создать копию массива
const arr2 = [0, 1, 2, 3, 4, 5];
log(arr2.slice(-3, 5), arr2);          // Output: [ 3, 4 ]     [ 0, 1, 2, 3, 4, 5 ]


// `.concat(...arg)` - конкатенация (сумма) эл-ов. создает новый массив, ставит все аргументы в конец
// Если аргумент - объект - ставит его как есть (приводит к примитиву строки). Для норм работы объекту необходимо быть массиво подобным +поле `[Symbol.isConcatSpreadable]: true`
const arr3 = [0, 1, 2, 3, 4, 5];
const arrLike = {
  0: "aboba",
  1: "хыыы",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
}
log(arr3.concat(arr1, 99, [0, 1, 2, 3], arrLike));      // Output: [ 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 99, 0, 1, 2, 3 ]



// === Перебор эл-тов ===

// `.forEach(el => func)` - выполняет func для каждого элемента массива (el). Всегда возвращает undefined.
arr3.forEach(e => log(e));      // Output: 0 1 2 1 2 5



// === Поиск в массиве ===

// `.indexOf(item, from?)` - Ищет item в массиве начиная с from индекса, возвращает индекс первого найденного, иначе -1. Не приводит типы (===).
// `.lastIndexOf(item, from?)` - Тоже самое с конца
log(arr3.indexOf(3));         // Output: -1
log(arr3.indexOf(2));         // Output: 2
log(arr3.lastIndexOf(2));     // Output: 4


// `.includes(item, from)` - Проверяет есть ли item в массиве, возвращает true/false. Не приводит типы (===).
log(arr3.includes(3));         // Output: false


// `.find(el => func)` - Возвращает первый найденный элемент (el), удовлетворяющий условиям func, иначе undefined
// `.findLast(el => func)` - Тоже самое с конца
log(arr3.find(e => e === 10));          // Output: undefined
// log(arr3.findLast(e => e === 2));    // Output: 2                       (Почему-то не работает, решение: использовать `.reverse()` перед `.find(el => func)`)


// `.findIndex(el => func)` - Возвращает первый найденный элемент (el), удовлетворяющий условиям func, иначе undefined
// `.findLastIndex(el => func)` - Тоже самое с конца
log(arr3.findIndex(e => e === 2));                   // Output: 2
// log(arr3.findLastIndex(e => e === 2));            // Output: 4          (Почему-то не работает, решение: использовать `.reverse()` перед `.findIndex(el => func)`)


// `.filter(el => func)` - Возвращает новый массив эл-тов, удовлетворяющих условию func, иначе пустой массив []
log(arr3.filter(e => e === 2));                   // Output: [ 2, 2 ]


// `.every(el => func)` - Проверяет, все ли эл-ты удовлетворяют func, возвращает true/false
log(arr3.every(e => e === 2));                   // Output: false

// `.some(el => func)` - Проверяет, есть ли эл-ты, которые удовлетворяют func, возвращает true/false
log(arr3.some(e => e === 2));                   // Output: true



// === Преобразование массива ===

// Почти все методы массива, которые вызывают функции, кроме `.sort()`, принимают необязательный параметр thisArg - по сути это аналог `.bind()`
// То есть меняет контекст this. Используется при колбэк потере this (проще прост юзать стрелки).

// `.map(el => func)` - Возвращает новый массив преобразованных func элементов (el)
log(arr3.map(e => e * 2));                   // Output: [ 0, 2, 4, 2, 4, 10 ]


// `.sort((a, b) => func)` - Меняет порядок эл-тов в оригинальном массиве согласно func. По умолчанию сравнивает эл-ты как строки.
// правила сортировки (func) должны возвращать отрицательное число, если первый эл-т меньше, 0 - если равны и положительное, если больше:
// `if (a > b) return 1;     if (a == b) return 0;     if (a < b) return -1;`
// Можно записать эти условия короче: `arr.sort( (a, b) => a - b );`
// Для строк использовать вместе с .localCompare()
log(arr3.sort((a, b) => a - b));                   // Output: [ 0, 1, 1, 2, 2, 5 ]


// `.reverse()` - Переворачивает оригинальный массив
log(arr3.reverse());                                // Output: [ 5, 2, 2, 1, 1, 0 ]


// `.join(glue)` - Создает новую строку из массива, вставляет glue между эл-тами
log(arr3.join());                                   // Output: '5,2,2,1,1,0'

// `.split(delim, maxSize?)` - Создает массив с размером до maxSize из эл-тов строки, разделенных delim
const string1 = "example string, boba"
log(string1.split(","));                               // Output: [ 'example string, bitch' ]


// `.reduce((sum, el) => func, initial? )` - Объединяет все эл-ты (el) массива в sum, согласно func. Возвращает sum. initial - начальное значение sum - исп. если есть риск пустого массива.
// `.reduceRight((sum, el) => func, initial?)` - Тоже самое, только с конца
log(arr3.reduce((sum, el) => sum + el, 0));               // Output: 11


// `.flat(depth)` - Создает новый массив, в котором все эл-ты вложенных подмассивов были "подняты" на указанный уровень depth
const arr4 = [[1, 2, 3], [1, 2, 3], [1, 2, 3, [4, 5, 6]]];
log(arr4.flat(1));               // Output: [ 1, 2, 3, 1, 2, 3, 1, 2, 3, [ 4, 5, 6 ] ]

// .flatMap(e => func) - Делает тоже самое, только сначала применяет .map()
log(arr4.flatMap(e => e.fill(1, 0)));               // Output: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]



// === Перезапись эл-тов ===

// `.copyWithin(target, start, end?)` - Берет эл-ты от start ДО end и перезаписывает ими эл-ты оригинального массива начиная с индекса target
log(arr3.copyWithin(3, 1, 3));         // Output: [ 0, 1, 2, 1, 2, 5 ]


// `.fill(value, start, end?)` - Перезаписывает эл-ты оригинального массива от start ДО end значением value
log(arr3.fill(3, 1, 3));         // Output: [ 0, 1, 2, 1, 2, 5 ]



// Task 1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
  return str
      .split("-")
      .map(
          (word, i) => i
              ? word[0].toUpperCase() + word.split("").splice(1, word.length).join("")
              : word
      )
      .join("");
}

// log(camelize("list-style-image"));    // Output: 'listStyleImage'

// Task 2
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b
// и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
const arr5 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(n => n >= a && n <= b);
}

const filtered = filterRange(arr5, 1, 4);

// log( filtered ); // 3,1 (совпадающие значения)

// log( arr5 ); // 5,3,8,1 (без изменений)


// Task 3
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
const arr6 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  const filtered = arr.filter(n => n >= a && n <= b);
  arr.length = 0;
  arr.push(...filtered);
}

filterRangeInPlace(arr6, 1, 4); // удалены числа вне диапазона 1..4

// log( arr6 ); // [3, 1]

// Task 4
// Сортировать в порядке по убыванию
const arr7 = [5, 2, 1, -10, 8];
arr7.copyWithin(0, arr7.sort((a, b) => b - a));
// log( arr7 ); // 8, 5, 2, 1, -10

// Task 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
const arr8 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

const sorted = copySorted(arr8);
// log( sorted ); // CSS, HTML, JavaScript
// log( arr8 ); // HTML, JavaScript, CSS (без изменений)

// Task 6
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
//    1) реализуйте метод calculate(str), который принимает строку типа "1 + 2"
//    в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
//    Метод должен понимать плюс + и минус -.
//    2) Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
//    Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

function Calculator() {
  this["+"] = (a, b) => a + b;
  this.calculate = function (str) {
    arr = str.split(" ");
    return this[arr[1]](+arr[0], +arr[2]);
  };
  this.addMethod = function (name, func) {
    this[name] = func;
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

// log( powerCalc.calculate("2 ** 3") ); // 8
// log(powerCalc.calculate('3 + 7')) // 10


// Task 7
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};
let users = [vasya, petya, masha];

let names = users.map(user => user.name);
// log( names ); // Вася, Петя, Маша

// // Task 8
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let vasya2 = {name: "Вася", surname: "Пупкин", id: 1};
let petya2 = {name: "Петя", surname: "Иванов", id: 2};
let masha2 = {name: "Маша", surname: "Петрова", id: 3};
let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`, id: user.id
  };
})

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// log( usersMapped[0].id ); // 1
// log( usersMapped[0].fullName ); // Вася Пупкин
// log( usersMapped );
/* Output: [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/



// // Task 9
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya3 = {name: "Вася", age: 25};
let petya3 = {name: "Петя", age: 30};
let masha3 = {name: "Маша", age: 28};
let arr9 = [vasya3, petya3, masha3];

(function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age)
}(arr9));

// теперь: [vasya, masha, petya]
// log(arr9)
// log(arr9.map(user => user.name)); // [ 'Вася', 'Маша', 'Петя' ]



// // Task 10
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
let arr10 = [1, 2, 3];

const shuffle = (arr) => {
  return arr.sort(() => Math.floor((Math.random() * (arr.length) - 1)));
};

// log(shuffle(arr10)); // arr = [3, 2, 1]
// log(shuffle(arr10)); // arr = [2, 1, 3]
// log(shuffle(arr10)); // arr = [3, 1, 2]



// Task 11
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
let vasya4 = {name: "Вася", age: 25};
let petya4 = {name: "Петя", age: 30};
let masha4 = {name: "Маша", age: 29};
let arr11 = [vasya4, petya4, masha4];
const getAverageAge = (arr) => {
  return arr.reduce((sum, e) => sum + e.age, 0) / arr11.length
}
// log( getAverageAge(arr11) ); // (25 + 30 + 29) / 3 = 28

// Task 12
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
const unique = (arr) => {
  return arr.filter(unic => arr.filter(el => el === unic).length <= 1)
}
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
log(unique(strings));

// Task 13
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Используйте метод .reduce в решении.
let users5 = [
  {id: "john", name: "John Smith", age: 20},
  {id: "ann", name: "Ann Smith", age: 24},
  {id: "pete", name: "Pete Peterson", age: 31},
];
const groupById = function (arr) {
  return users5.reduce((ac, e) => {
    return ac[e.id] = e;
  }, 0)
};
let usersById = groupById(users5);
log(usersById);
/* {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
} */