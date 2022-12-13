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



// тк у стрелочных функций нет this, их нельзя использовать с new
const Constructor1 = () => {
  this.name = 'Lexa';
};
// const lexa = new Constructor1();      // TypeError: Constructor1 is not a constructor



// Эту особенность стрелочной функции можно заменить с помощью bind(), но есть разница:
// bind создает связанную версию функции
// Стрелка ничего не привязывает, у нее просто нет this



// У стрелочной функции нет массива arguments, поэтому она идеально подходит для создания декораторов (оберток):
function decorator1(fn, ms) {
  return function () {                                        // Можно не принимать аргументы - при вызове они попадут в arguments
    setTimeout(() => fn.apply(this, arguments), ms)    // Можно не париться с this - стрелка возьмет this внешней функции
  }
}