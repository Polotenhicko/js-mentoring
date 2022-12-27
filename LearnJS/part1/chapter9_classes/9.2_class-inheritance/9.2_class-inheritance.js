// https://learn.javascript.ru/9.2_class-inheritance.js

// Классы могут быть созданы на базе других классов (наследованы) - с помощью `extends`
// То есть у экземпляров, созданных наследником будет доступ к методам и св-вам родительского класса
// Под капотом `extends` устанавливает [[Prototype]] у Rabbit на Animal.prototype
class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(this.name, 'Прячется');
  }
}

const eeyore = new Rabbit('Eeyore');
eeyore.hide();                                  // Output: 'Eeyore Прячется'



// Можно применять `extends` к любому выражению:
function foo (phrase) {
  return class {                                // функция возвращает родительский класс
    sayPhrase() {console.log(phrase);}
  }
}
class Example extends foo('Привет') {}

new Example().sayPhrase();                      // Output: 'Привет'



// У классов есть динамическая ссылка `super`. Ее можно применять только внутри класса. Она адресует к родительскому классу на уровень выше.
// С ее помощью можно обращаться к методам или св-вам родительского класса напрямую (например, когда класс-наследник имеет свой метод или св-во с таким же именем)
// У стрелочных функций нет `super`
class WhiteRabbit extends Rabbit {
  hide() {
    super.hide();
    console.log('...в снегу');
  }
}

const snowflake = new WhiteRabbit('snowflake');
snowflake.hide();                               // Output: 'snowflake Прячется' '...в снегу'



//