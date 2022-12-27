// https://learn.javascript.ru/function-prototype


// Функция конструктор имеет св-во `prototype`, которое определяет [[Prototype]] экземпляров.
// по умолчанию `prototype` это объект, в котором лежит св-во `constructor` - ссылка на саму функцию-конструктор. (кстати св-во есть у всех функций)
const user = {
  name: 'John',
  age: 15,
};

function User() {              // В конструкторе скрытое св-во prototype = {constructor: User}
  this.message = 'instance of Foo';
}

const user99 = new User();                  // prototype по умолчанию
console.log(user99.__proto__.constructor);  // Output: [Function: User]
console.log(user99.constructor);            // Output: [Function: User]         (не забываем, что если св-ва нет в объекте, оно ищется дальше в прототипе)


User.prototype = user;        // определили прототип для созданных далее экземпляров

const admin = new User();
console.log(admin.__proto__);         // Output: { name: 'John', age: 15 }

User.prototype = null;        // переопределили прототип для созданных далее экземпляров

const guest = new User();
console.log(guest.__proto__);         // Output: [Object: null prototype] {}


// (!) Если мы перепишем объект prototype в конструкторе, то утеряем св-во constructor, поэтому лучше добавлять в prototype св-ва
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit);     // Output: false                Чтобы не терять конструктор - Rabbit.prototype.jumps = true



// Task 1
// Каковы будут результаты выполнения? Почему?
function Rabbit1() { }
Rabbit1.prototype = { eats: true };

var rabbit1 = new Rabbit1();

Rabbit1.prototype = {};

console.log(rabbit1.eats);        // Output: true


// Task 2
// А если код будет такой? (заменена одна строка):
function Rabbit2(name) { }
Rabbit2.prototype = { eats: true };

var rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false; // (*)

console.log(rabbit2.eats);        // Output: false - тк мы не перезаписываем объект, а меняем существующий


// Task 3
// А такой? (заменена одна строка)
function Rabbit3(name) { }
Rabbit3.prototype = { eats: true };

var rabbit3 = new Rabbit3();

delete Rabbit3.prototype.eats; // (*)

console.log(rabbit3.eats);        // Output: undefined


// Task 4
// А если бы в последнем коде вместо строки (*) было delete rabbit.eats?
function Rabbit4(name) { }
Rabbit4.prototype = { eats: true };

var rabbit4 = new Rabbit4();

delete rabbit4.eats; // (*)

console.log(rabbit4.eats);        // Output: true





// Task 6
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.
const obj = {};
let obj2 = new obj.constructor();

// Если у конструктора св-во prototype имеет св-во constructor, то все будет работать, если нет, то нет.
