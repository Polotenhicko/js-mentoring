// Task 1
// sequenceSum
// Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел.
// Последовательность задается двумя значениями:
//     begin - начало последовательности,
//     end - конец последовательности.
//
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
//
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 - -3


const sequenceSum = function (b, e) {
  return b === e ? b : b + sequenceSum(b + 1, e);
};
console.log(sequenceSum(4, 10));


// Task 2
// getStringCount:
// Реализуйте (с использованием рекурсии) функцию getStringCount,
// которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
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

