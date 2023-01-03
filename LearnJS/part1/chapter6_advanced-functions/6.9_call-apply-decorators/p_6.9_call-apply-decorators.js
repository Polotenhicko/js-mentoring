// Task 1
// Написать декоратор, который добавляет к результату функции в начале 'пук...'
function ultimateResult(func) {
  console.log(`пук... `);
  return func;
}

let sum = function (a, b) {
  return a + b;
};
sum = ultimateResult(sum);
console.log(sum(5, 10));    // Output: 'пук...' 15



// Task 2
// Реализовать декоратор errorCatcher(func), который оборачивает функцию в try catch и дефолтный обработчик + записывает в свое св-во название ошибки.
const errorNameCatcher = function func(f) {
  func.errorsCache = [];

  return function func2(...args) {
    func2.getErrors = function () {
      console.log(func.errorsCache);
    };

    try {
      f.call(...args);
    } catch (e) {
      func.errorsCache.push([args, e.name]);
      console.log(`Error caught with args [${args}] - ${e.name}`);
    }
  };
};
function sum2 (a, b) {
  return sum2(a + 1, b + 1);
}
const errorSum2 = errorNameCatcher(sum2);
errorSum2(666, 777);                        // Output: Error caught with args [666,777] - RangeError
errorSum2.getErrors();                      // Output: [ [ [ 666, 777 ], 'RangeError' ] ]
errorSum2(888, 777);                        // Output: Error caught with args [666,777] - RangeError
errorSum2.getErrors();                      // Output: [ [ [ 666, 777 ], 'RangeError' ], [ [ 888, 777 ], 'RangeError' ] ]

