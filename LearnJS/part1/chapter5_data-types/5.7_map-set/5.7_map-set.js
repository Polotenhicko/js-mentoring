// https://learn.javascript.ru/map-set

// `Map` - Это объект, в котором можно использовать ключи любого типа/
// используется для записи объектов в качестве ключей
const mappo = new Map();
console.log(mappo);      // Output: Map(0) {}

/*
* Методы и свойства Map:
*
* `new Map()`           – создаёт коллекцию.
* `map.set(key, value)` – записывает по ключу key значение value.
* `map.get(key)`        – возвращает значение по ключу или undefined, если ключ key отсутствует.
* `map.has(key)`        – возвращает true, если ключ key присутствует в коллекции, иначе false.
* `map.delete(key)`     – удаляет элемент по ключу key. Возвращает true, если key был в множестве на момент вызова, иначе false.
* `map.clear()`         – очищает коллекцию от всех элементов.
* `map.size`            – возвращает текущее количество элементов.
*/
mappo.set(12345, 'numKey')
    .set('12345', 'strKey')
    .set(null, 'nullKey')
    .set(undefined, 'undefinedKey')
    .set(Symbol.for('symbol'), 'symKey')
    .set(NaN, 'NaNKey');

console.log(mappo);                                   // Output: Map(5) { 12345 => 'numKey',  'string' => 'strKey',  null => 'nullKey',  undefined => 'undefinedKey',  Symbol(symbol) => 'symKey' }
console.log(mappo.size);                              // Output: 5
console.log(mappo.get(12345));                        // Output: nullKey
console.log(mappo.get('12345'));                      // Output: strKey
console.log(mappo.get(null));                         // Output: nullKey
console.log(mappo.get(undefined));                    // Output: undefinedKey
console.log(mappo.get(Symbol.for('symbol')));     // Output: symKey
console.log(mappo.get(NaN));                          // Output: NaNKey
console.log(mappo.get('empty'));                      // Output: undefined (такого ключа нет)

// Вывод map сравнивает ключ как ===, но NaN === NaN тут - true
mappo.set([], 'arrayKey')
    .set({}, 'objKey')
    .set([1, 2, 3], 'arrayKey2');
console.log(mappo);                                   // Output: 42 строка + { [] => 'arrayKey', {} => 'objKey', [ 1, 2, 3 ] => 'arrayKey2' }
console.log(mappo.has([1, 2, 3]));                // Output: false (тк [1,2,3] === [1,2,3] - false)
console.log(mappo.get({}));                           // Output: undefined (тк {} === {}} - false)
console.log(mappo.get(NaN));                          // Output: NaNKey (тк для алгоритма map NaN это исключение)


// Можно получить доступ к объекту с помощью [], запись в таком виде будет неявно преобразовывать тип ключа к string
// записанные таким образом эл-ты будут отображаться после .set-элементов и через ':', а не '=>'
// то что записали в `.set()` нельзя вытащить через [], for...of пропускает []-значения
mappo[[]] = 'nnuullll';
mappo[null] = 'null';
mappo[{}] = 'nnnuuullllll';
console.log(mappo);                                   // Output: 26 строка + { '': 'nnuullll', null: 'null', '[object Object]': 'nnnuuullllll' }
console.log(mappo['12345']);                          // Output: undefined



/*
 * Для перебора for...of Map есть 3 метода:
 *
 * `map.keys()` – возвращает итерируемый объект по ключам,
 * `map.values()` – возвращает итерируемый объект по значениям,
 * `map.entries()` – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for...of.
*/
for (let key of mappo.keys()) {
  console.log(key);                                  // Output: вернулись только .set ключи, [] - не вернулись
}
for (let value of mappo.values()) {
  console.log(value);                                // Output: вернулись только .set значения, [] - не вернулись
}
for (let [key, value] of mappo) {
  console.log(key, value);                           // Output: вернулись только .set ключи и значения [] - не вернулись
}
// Итерация всегда идет в порядке добавления эл-тов



// При создании Map можно вбить в аргумент массив, чтобы сразу объявить в нем ключи
const mappo2 = new Map([['jopa', true], [[1, 2, 3], 'arr123']]);
console.log(mappo2);                                 // Output: Map(2) { 'jopa' => true, [ 1, 2, 3 ] => 'arr123' }

// Чтобы перевести готовый объект в формат [[,], [,]] (entries), удобно пользоваться Object.entries()
const obj = {
  name: 'simple object',
  value: 123,
};
const mappo3 = new Map(Object.entries(obj));
console.log(mappo3);                                 // Output: Map(2) { 'name' => 'simple object', 'value' => 123 }

// Такая же фишка есть для объекта - Object.fromEntries( [[,],[,]] )
// типы привелись к строке + работает и без map.entries() (тк возврат такой же)
const obj2 = Object.fromEntries(mappo2);
console.log(obj2);                                   // Output:{ jopa: true, '1,2,3': 'arr123' }
// ---------------------------------------------------------------------------------------------------------------------

// Set это объект без ключей, в который невозможно записать одно значение два раза
// в Set невозможно записать примитивы, только объекты (!)
/*
* Методы и св-ва Set:
*
* `new Set(iterable)` – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект, то копирует его значения в новый Set.
* `set.add(value)` – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
* `set.delete(value)` – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
* `set.has(value)` – возвращает true, если значение присутствует в множестве, иначе false.
* `set.clear()` – удаляет все имеющиеся значения.
* `set.size` – возвращает количество элементов в множестве.
*/

const setto = new Set('example');
setto.add(10).add({}).add(10).add([1, 2, 3]);
setto[10] = 100;
console.log(setto.delete(10));          // Output: true
console.log(setto);                           // Set(8) { 'e', 'x', 'a', 'm', 'p', 'l', {}, [ 1, 2, 3 ] }
// Можно получить доступ к объекту с помощью [], запись в таком виде будет неявно преобразовывать тип ключа к string
// записанные таким образом эл-ты будут отображаться после .set-элементов и через ':', а не '=>'
// то что записали в `.set()` нельзя вытащить через [], for...of пропускает []-значения

/*
 * Для перебора for...of Set есть 3 метода:
 *
 * `set.keys()` – возвращает итерируемый объект по ключам,
 * `set.values()` – возвращает итерируемый объект по значениям,
 * `set.entries()` – возвращает итерируемый объект по парам вида [значение, значение], у set этот вариант НЕ используется по умолчанию в for...of.
*/
for (let key of setto.keys()) {
  console.log(key);                                  // Output: вернулись только .set ключи, [] - не вернулись
}
for (let value of setto.values()) {
  console.log(value);                                // Output: вернулись только .set значения, [] - не вернулись
}
for (let [key, value] of setto.entries()) {
  console.log(key, value);                           // Output: вернулись только .set ключи и значения [] - не вернулись
}
// Итерация всегда идет в порядке добавления эл-тов
// ---------------------------------------------------------------------------------------------------------------------


// Task 1
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr
function unique(arr) {
  return new Set(arr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // Output: Set(3) { 'Hare', 'Krishna', ':-O' }

// Task 2
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  return new Set(arr.map(e => e.toLowerCase().split('').sort().join('')))
}
console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Task 3
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?          .keys() возвращает итерируемый объект, нужно сделать массив
let map = new Map();

map.set("name", "John").set('jopa', 'popa');

let keys = Array.from(map.keys());

keys.push("more");      // Error: keys.push is not a function
console.log(keys);      // Output: [ 'name', 'jopa', 'more' ]