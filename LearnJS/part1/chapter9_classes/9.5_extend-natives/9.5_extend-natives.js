// https://learn.javascript.ru/extend-natives

// Классы можно наследовать от встроенных функций-конструкторов (Map, Array и т.д)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
const arr1 = new PowerArray(1, 2, 3, 4, 5);

const filteredArr = arr1.filter((value) => value > 3 )
console.log( filteredArr );                                          // Output: PowerArray(2) [ 4, 5 ]
console.log(filteredArr.isEmpty());                                  // Output: false



// Методы, которые создают новые объекты (не мутирующие), под капотом обращаются к функции-конструктору внутри `constructor`
// Благодаря этому новые объекты получают доступ к объявленным в нашем классе методам
console.log(filteredArr.constructor === PowerArray);                 // Output: true



// Можно воспользоваться геттером `[Symbol.species]` для того чтобы вручную указать родительскую функцию-конструктор объектов, возвращенных методами
class Zepa extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const arr2 = new Zepa(10, 20, 30, 40, 50);
console.log(
    arr2.constructor,                               // Output: -Zepa class-
    arr2.isEmpty(),                                 // Output: false
);


const filteredArr2 = arr2.filter((v) => v > 30);
console.log(
    filteredArr2.constructor,                      // Output: -Array native constructor-
    // filteredArr2.isEmpty(),                     // TypeError: filteredArr2.isEmpty is not a function
);


// Классы наследуют статические методы. (!) НО ВСТРОЕННЫЕ классы НЕ наследуют статические методы.
// Это исключение, благодаря которому у Array нет методов Object.

// Важно понимать, что `[Symbol.species]` это не `Array[[Prototype]]`.
// То есть статические методы встроенных классов не наследуются, но экземпляры могут обращаться к методам объекта.