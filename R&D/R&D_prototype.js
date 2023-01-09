// Хз где брать упражнения, есть 2 задачки на методы
// https://www.codewars.com/kata/53381a646068efc50100072c/train/javascript  - 5 kyu Function.prototype.clone
// https://www.codewars.com/kata/53c2c3e78d298dddda000460                   - 6 kyu Implementing Array.prototype.groupBy method


// Надо глянуть видосик по прототипам
// Надо пройтись по всей 8 главе

Function.prototype.clone = function () {
  console.log(JSON.stringify(this.prototype));
  return new Function( );
};

//


function sum (a, b) {
  return a + b;
}
console.log(sum(5, 10));  // Output: 15


const sum2 = sum.clone();
console.log(sum2(5, 10));

// где можно нужны примеры и задачки
// где нельзя нужны квизы (можно взять из роадмапа)
// мб лучше по классам
// можно ли создать named class expression? Можно ли вызвать класс без new?
// Код внутри класса всегда с 'use strict' - можно поймать на внимательность
// задачка с конструктором наследника (без супер) (что будет в консоли)
// можно про [[HomeObject]] и `method() {}`, `method: function() {}`
// задачка - к чему адресует super - к самому верхнему родителю или к тому что выше на 1 ур
// (можно задачки на наследование придумать, типы свойств (наследуются ли св-ва? как создать приватное наследуемое св-во?),
// наследуются ли статические св-ва? (тогда почему встроенные статические св-ва не наследуются?), зачем нужно [Symbol.species]? зачем нужно [Symbol.toStringTag]?)
// тонкости наследования у примесей (super [[HomeObject]])
