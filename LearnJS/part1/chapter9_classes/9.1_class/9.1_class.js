// https://learn.javascript.ru/class


// Класс это синтаксис, который позволяет создать концепцию для объектов, чтобы штамповать по ней экземпляры. (по аналогии с `new function`)
class User {

  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}
const user = new User('Adam');

user.sayName();                         // Output: 'Adam'


// В классе присутствует конструктор, методы и св-ва.
// Конструктор замещает функцию-конструктор (присваивает экземпляру св-ва, методы и логику)
// Методы добавляются в User.prototype (методы не разделяются запятой)
// Св-ва добавляются непосредственно к экземпляру


// Синтаксический сахар - синтаксис для улучшения читаемости кода, не делающий ничего нового
// Классы это не синтаксический сахар, тк
// 1) Классы нельзя вызвать без `new`.
// 2) У созданных с помощью `class` функций есть скрытое св-во `[[IsClassConstructor]]: true`.
// 3) Методы класса становятся неперечислимыми (enumerable: false для всех методов в `prototype
// 4) Код внутри класса всегда с 'use strict'



// Class Expression - как и функции, класс можно присвоить переменной.
// Named Class Expression также возможен. (по аналогии с Named Function Expression дает возможность ссылаться на эту функцию)
const Guest = class {           // Class Expression
  name = 'Guest';
  sayHi() {
    console.log('Привет');
  }
};

new Guest().sayHi();      // Output: 'Привет'


const Admin = class MyClass {   // Named class Expression
  name = 'Admin';
  sayHi() {
    console.log(MyClass);
  }
}

new Admin().sayHi();      // Output: [class MyClass]



// Функция может возвращать (return) класс. То есть можно создавать классы по запросу.
function makeClass(phrase) {
  return class  {
    sayPhrase() {
      console.log(phrase);
    }
  }
}

const lolClass = makeClass('lol');
new lolClass().sayPhrase();                 // Output: 'lol'



// В класс можно записывать геттеры и сеттеры - как в объект
class Example {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      console.log('name too short');
      return null;
    }
    this._name = value;
  }
}
let example = new Example('Boba');
console.log(example.name);                  // Output: 'Boba'

example = new Example('1');           // Output: 'name too short'



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();


// Clock на классах:
class ClassClock {
  constructor({template}) {
    this.template = template;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) {hours = '0' + hours;}

    let mins = date.getMinutes();
    if (mins < 10) {mins = '0' + mins;}

    let secs = date.getSeconds();
    if (secs < 10) {secs = '0' + secs;}

    let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
  }

  stop() {clearInterval(this.timer)}

  start = () => {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

let classClock = new ClassClock({template: 'h:m:s'});
classClock.start();