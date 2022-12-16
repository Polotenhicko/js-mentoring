// https://learn.javascript.ru/keys-values-entries

/*
* Для перебора простых объектов доступны следующие методы:
*
* Object.keys(obj) – возвращает массив ключей.
* Object.values(obj) – возвращает массив значений.
* Object.entries(obj) – возвращает массив пар [ключ, значение].
*/

// У простых объектов вызов этих методов отличается от структур данных, основанных на объектах:
//  `Object.keys(obj)` !== `map.keys()`                         - различие в синтаксисе
// 	Object =>	«реальный» массив, Map => перебираемый объект     - различия в возврате
const newMap = new Map;
newMap.set('first key', 'first value')
    .set('second key', 'second value');

console.log(newMap.keys());     // Output:  [Map Iterator] { 'first key', 'second key' }


// У простых объектов нет методов массивов, но можно пользоваться Object.entries(obj) и Object.fromEntries(obj), как переходником:
const newObj = {a: 2, b: 1, c: 0};
console.log(newObj, ' ',
    Object.fromEntries(
        Object.entries(newObj).sort((prop1, prop2) => prop1[1] - prop2[1])
    )
);          // Output: { a: 2, b: 1, c: 0 }   { c: 0, b: 1, a: 2 } (создан новый отсортированный объект)

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for...of.
// Если объект salaries пуст, то результат должен быть 0
const salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};
const sumSalaries = function (salaries) {
  return Object.entries(salaries)
      .reduce((sum, slry) => sum + slry[1], 0);
};
console.log(sumSalaries(salaries));     // Output: 650


// Task 2
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
  name: 'John',
  age: 30
};
const count = function (user) {
  return Object.entries(user).length;
};
console.log(count(user));     // Output: 2