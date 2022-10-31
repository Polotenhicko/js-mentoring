// Task 1
// Создать глобальный и локальный символ, поместить в `obj1`, скопировать их в `obj2`, перезаписать значения всех символов в `obj2`.
const symbol1 = Symbol.for('symbol1')
const symbol2 = Symbol('symbol2');

const obj1 = {
  name: 'object 1',
  [symbol1]: 'this is symbol1 prop',
  [symbol2]: 'this is symbol2 prop',
};

const obj2 = {
  name: 'object 2',
};

obj2[symbol1] = obj1[symbol1];
obj2[symbol2] = 'this is symbol2 prop';

Object.getOwnPropertySymbols(obj2).forEach(symbol => obj2[symbol] = 'rewrited');
console.log(obj1, obj2);                                                        // Output: obj1 без изменений - содержимое не зависит от имени