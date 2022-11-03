// https://learn.javascript.ru/primitives-methods

// В момент обращения к свойству(методу) примитива, создаётся специальный объект-обертка, который знает значение примитива и имеет методы.
  // После возврата новой строки обертка удаляется.

// Конструкторы(обертки) `String()/Number()/Boolean()` предназначены только для внутреннего пользования, использовать с `new` не рекомендуется,
  // тк может возникнуть путаница с примитивными типами и объектом, зато можно исп. для приведения типов
const example = new Number(0)
console.log(typeof example, !!example, !!0)   // Output: 'object' true false

// null/undefined не имеют методов
console.log(null.test);    // Output: error

// Task 1
let str = "Привет";
str.test = 5;
console.log(str.test);        // Output: undefined, тк переменной присваивается св-во, но потом обертка удаляется
                                // если включен 'use strict', то выдаст ошибку, тк нельзя перезаписывать св-ва обертки