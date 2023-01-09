// https://learn.javascript.ru/native-prototypes

// (!) Изменение [[Prototype]] объекта обширно влияет на производительность кода.
// Вместо этого лучше создать объект с нужным [[Prototype]] через `Object.create(prototype, ...props?)`


// Когда мы создаем объект, его [[Prototype]] ссылается на конструктор - встроенный прототип, тк он лежит в Object.prototype
const obj = {};
console.log(obj.__proto__);                       // Output: [Object: null prototype] {}    (встроенный объект Object)
console.log(obj.__proto__ === Object.prototype);  // Output: true



// Создание любого типа данных происходит через встроенный прототип этого типа (конструктор).
//         null
//           |
//        Object
//         / |  \
//        /  |   \
//      /    |     \
// Array  Function  Number
const arr = [];
console.log(arr.__proto__);             // Output: Object(0) []                   (встроенный прототип Array)
console.log(arr.__proto__.__proto__);   // Output: [Object: null prototype] {}    (встроенный прототип Object)



// Когда мы обращаемся к св-вам примитивов, на один шаг примитив оборачивается во встроенный прототип и возвращает св-во.
const str = 'Olala';
console.log(str.charAt(4));             // Output: 'a'
console.log(str.__proto__);             // Output: {}                             (встроенный прототип String)


// null и undefined не имеют прототипов и св-в.
// console.log(null.__proto__);         // TypeError: Cannot read properties of null (reading '__proto__')
// console.log(undefined.__proto__);    // TypeError: Cannot read properties of undefined (reading '__proto__')



// Возможно изменять и переписывать встроенные прототипы, из-за риска КОНФЛИКТОВ рекомендуется делать это только для полифилов.
String.prototype.custom = function () {
  // some new method
}


// Зная путь к конкретному методу, можно заимствовать его на любой тип
const obj2 = {
  0: 'Hello',
  1: 'world',
  length: 2,
};
obj2.join = Array.prototype.join;
console.log(obj2.join(' '));         // Output: 'Hello world'

obj2.__proto__ = Array.prototype;
console.log(obj2.fill(6));                   // Array { '0': 6, '1': 6, length: 2, join: [Function: join] }


// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
Function.prototype.defer = function (ms) {
  return setTimeout(this, ms);
};
function f1() {
  console.log("Hello!");
}

f1.defer(1000);  // Output 'Hello!' (after 1 sec)


// Task 2
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Function.prototype.defer = function (ms) {
  return (a, b) => {
    return setTimeout(this, ms, a, b);
  };
};

function f2(a, b) {
  console.log( a + b );
}

f2.defer(1000)(1, 2);   // Output 3 (after 1 sec)
