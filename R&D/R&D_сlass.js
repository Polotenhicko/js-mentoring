// Классы нужны, чтобы создавать экземпляры объектов.
// Синтаксис классов (объявление, конструктор, вызов)
// По сути классы это функции-конструкторы+ (создают объекты, наследуются,
// имеют св-во prototype, которое становится прототипом экземпляра) class Name {} console.log(new Name().constructor);
// (+ это не сахар)
// У классов есть несколько типов полей (эмуляция protected)
// Встроенные конструкторы
// Когда мы создаем методы, они `enumerable: false` + код внутри 'use strict' + получают скрытое св-во [[HomeObject]]
// св-во [[HomeObject]] (только в синтаксисе методов)
// Классы могут наследоваться (extends)
// Наследование конструктора и super
// [Symbol.species] - скрытое св-во, к которому обращаются функции, создающие новые объекты

// Вопросы я составлял сам, так что если заметите ошибку - давайте обсудим.
//
//     1. Классы это синтаксический сахар?
//      да
//      нет
//     (Что значит "синтаксический сахар"?)
// Ответ: нет, тк классы привносят новый функционал - у созданных с помощью ключевого слова class есть скрытое св-во [[isClassConstructor]]
// + код внутри метода всегда с 'use strict' + методы класса enumerable: false


//     2. Сколько есть видов полей в классах? (по документации, не считая костылей)
//      2
//      3
//      4
//      5
// Ответ: 3 - Статические, Приватные, Публичные (защищенные эмулируются геттерами сеттерами)


//      3. Что будет в консоли?
// class Class {
//   method() {console.log(this)}
// }
// var zepa = Class();
// zepa.method();
// Ответ: TypeError: Class cannot be invoked without 'new'


//     3. Что будет в консоли?
//      class Class {
//        static boobs = '(.)(.)'
//
//        sayBoobs() {
//          console.log(this.boobs);
//        }
//      }
//
//      new Class().sayBoobs();
// Ответ: undefined - из экземпляра нельзя обращаться к статическим свойствам.


//     4. Что будет в консоли?
//      class Mama {
//        method() {console.log(this, 'mama')}
//      }
//
//      class Daughter extends Mama {
//        method() {super.method(); console.log(this, 'daughter')}
//
//      }
//
//      const daughter = new Daughter();
//      const mama = new Mama();
//      daughter.method();
//      mama.method();
// Ответ: Daughter {} mama   Daughter {} daughter   Mama {} mama
// 1) this возвращает объект перед точкой
// 2) При объявлении методов в классе, им присваивается скрытое св-во `[[HomeObject]]`, которое всегда ссылается на объект, в котором был объявлен метод.
// `super` превращается в [[HomeObject]] метода.


//      5. Что будет в консоли? (совместно с предыдущей задачей)
//       Mama.method2 = function () {
//         console.log('added method');
//       }
//       mama.method2();
// Ответ: TypeError: mama.method2 is not a function -


//      6. Что будет в консоли
//       Какое объявление класса не будет работать в данном контексте?
//        // 1
//        class Class1 {}
//
//        // 2
//        const Class2 = class Class {}
//
//        // 3
//        const Class4 = new Class()
//
//        // 4
//        const Class3 = class {}
// Ответ: 3 - с помощью new мы создаем экземпляр класса `Class`, но он нигде не объявляется


//      7. Что будет в консоли
//        class OctalClass {
//          static octal = 012
//
//          method() {
//            var octal = 023;
//            console.log(octal);
//          }
//        }
//        new OctalClass().method();
// Ответ: SyntaxError: Octal literals are not allowed in strict mode. - в методах класса всегда стрикт мод, это тонкость синтаксиса


//      8. Что будет в консоли
//        class Father {
//          constructor(name) {
//            this.name = name;
//          }
//        }
//
//        class Son extends Father {
//          constructor(age) {
//            this.age = age;
//          }
//        }
//
//        console.log(new Son(10, 'john').age);
// Ответ: ReferenceError: Must call super constructor in derived class before accessing 'this' - у наследников в конструктор не создает экземпляр, поэтому нужно обращаться к super.


//      8. Что будет в консоли
//        class First {
//          method() {console.log('First')}
//        }
//
//        class Second extends First {
//          method() {console.log('Second')}
//        }
//
//        class Third extends Second {
//          method() {super.method(); console.log('Third')}
//        }
//
//        new Third().method();
// Ответ: 'First'   'Second' - во втором классе происходит 'затенение' метода первого класса
// super смотрит на [[HomeObject]] ближайшего родительского метода и принимает значение [[HomeObject]]


//      9. Что будет в консоли
//        (можно задачки на наследование придумать, типы свойств (наследуются ли св-ва? как создать приватное наследуемое св-во?),
//        class Beat {
//          static drums = 'Pts-Chts-Pts-Chts'
//          #synth = 'wob-wob-wob-wob'
//          _vocal = 'la-la-la-la'
//          get vocal() {return this._vocal}
//          bass = 'bup-bup-bup-bup'
//        }
//
//        class Verse extends Beat {
//          play1() {
//            for (let verseKey in this) {
//              console.log(verseKey);
//            }
//          }
//          play2() {console.log(Verse.drums)}
//        }
//
//        new Verse().play1()
//        new Verse().play2()
// Ответ: _vocal    bass    Pts-Chts-Pts-Chts   - только приватные и статические св-ва не наследуются (но статические доступны извне класса)


//      10. Что будет в консоли
//        class BasicArray extends Object {
//          static length = 0;
//        }
//
//        console.log(
//            Object.is(10, 10),
//            BasicArray.is(10, 10),
//            Array.is(10, 10),
//        );
// Ответ: true    true     TypeError: Array.is is not a function   - статические св-ва между встроенными конструкторами не наследуются


     // 11. Что будет в консоли
     //   class Zepa extends Array {
     //
     //     static get [Symbol.species]() {
     //       return Number;
     //     }
     //   }
//
//        const arr = new Zepa(10, 20, 30, 40, 50);
//        console.log(arr.constructor);
//
//        const filteredArr = arr.filter((value) => value > 30)
//        console.log(filteredArr.constructor);
// Ответ: -Zepa class-    -Number native constructor-


//      12. Что будет в консоли
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const sayMixin = {
//   say(str) {
//     console.log(`${str} ${this.name}`);
//   },
// };
// // Object.assign(User.prototype, sayMixin);
//
// const hiByeMixin = {
//   sayHi() {
//     super.say('Hi');
//   },
//   sayBye: function () {
//     super.say('Bye');
//   }
// };
//
// Object.setPrototypeOf(hiByeMixin, sayMixin)
//
//
// Object.assign(User.prototype, hiByeMixin);
// new User('Anton').sayHi();
// new User('Anton').sayBye();
// Ответ: Hi Anton    SyntaxError: super   - в функциях нет [[HomeObject]]. Он есть только в методах. Их синтаксис различается.
