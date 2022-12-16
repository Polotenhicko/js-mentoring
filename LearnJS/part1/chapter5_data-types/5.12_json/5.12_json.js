// https://learn.javascript.ru/json

// JSON это формат, который используется для преобразования [], {}, string, number, bool, null в строку для отправки по сети
// JSON - JavaScript Object Notation

// Объект в формате JSON поддерживает только двойные кавычки ("") и обязательно заключает в них имена св-в

// В JSON нельзя записать особенности языка js - методы, Symbol, значения undefined, циклические ссылки
let user = {
  sayHi() {
    alert('Hello');
  },
  [Symbol('id')]: 123,
  something: undefined
};
console.log(JSON.stringify(user));      // Output: {} (пустой объект)


// ---------------------------------------------------------------------------------------------------------------------
// `JSON.stringify(value, [replacer, space]?)` - метод для преобразования объектов в JSON.
// replacer - Массив свойств или функция соответствия function(key, value) для исключения ненужных св-в (работает в т.ч на вложенные объекты).
// space - число отступов, для красивого форматирования, можно в виде строки (для исп. без пред. аргумента нужно записать как `JSON.stringify(value, null, space)).
const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
  subObj: {message: 'hello', description: 'it\'s sub object'},
};
let toJson = JSON.stringify(student);

console.log(toJson);                  // Output: {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null,"subObj":{"message":"hello","description":"it's sub object"}}   (string)
console.log(JSON.parse(toJson));      // Output: {name: 'John', age: 30, isAdmin: false, courses: [ 'html', 'css', 'js' ], wife: null, subObj: { message: 'hello', description: "it's sub object" }}  (object)

toJson = JSON.stringify(student, ['name', 'age', 'isAdmin'], '       ');
console.log(toJson);
// Output:
// '{
//     "name": "John",
//     "age": 30,
//     "isAdmin": false
// }'                         (string с 7 пробелами)
console.log(JSON.parse(toJson));      // Output: { name: 'John', age: 30, isAdmin: false }  (object)


// При преобразовании объекта в JSON неявно вызывается метод 'toJSON()' (в прототипе его изначально нет). Работает также как `toString()`.
// Если метода нет, то объект кодируется стандартно, как '{"name": "John","age": 30}'
toJson = JSON.stringify(student, ['subObj', 'message', 'description']);
console.log(toJson);      // Output: '{"subObj":{"message":"hello","description":"it's sub object"}}'

student.subObj.toJSON = function () {
  return this.description;
};
toJson = JSON.stringify(student, ['subObj', 'message', 'description']);
console.log(toJson);      // Output: '{"name": "John","subObj": "it's sub object"}'



// ---------------------------------------------------------------------------------------------------------------------
// `JSON.parse(str, [reviver]?)` - метод для преобразования JSON обратно в объект.
// `reviver` - функция, которая будет восстанавливать объекты, преобразованные с помощью `toJSON()` метода (напр. Date)
console.log(JSON.parse('{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'));
// Output: { title: 'Conference', date: '2017-11-30T12:00:00.000Z' }  (typeof date => string)

console.log(JSON.parse('{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}', (key, value) => key === 'date' ? new Date(value) : value));
// Output: { title: 'Conference', date: 2017-11-30T12:00:00.000Z }  (typeof date => object)



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
const user1 = {
  name: 'Василий Иванович',
  age: 35
};
const stringifiedObj = JSON.stringify(user1);
console.log(stringifiedObj);                 // Output: '{"name":"Василий Иванович","age":35}'
console.log(JSON.parse(stringifiedObj));     // Output: { name: 'Василий Иванович', age: 35 }


// Task 2
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
const room = {
  number: 23,
};
const meetup = {
  title: 'Совещание',
  occupiedBy: [{name: 'Иванов'}, {name: 'Петров'}],
  place: room,
};
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;


const objCache = new WeakSet;

console.log(JSON.stringify(meetup, (key, value) => {
      if (objCache.has(value)) {
        return '[Circular ref]';
      }
      if (typeof value === 'object') {
        objCache.add(value);
      }
      return value;
    })
);

