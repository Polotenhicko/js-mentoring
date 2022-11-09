// https://learn.javascript.ru/array-methods
const log = console.log;

/* 
 *    меняют оригинал    | не меняют оригинал
 * 
 * `.splice()`           | `.concat()`
 * `.copyWithin()`       | `.slice()`
 * `` | `.forEach()`
 * `` | ``
 * `` | ``
 * `` | ``
 * 
*/

// Чтобы отличить массив от объекта, его проверяют `Array.isArray(value)`
const arr1 = [0, 1, 2, 3, 4, 5];
log(Array.isArray(arr1));


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
  0: 'aboba',
  1: 'хыыы',
  length: 2,
  [Symbol.isConcatSpreadable]: true,
}
log(arr3.concat(arr1, 99, [ 0, 1, 2, 3 ], arrLike));      // Output: [ 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 99, 0, 1, 2, 3 ]




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
log(arr3.sort((a, b) => a - b ));                   // Output: [ 0, 1, 1, 2, 2, 5 ]


// `.reverse()` - Переворачивает оригинальный массив
log(arr3.reverse());                                // Output: [ 5, 2, 2, 1, 1, 0 ]


// `.join(glue)` - Создает новую строку из массива, вставляет glue между эл-тами
log(arr3.join());                                   // Output: '5,2,2,1,1,0'

// `.split(delim, maxSize?)` - Создает массив с размером до maxSize из эл-тов строки, разделенных delim
const string1 = 'example string, bitch'
log(string1.split(','));                               // Output: [ 'example string, bitch' ]


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
function camelize() {

}
log(camelize("list-style-image"));

// Task 2
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b
// и возвращает результат в виде массива.
  // Функция должна возвращать новый массив и не изменять исходный.
const arr5 = [5, 3, 8, 1];
function filterRange() {
  
}
const filtered = filterRange(arr5, 1, 4);

log( filtered ); // 3,1 (совпадающие значения)

log( arr5 ); // 5,3,8,1 (без изменений)


// Task 3
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
  // Функция должна изменять принимаемый массив и ничего не возвращать.
const arr6 = [5, 3, 8, 1];
function filterRangeInPlace() {
  
}
filterRangeInPlace(arr6, 1, 4); // удалены числа вне диапазона 1..4

log( arr6 ); // [3, 1]


// Task 4
// Сортировать в порядке по убыванию
const arr7 = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
log( arr7 ); // 8, 5, 2, 1, -10

// Task 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
const arr8 = ["HTML", "JavaScript", "CSS"];
function copySorted() {
  
}
const sorted = copySorted(arr8);
log( sorted ); // CSS, HTML, JavaScript
log( arr8 ); // HTML, JavaScript, CSS (без изменений)

// Task 6
log()

// Task 7
log()

// Task 8
log()

// Task 9
log()

// Task 10
log()

// Task 11
log()

// Task 12
log()

// Task 13
log()
