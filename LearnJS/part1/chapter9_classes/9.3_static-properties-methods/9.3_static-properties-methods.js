// https://learn.javascript.ru/static-properties-methods

// Статические св-ва и методы принадлежат не экземплярам класса, а непосредственно его концепции (конструктору)
// Используются для инкапсуляции логики класса (доступ к статическому методу можно получить только изнутри класса)
// Помимо методов можно присваивать статические св-ва
class User {
  static staticMethod1() {                      // Объявление статического св-ва то же самое, что и присвоение св-ва к классу
    console.log('this is static method');
  }
}
User.basicMethod2 = function () {console.log('this is basic method 2')};                         // присвоение св-ва к классу

User.basicMethod2();      // Output: 'this is basic method 2'
User.staticMethod1();     // Output: 'this is basic method'



// Статические св-ва и методы наследуются
class Jopa extends User {}

Jopa.basicMethod2();      // Output: 'this is basic method 2'
Jopa.staticMethod1();     // Output: 'this is basic method'



// Task 1
// ---------------------------------------------------------------------------------------------------------------------
// Что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка         - в конструкторе не вызывался super()
// Разница между "class Rabbit extends Object" и "class Rabbit" в том, что прототип первого - объект, а второго - функция