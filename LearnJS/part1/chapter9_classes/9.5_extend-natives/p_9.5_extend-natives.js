// Task 1
// Что будет в консоли
class BasicObj extends Object {
  static length = 0;
}
console.log(
    Object.is(10, 10),
    BasicObj.is(10, 10),
    Array.is(10, 10),
);
// Ответ: true    true     TypeError: Array.is is not a function   - методы между встроенными конструкторами не наследуются, но между кастомными наследуются.


// Task 2
// 11. Что будет в консоли
  class Zepa extends Array {

    static get [Symbol.species]() {
      return Number;
    }
  }

const arr = new Zepa(10, 20, 30, 40, 50);
console.log(arr.constructor);
const filteredArr = arr.filter((value) => value > 30)
console.log(filteredArr.constructor);
// Ответ: -Zepa class-    -Number native constructor-     - скрытое св-во [Symbol.species] определяет базу для создания нового объекта, когда мы пользуемся не мутирующими методами