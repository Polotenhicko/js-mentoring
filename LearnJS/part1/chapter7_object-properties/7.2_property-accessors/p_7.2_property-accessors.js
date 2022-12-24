// Task 1
// Сделать фабрику дескрипторов, которая добавляет геттер, который возвращает сумму всех чисел в объекте.
// Применить на нескольких объектах.
// Сделать все, кроме слова фабрика
// Дальше если будет повторяющийся код - зафиксить с помощью паттерна фабрика.
const addTotalDescriptor = function (obj) {
  Object.defineProperty(obj, 'total', {
    get: function () {
      let sum = 0;
      for (const objKey in obj) {
        if (typeof obj[objKey] === 'number') {
          sum += obj[objKey];
        }
      }
      return sum;
    },
  });
};

const obj1 = {
  value1: 10,
  value2: 15,
  value3: 20,
  name: 'o1',
};

const obj2 = {
  value1: 99,
  value2: 99,
  value3: 99,
  name: 'o2',
};

addTotalDescriptor(obj1);
addTotalDescriptor(obj2);
console.log(
    obj1.total,     // Output: 45
    obj2.total,     // Output: 297
);
