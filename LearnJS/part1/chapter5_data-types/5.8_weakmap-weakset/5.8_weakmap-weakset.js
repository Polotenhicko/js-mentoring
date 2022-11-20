// https://learn.javascript.ru/weakmap-weakset

// WeakMap используется для хранения временных данных - пока существует объект
// и для кеширования - запоминания результата, чтобы не выполнять выражение больше одного раза
const cacheWeakMap = new WeakMap;
function process(obj) {
  if (!cacheWeakMap.has(obj)) {
    const cache = /* вычисления результата */ obj;
    cacheWeakMap.set(obj, cache);
  }
  return cacheWeakMap.get(obj);
}

// Ключи WeakMap не могут быть примитивами
// weakMappo.set('stringKey', 'value');            // TypeError

// Cсылки WeakMap на объекты НЕ дают достижимость этим объектам, при потере 'сильной' ссылки свойство из WeakMap удаляется
const weakMappo = new WeakMap;
let exampleObj = {};
weakMappo.set(exampleObj, 'Example value');
exampleObj = null;
console.log(weakMappo.get(exampleObj));           // Output: undefined


// WeakMap не может дать доступ ко всем объектам одновременно из-за оптимизаций работы сборщика мусора (он не удаляет объекты сразу, а может копить)
// у WeakMap нет методов `.keys()` `.value()` `.entries()` для `for...of`
/*
* Методы и свойства WeakMap:
*
* `new WeakMap()`           – создаёт коллекцию.
* `weakMap.set(key, value)` – записывает по ключу key значение value.
* `weakMap.get(key)`        – возвращает значение по ключу или undefined, если ключ key отсутствует.
* `weakMap.has(key)`        – возвращает true, если ключ key присутствует в коллекции, иначе false.
* `weakMap.delete(key)`     – удаляет элемент по ключу key.
*/
// ---------------------------------------------------------------------------------------------------------------------

// WeakSet используется для создания самоочищающихся списков по условиям
const weakSetto = new WeakSet();
const john = { name: "John" };
const pete = { name: "Pete" };
const mary = { name: "Mary" };

weakSetto.add(john).add(pete).add(john);
console.log(weakSetto.has(john));       // Output: true
console.log(weakSetto.has(pete));       // Output: true
console.log(weakSetto.has(mary));       // Output: false

// WeakSet не может содержать неуникальные значения + может хранить только объекты + удаляет все недостижимые объекты + его нельзя итерировать
/*
* Методы и свойства WeakMap:
*
* `new WeakMap()`           – создаёт коллекцию.
* `weakMap.set(key, value)` – записывает по ключу key значение value.
* `weakMap.get(key)`        – возвращает значение по ключу или undefined, если ключ key отсутствует.
* `weakMap.has(key)`        – возвращает true, если ключ key присутствует в коллекции, иначе false.
* `weakMap.delete(key)`     – удаляет элемент по ключу key.
*/
// ---------------------------------------------------------------------------------------------------------------------

// Task 1
// Какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?»
  // P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
  // P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства.
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const messagesWeakSet = new WeakSet();

messages.forEach(msg => messagesWeakSet.add(msg));
console.log(messagesWeakSet.has(messages[0]));        // Output: true
delete messages[0];
console.log(messagesWeakSet.has(messages[0]));        // Output: false


// Task 2
// Какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
// Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения
let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
const messagesWeakMap = new WeakMap;

messages2.forEach(msg => messagesWeakMap.set(msg, new Date().toLocaleTimeString()));

console.log(messagesWeakMap.get(messages2[1]));        // Output: 08:30:07
delete messages2[1];
console.log(messagesWeakMap.get(messages2[1]));        // Output: undefined
