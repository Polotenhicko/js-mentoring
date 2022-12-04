// Task 1
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/javascript
// 5 kyu A Chain adding function

const add = function (n) {

  const addMore = function (x) {
    return add(n + x);
  };

  addMore.valueOf = function() {
    return n;
  };

  return addMore;
};



// Task 2
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
    constructorCounter.getValue(),                      // Output: 0
    constructorCounter.increment(),                     // Output: 10
    constructorCounter.decrement(),                     // Output: 0
);



// Task 3
// Реализуйте с помощью замыкания и методов преобразования объектов в примитивы логику, чтобы для объекта с этой логикой было:
//  obj > obj \\ true

// Ответить на вопросы после реализации:
// Можно ли сделать также, но без замыкания? Например, хранить данные в теле объекта и обращаться к ним через this? Попробуйте сделать.
// Опционально: попробуйте сделать так чтобы:
//  obj > obj => true
//  obj > obj => false
//  obj > obj => true
//  obj > obj => false
// То есть, чтобы один раз было false, а потом true, а потом опять false.

function customComparison () {
  let switcher = 0;
  return {
    valueOf() {switcher++; return switcher % 4 ? 1 : -1}
  }
}
const obj = customComparison();
console.log(
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    );


function CustomComparison () {
  this.switcher = 0;
  this.valueOf = function () {this.switcher++; return this.switcher % 4 ? 1 : -1}
}
const obj2 = new CustomComparison();
console.log(
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
);
console.log('------------------------\n\n\n');




// Task 4
// Даны объекты:
const obj4 = {
  testProp: 123,
  getData() {
    console.log(this.testProp);
  }
}

const otherObj = {
  testProp: 456,
}


// Нужно создать функцию delayedMemoCall, чтобы она удовлетворяла вызовам:
const delayer = delayedMemoCall(3000);

delayer(obj4.getData, obj4);      // 123 after 3 seconds
delayer(obj4.getData, otherObj);  // 456 after 3 seconds

// must memorize value data when called
delayer(obj4.getData, otherObj); // 456 after 3 seconds

otherObj.testProp = 789;        // mutation affects only next calls

delayer(obj4.getData, otherObj); // 789 after 3 seconds

delayer.setDelay(5000);         // setting delay affects only next calls

delayer(obj4.getData, otherObj); // 789 after 5 seconds



function delayedMemoCall (msec) {

  return function func(fn, obj) {
    const buffer = Object.fromEntries(Object.entries(obj));

    func.setDelay = function (newMsec) {
      msec = newMsec;
    };

    setTimeout(() => fn.apply(buffer), msec );
  }
}