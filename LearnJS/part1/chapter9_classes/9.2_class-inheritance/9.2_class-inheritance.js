// https://learn.javascript.ru/9.2_class-inheritance.js

// Классы могут быть созданы на базе других классов (наследованы) - с помощью `extends`
// То есть у экземпляров, созданных наследником будет доступ к методам и св-вам родительского класса
// Под капотом `extends` устанавливает `[[Prototype]]` у наследника на `родитель.prototype`
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
// У стрелочных функций нет своего `super`
class WhiteRabbit extends Rabbit {
  hide() {
    super.hide();
    console.log('...в снегу');
  }
}

const snowflake = new WhiteRabbit('snowflake');
snowflake.hide();                               // Output: 'snowflake Прячется' '...в снегу'



// Если у класса-наследника нет конструктора, то неявно создается холостой конструктор, который вызывает конструктор родителя.
class Wolf extends Animal {
  constructor(...args) {
    super(...args);
  }
}

// В отличие от конструктора класса-родителя, конструктор класса-наследника не создает объектов. То есть его `this` не ведет на экземпляр.
// Поэтому в конструкторе наследника необходимо обращаться к `super(...args)` перед тем как обращаться к `this`.
class Bear extends Animal {
  constructor(...args) {
    // this.mass = args[1];    ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(...args);
  }
}
new Bear('Browny');

// Конструктор всегда обращается к св-вам класса, в котором он был объявлен. То есть можно потенциально перепутать св-ва наследника и родителя.
class Jedi {
  name = 'Obi-Van';
  constructor() {
    console.log(this.name);
  }
}

class Padavan extends Jedi{
  name = 'Luke';
  constructor() {
    super();
    console.log(this.name);
  }
}
new Padavan();      // Output: Obi-Van     Luke



// При объявлении методов в классе, им присваивается скрытое св-во `[[HomeObject]]`, которое всегда ссылается на объект, в котором был объявлен метод.
// С помощью этого св-ва `super` обращается к родителю
// метод создается только с синтаксисом - `method() {}`,       `method: function() {}` - не работает, тк не создает св-во `[[HomeObject]]`
const Telephone = {
  sayHi() {
    console.log('я животное');
  }
};
const Buttons = {
  __proto__: Telephone,
  sayHi() {
    super.sayHi();
  }
};
const Computer = {
  sayHi() {
    console.log('я растение');
  }
};
const Keyboard = {
  __proto__: Computer,
  sayHi : Buttons.sayHi,
};
Keyboard.sayHi();           // Output: 'я животное'               (метод скопировался, но вызывает метод Telephone)



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
class Animal1 {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit1 extends Animal1 {
  constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit1 = new Rabbit1("Белый кролик"); // Error: this is not defined        (конструктор наследника сначала должен вызывать конструктор родителя)
console.log(rabbit1.name);                       // Output: 'Белый кролик'



// Task 2
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками».
// Установите значение в 1000 (1 секунда) по умолчанию.
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


class ExtendedClock extends ClassClock {

  constructor({template}, precision = 1000) {
    super({template});
    this.precision = precision;
  }

  start = () => {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }

}
new ExtendedClock({template: 'h:m:s'}, 5000).start();