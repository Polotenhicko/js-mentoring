// https://learn.javascript.ru/instanceof

// `instanceof` проверяет, принадлежит ли объект классу или его наследникам.
class Class1 {}
class Class2 extends Class1 {}

const obj = new Class2();
console.log(obj instanceof Class1);                           // Output: true
console.log(obj instanceof Class2);                           // Output: true


// Также `instanceof` работает с функциями-конструкторами
function Constructor1() {}
console.log(new Constructor1() instanceof Constructor1);      // Output: true


// Также работает для встроенных классов
const arr1 = [1, 2, 3];
console.log(arr1 instanceof Array);                           // Output: true
console.log(arr1 instanceof Object);                          // Output: true  (Array наследник Object)



// `instanceof` проверяет принадлежность, обращаясь цепочке прототипов.
// Под капотом работает так:
// 1. (если он есть) обращается к статическому методу `Symbol.hasInstance`, передавая аргумент интересующего объекта. Возвращает true или false
// 2. иначе проверяет равен ли Class.prototype одному из прототипов в цепочке объекта



// Метод `objA.isPrototypeOf(objB)` - проверяет есть ли objA в прототипной цепочке objB
console.log(Class1.isPrototypeOf(Class2));                    // Output: true
console.log(obj.isPrototypeOf(arr1));                         // Output: false



// У большей части объектов есть св-во `[Symbol.toStringTag]`, которое определяет результат метода `toString`
// Если мы хотим вернуть конкретный тип вместо проверки, можно использовать `{}.toString.call()` (позаимствовать из прототипа объекта)
const cat = {};
const dog = [];
const ape = { [Symbol.toStringTag]: 'Ape'}

console.log(
    {}.toString.call(cat),                                    // Output: '[object Object]'
    {}.toString.call(dog),                                    // Output: '[object Array]'
    {}.toString.call(ape),                                    // Output: '[object Ape]'
);



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B );     // Output: true      - Потому что у экземпляров A и B одинаковые прототипы.