// https://learn.javascript.ru/map-set

// `Map` - Это объект, в котором можно использовать ключи любого типа
const mappo = new Map();
console.log(mappo);      // Output: Map(0) {}

/*
* Методы и свойства Map:
*
* `new Map()`           – создаёт коллекцию.
* `map.set(key, value)` – записывает по ключу key значение value.
* `map.get(key)`        – возвращает значение по ключу или undefined, если ключ key отсутствует.
* `map.has(key)`        – возвращает true, если ключ key присутствует в коллекции, иначе false.
* `map.delete(key)`     – удаляет элемент по ключу key.
* `map.clear()`         – очищает коллекцию от всех элементов.
* `map.size`            – возвращает текущее количество элементов.
*/
mappo.set(12345, 'numKey');
mappo.set('12345', 'strKey');
mappo.set(null, 'nullKey');
mappo.set(undefined, 'undefinedKey');
mappo.set(Symbol.for('symbol'), 'symKey');

console.log(mappo);                                   // Output: Map(5) { 12345 => 'numKey',  'string' => 'strKey',  null => 'nullKey',  undefined => 'undefinedKey',  Symbol(symbol) => 'symKey' }
console.log(mappo.size);                              // Output:
console.log(mappo.get(12345));                        // Output:
console.log(mappo.get('12345'));                      // Output:
console.log(mappo.get(null));                         // Output:
console.log(mappo.get(undefined));                    // Output:
console.log(mappo.get(Symbol.for('symbol')));     // Output:
console.log(mappo.get('empty'));                      // Output:

// Можно получить доступ к объекту с помощью map[], но это позволит обратиться только к string и symbol типу ключа
// Запись в таком виде будет неявно преобразовывать тип ключа к string
mappo[[]] = 'nnuullll';
mappo[null] = 'null';
mappo[{}] = 'nnnuuullllll';
console.log(mappo);
console.log(mappo['12345']);




mappo.set([], 'arrayKey');
mappo.set({}, 'objKey');
mappo.set([1, 2, 3], 'objKey');
console.log(mappo.has([]));
console.log(mappo.has([1, 2, 3]));
console.log(mappo.get({}));