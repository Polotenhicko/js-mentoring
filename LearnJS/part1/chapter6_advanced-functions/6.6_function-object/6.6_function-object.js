// https://learn.javascript.ru/function-object

// Функции можно не только вызывать, но и добавлять/изменять их св-ва, получать к ним доступ, как к объектам.



// Св-во функции 'name' содержит имя функции. Имя присваивается из контекста.
const foo = function () {return 'gaga'};
console.log(foo.name);            // Output: 'foo'
const fooArrow = () => 'arrow gaga';
console.log(fooArrow.name);       // Output: 'fooArrow'

// Методы объекта также имеют имена
const obj = {
  counter: 10000,
  methodExample() {
    return 'it\'s a method';
  },
};
console.log(obj.methodExample.name);       // Output: 'methodExample'



// Св-во 'length' содержит кол-во параметров функции при объявлении (rest не считается)
const foo2 = function (a, b, c, d, ...rest) {
  return a + b + c + d + rest;
};
console.log(foo2.length);       // Output: 4
console.log(foo.length);        // Output: 0



// Можно добавлять свои св-ва (св-ва НЕ есть переменная)
function foo3 () {
  console.log('foo3 called');
  if (foo3.counter) {
    foo3.counter++;
  } else {
    foo3.counter = 1;
  }
}
foo3();
foo3();
foo3();
console.log(`total foo3 calls: ${foo3.counter}`);      // Output: 'total foo3 calls: 3'


// Если поменять функции контекст, то св-ва не передадутся
const obj3 = {
  counter: 9999,
};
let foo6 = foo3;
console.log(foo6.counter);              // Output: 3              - Все норм, тут мы не меняем контекст, ссылка та же

foo6 = foo6.bind(obj3);
console.log(foo6.counter);              // Output: undefined      - Поменяли контекст - св-ва обнулились (и это не св-во объекта)

foo6.counter = 1000;
console.log(foo6.counter);              // Output: 1000           - Присвоили новое значение св-ву



// `Named Function Expression (NFE)` - синтаксис для динамического 'ссылания' функции на себя (this в мире функций). Не работает с Function Declaration.
const foo4 = function func(name) {
  return name ? `name is: ${name}` : func('guest');
}
const foo5 = foo4;
console.log(foo5());      // Output: 'name is: guest'



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Реализуйте makeCounter(), создающий функцию со счетчиком вызова так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
function makeCounter () {
  return function counter() {
    console.log('counter called');

    if (counter.value) {
      counter.value++
    } else {
      counter.value = 1;
    }

    counter.set = function (value) {
      counter.value = value;
    };

    counter.decrease = function () {
      counter.value--;
    };
  }
}
const counter = makeCounter();
counter();
counter();
counter();
counter();
console.log(`total counter calls: ${counter.value}`);      // Output: 'total counter calls: 4'



// Task 2
// Напишите функцию sum, которая бы работала следующим образом:
console.log(
    +sum(1)(2),                           // Output: 3
    +sum(1)(2)(3),                     // Output: 6
    +sum(5)(-1)(2),                    // Output: 6
    +sum(6)(-1)(-2)(-3),            // Output: 0
    +sum(0)(1)(2)(3)(4)(5),   // Output: 15
);

function sum (n) {

  const addMore = function (x) {
    return sum(n + x);
  };

  addMore.valueOf = function() {
    return n;
  };

  return addMore;
}