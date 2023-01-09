// https://learn.javascript.ru/property-descriptors

// У каждого св-ва объекта есть объект-дескриптор, в нем значение св-ва и флаги(разрешения для св-ва) - writable, enumerable, configurable.

// writable = true       -  можно перезаписывать св-во
// enumerable = true     -  циклы могут перечислить св-во
// configurable = true   -  св-во возможно удалить и менять его дескрипторы (дорога в один конец)



// Когда мы создаем св-во, по-умолчанию все дескрипторы в положении true.
// Получить дескрипторы св-ва можно с помощью Object.getOwnPropertyDescriptor(obj, 'prop')
const obj = {
  name: 'obj',
  message: 'Hello',
};
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));             // Output: { value: 'obj', writable: true, enumerable: true, configurable: true }

// Получить дескрипторы всех св-в объекта можно с помощью Object.getOwnPropertyDescriptors(obj, ...'props'?)
console.log(Object.getOwnPropertyDescriptors(obj));                       // Output: { name: { value: 'obj', writable: true, enumerable: true, configurable: true}, message: { value: 'Hello', writable: true, enumerable: true, configurable: true } }



// Для изменения флагов есть метод Object.defineProperty(obj, 'prop', descriptor) (определить св-во)
Object.defineProperty(obj, 'name', {value: 'renamed'});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));             // Output: { value: 'renamed', writable: true, enumerable: true, configurable: true }


// Если создать св-во с помощью `Object.defineProperty()`, все неуказанные в дескрипторе флаги по умолчанию будут false
Object.defineProperty(obj, 'property', {value: 'defineProperty prop'});
const descriptor = Object.getOwnPropertyDescriptor(obj, 'property');
console.log(JSON.stringify(descriptor));                                  // Output: {"value":"defineProperty prop","writable":false,"enumerable":false,"configurable":false}


// Метод изменения/создания нескольких св-в - Object.defineProperties( obj, {'prop1': {descriptor}, 'prop2': {descriptor}} )
Object.defineProperties(obj, {'method': {value: () => console.log('hello')}, 'name': {value: 'twice renamed'}});
console.log(obj);                                                         // Output: { name: 'twice renamed', message: 'Hello' }
obj.method();                                                             // Output: 'hello'



// Для полного копирования объекта с дескрипторами можно использовать связку Object.defineProperties(Object.getOwnPropertyDescriptors(obj))
const objClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(objClone);                                                    // Output: { name: 'twice renamed', message: 'Hello' }



// Ошибки связанные с разрешениями флагов невидимы без 'use strict', но при этом работа флагов не нарушается
obj.property = 10;
console.log(obj.property);                                                // Output: 'defineProperty prop'



// Также есть методы, работающие сразу со всеми дескрипторами в объекте
/*
 * Методы объекта, работающие с дескрипторами глобально
 *
 * Object.preventExtensions(obj)  - (не допустить расширение) Запрещает добавлять новые св-ва
 * Object.seal(obj)               - (пломба) Запрещает удалять/добавлять св-ва + ставит configurable: false на все св-ва
 * Object.freeze(obj)             - (заморозка) Запрещает удалять/добавлять/изменять св-ва + ставит configurable: false и writable: false на все св-ва
 * Object.isExtensible(obj)       - true, если можно добавлять св-ва
 * Object.isSealed(obj)           - true, если удалять/добавлять св-ва запрещено + configurable: false на всех св-вах
 * Object.isFrozen(obj)           - true, если удалять/добавлять/изменять св-ва запрещено + configurable: false и writable: false на всех св-вах
 */