// getStringCount:
// Реализуйте (с использованием рекурсии) функцию getStringCount,
// которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
'use strict'


const arr = [1, 3, 2, 4, 5];
const obj = {
  first: '1',
  second: 2,
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
};

const getStringCount = function (item) {
  let strSum = 0;

  Object.values(item).forEach(value => {

    if (typeof value === 'string') {
      strSum++;
    } else {
      if (typeof value === 'object' && value !== null) {
        strSum += getStringCount(value);
      }
    }

  });

  return strSum;
};


console.log(getStringCount(arr));                              // Output: 0
console.log(getStringCount(obj));                              // Output: 2
console.log(getStringCount(['1', '2', ['3', '4']]));      // Output: 4