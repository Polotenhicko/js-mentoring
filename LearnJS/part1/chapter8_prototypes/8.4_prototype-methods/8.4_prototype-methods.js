// https://learn.javascript.ru/prototype-methods

// (!) Изменение [[Prototype]] объекта обширно влияет на производительность кода.
// Вместо этого лучше создать объект с нужным [[Prototype]] через `Object.create(prototype, ...props?)`


// __proto__ - устаревший синтаксис. Сейчас для работы с прототипом существуют методы:
/*
 * Методы для работы с прототипом
 *
 * Object.create(proto, {descriptors}?)     - Создает объект с прототипом proto и дескрипторами
 * Object.getPrototypeOf(obj)               - Возвращает [[Prototype]] объекта obj
 * Object.setPrototypeOf(obj, proto)        - Устанавливает proto как [[Prototype]] объекта obj
 */


const o = Object.create(Object.prototype, {foo: {value: 'zepa', writable: true, configurable: true}, bar: {configurable: false, get() {return this.foo} } });
console.log(o.bar);

const obj1 = {};
console.log(Object.getPrototypeOf(obj1));     // Output: Object.prototype

Object.setPrototypeOf(obj1, Array.prototype);
console.log(Object.getPrototypeOf(obj1));     // Output: Array.prototype


// Если мы создаем динамически изменяющиеся ключи в объекте ([key]: 'value'), нужно следить, чтобы нельзя было вводить __proto__ как ключ - это вызовет ошибку
// тк __proto__ это геттер и сеттер.
// Можно законтрить если убрать объекту прототип ( [[Prototype]] = null )