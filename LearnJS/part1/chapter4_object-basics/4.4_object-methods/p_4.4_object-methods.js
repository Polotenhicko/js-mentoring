// (!) 
// (!) Долг (4.4). Поиграться с .bind(), например вызвать несколько раз подряд (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)
// (!) 

// Task 1 
// Создать объект, в котором будет метод с вложенной функией, которая будет ссылаться на имя объекта. Далее скопировать метод в другой объект, чтобы работало.
const obj = {
  title: 'main obj',
  getTitle() {
    const subGetTitle = () => {
      console.log(this.title)
    };
    subGetTitle()
  }
};
// obj.getTitle()

const subObj = {
  title: 'sub obj',
};
subObj.getTitle = obj.getTitle;
// subObj.getTitle()


// Все задачи ниже взяты из https://github.com/andrewborisov/javascript-practice/tree/master/objects/exercises
// Task 2
/**
  * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
  * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
  * Сложность задачи: 1 of 5
  * @param element - элемент для проверки
  * @returns {boolean}
*/

const isPlainObject = (element) => {
  return typeof element === 'object' && !Array.isArray(element) && element !== null;
};

const data = { a: 1 }/* [1, 2, 3] */;
// console.log(isPlainObject(data));


// Task 3
/**
  * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
  * Сложность задачи: 1 of 5
  * @param {Object} object - любой объект для трансформации
  * @returns {Array} - вложенный массив
*/

// const makePairs = (object) => {
//   const arr = [];
//   for (const key in object) {
//     arr.push([key, object[key]])
//   };
//   return arr;
// };

// const makePairs = (object) => {
//   return Object.keys(object).map(key => [key, object[key]])
// };

const makePairs = (object) => {
  return Object.entries(object)
};

const data1 = { a: 1, b: 2, };
// console.log(makePairs(data1));


// Task 4
/**
  * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
  * Сложность задачи: 2 of 5
  * @param {Object} object - любой объект
  * @param {?} args - список значений для удаления
  * @returns {Object} - новый объект без удаленных значений
*/

// const without = (object, ...args) => {
//   for (const [key] of Object.entries(object)) {
//     for (const [arg] of args) {
//       if (key === arg) {
//         delete object[arg];
//       }
//     }
//   }
//   return object;
// };

const without = (object, ...args) => {
  args.forEach(arg => { delete object[arg] });
  return object;
};

const data2 = { a: 1, b: 2, c: 3 };
// console.log(without(data2, 'b', 'c'));


// Task 5
/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

// const isEmpty = (object) => {
//   for (const k in object) {
//     if (object[k] !== undefined && object[k] !== '' && object[k] !== null && object[k] !== NaN) {
//       return false;
//     }
//   }
//   return true;
// };

const isEmpty = (object) => {
  if (!Object.keys(object).length) {
    return true
  }
  return !Object.keys(object).filter(k => object[k] || object[k] === false || object[k] === 0).length                   // не очень понимаю булево условие
};

const data3 = { a: undefined, b: 1 };
const data4 = { a: undefined };
// console.log(isEmpty(data3)); // false
// console.log(isEmpty(data4)); // true


// Task 6
/**
  * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Сложность задачи: 2 of 5
  * @param {Object<string | number>} firstObj - объект с примитивами
  * @param {Object<string | number>} secondObj - объект с примитивами
  * @returns {boolean}
*/

// const isEqual = (firstObj, secondObj) => {
//   if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return !Object.keys(firstObj).filter(k => firstObj[k] !== secondObj[k]).length                                     // не проверяет очередность ключей
// };

const isEqual = (firstObj, secondObj) => {
  return Object.entries(firstObj).join() === Object.entries(secondObj).join()                                        // проверяет очередность ключей
};

const data5 = { a: 1, b: 1 };
const data6 = { a: 1, b: 1 };
const data7 = { a: 1, b: 2 };
// console.log(isEqual(data5, data6)); // true
// console.log(isEqual(data5, data7)); // false


// Task 7 - не выполнил, оставляю до прототипов
/**
  * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
  * Сложность задачи: 3 of 5
  * @param {Object} object
  * @param {String} path - путь в объекте
  * @param {String} func - метод массива для исполнения
  * @param {Array} [args] - список аргументов
  * @returns {?}
*/

const invoke = (object, path, func, args) => {
  
};

const data8 = { a: { b: [1, 2, 3] } }
// console.log(invoke(data8, 'a.b', 'splice', [1, 2])); // [2, 3]


// Task 8 - не выполнил, оставляю до рекурсии
/**
  * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
  * Пустые значения: '', null, NaN, undefined, [], {}
  * Ожидаемый результат: ({}) => true,
      ({ a: { b: undefined } }) => true,
      ({ a: { b: [] } }) => true
  * Сложность задачи: 3 of 5
  * @param {Object} object - любой объект
  * @returns {boolean}
*/

const isEmptyDeep = (object) => {
  
};

const data9 = { a: { b: undefined } };
const data10 = { a: { b: 1 } };
// console.log(isEmptyDeep(data9)); // true
// console.log(isEmptyDeep(data10)); // false


// Task 9 - не выполнил, оставляю до рекурсии
/**
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
*/
const isEqualDeep = (element) => {
  
};
const data11 = { a: 1, b: { c: 1 } };
const data12 = { a: 1, b: { c: 1 } };
const data13 = { a: 1, b: { c: 2 } };
// console.log(isEqualDeep(data11, data12)); // true
// console.log(isEqualDeep(data11, data13)); // false


// Task 10 решено только в лоб.
/**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}
*/

const intersection = (firstObject, secondObject) => {
  const matches = {};
  for (const [key1, value1] of Object.entries(firstObject)) {
    for (const [key2, value2] of Object.entries(secondObject)) {
      if (key1 === key2 && value1 === value2) {
        matches[key1] = value1;
      }
    }
  }
  return matches;
};

// const intersection = (firstObject, secondObject) => {
// };

const data14 = { a: 1, b: 2 };
const data15 = { c: 1, b: 2 };
// console.log(intersection(data14, data15)); // { b: 2 }


// Task 11 не выполнил, оставляю до рекурсии
/**
  * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
  * @param {Object} firstObj - объект любых значений
  * @param {Object} secondObj - объект любых значений
  * @returns {Object}
*/

const intersectionDeep = (firstObject, secondObject) => {
  
};

const data16 = { a: 1, b: { c: 3 } };
const data17 = { c: 1, b: { c: 3 } };
// console.log(intersectionDeep(data16, data17)); // { b: { c: 3 } }