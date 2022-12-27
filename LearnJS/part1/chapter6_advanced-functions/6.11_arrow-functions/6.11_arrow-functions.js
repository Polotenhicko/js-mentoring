// https://learn.javascript.ru/arrow-functions

// У стрелочных функций нет this - контекст берется снаружи функции. Это удобно, для создания вложенных функций в методе, например
obj1 = {
  title: 'Mr.',
  names: ['John', 'Petr', 'Sasha'],

  method() {
    this.names.forEach(n => console.log(this.title + n))
  }
};
obj1.method();    // Output: Mr.John   Mr.Petr   Mr.Sasha

// Эту особенность стрелочной функции можно заменить с помощью bind(), но есть разница:
// bind создает связанную версию функции
// Стрелка ничего не привязывает, у нее просто нет this



// тк у стрелочных функций нет this, их нельзя использовать с new
const Constructor1 = () => {
  this.name = 'Lexa';
};
// const lexa = new Constructor1();      // TypeError: Constructor1 is not a constructor



// У стрелочной функции нет массива arguments, поэтому она идеально подходит для создания декораторов (оберток):
function decorator1(fn, ms) {
  return function () {                                        // Можно не принимать аргументы - при вызове они попадут в arguments
    setTimeout(() => fn.apply(this, arguments), ms)    // Можно не париться с this - стрелка возьмет this внешней функции
  }
}



// У стрелочной функции нет `super` - она обращается к super функции на уровень выше.
class Example1 {
  method() {
    console.log('test');
  }
}
class Example2 extends Example1 {
  method2() {
    return () => {super.method()}
  }
}
new Example2().method2()()          // Output: 'test'    - работает благодаря тому, что arrow обращается к super у функции выше