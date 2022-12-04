// 0. Прочитать http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition-rus/#zamyikanie
// 1. Реализовать счетчик createCounter():
//    (1) на функциональном конструкторе (ООП) и (2) на замыканиях с общим интерфейсом: increment(), decrement(), getValue().
// 2. После, расширьте ваш код сущностью counterBaseValue, которая должна определять на сколько изменяется значение при increment/decrement
//    и которую можно определить при создании и изменить на уже созданном счетчике.
// Старый код использования до расширения должен поддерживаться и после расширения (вызов без аргумента).

// Ответить на вопросы после реализации:
// Какое значение по-умолчанию было выбрано, чтобы поддержать старый код? Почему такое?
// -  '1' - тк самое маленькое работающее положительное значение.
// Какой способ дает большую инкапсуляцию? Почему?
// -  Реализация на замыканиях, тк значения переменных хранятся в функции-родителе, к которой можно получить доступ только через дочернюю функцию.

// Опциональная задача: реализуйте логику расширения counterBaseValue в реализации на ООП с помощью наследования (сделать отдельную функцию и их соединить ее с первоначальной).
// - Выполню, когда познакомлюсь с наследованием.

// === Реализация на замыканиях ===
function createCounter(step = 1) {
  let baseValue = step;
  let count = 0;
  return {
    increment() {count += baseValue; return count},
    decrement() {count -= baseValue; return count},
    getValue() {return count},
    counterBaseValue(step) {baseValue = step},
  };
}

const closureCounter = createCounter(10);
closureCounter.counterBaseValue(5);
console.log(
    closureCounter.getValue(),                      // Output: 0
    closureCounter.increment(),                     // Output: 5
    closureCounter.decrement(),                     // Output: 0
);


// === Реализация на конструкторе ===
function CreateCounter(step = 1) {
  this.baseValue = step;
  this.count = 0;

  this.increment = () => {this.count += this.baseValue; return this.count};
  this.decrement = () => {this.count -= this.baseValue; return this.count};
  this.getValue = () => {return this.count};
  this.counterBaseValue = (step) => {this.baseValue = step};
}

const constructorCounter = new CreateCounter(5);
constructorCounter.counterBaseValue(10);
console.log(
    constructorCounter.getValue(),                  // Output: 0
    constructorCounter.increment(),                 // Output: 10
    constructorCounter.decrement(),                 // Output: 0
);