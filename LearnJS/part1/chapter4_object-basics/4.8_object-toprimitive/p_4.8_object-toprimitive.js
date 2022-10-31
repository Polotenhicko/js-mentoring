// Создать объект-контейнер с объектами с методами преобразования в примитивы, 
// чтобы при приведении выводить либо названия и сумму значений всех объектов, либо название и значение отдельного объекта

'use strict'

const toString = Symbol('toString');
const valueOf = Symbol('valueOf');

const obj1 = {
  sub1: { name: 'sub1', value: 1000 },
  sub2: { name: 'sub2', value: 2000 },
  sub3: { name: 'sub3', value: 3000 },
  sub4: { name: 'sub1', value: 4000 },
  sub5: { name: 'sub1', value: 5000 },

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this[toString]() : this[valueOf]();
  },

  [toString]() {
    let output = '';
    for (const key in this) {
      if (typeof this[key] === 'object' && !Array.isArray(this[key]) && this[key] !== null) {
        output += `${key}: ${this[key].value} | `;
      } else {
        return output += `${this.name}: ${this.value}`;
      }
    }
    return output
  },

  [valueOf]() {
    let sum = 0;
    for (const key in this) {
      if (typeof this[key] === 'object' && !Array.isArray(this[key]) && this[key] !== null) {
        sum += this[key].value;
      } else {
        return this.value;
      }
    }
    return sum;
  },
}

console.log('total string: ' + String(obj1));
console.log('total number: ' + +obj1 + '\n');

for (const key in obj1) {
  obj1[key][toString] = obj1[toString];
  obj1[key][valueOf] = obj1[valueOf];
  obj1[key][Symbol.toPrimitive] = obj1[Symbol.toPrimitive];
}

console.log('separate 1 string: ' + String(obj1.sub1));
console.log('separate 1 number: ' + +obj1.sub1);