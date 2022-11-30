// https://code.mu/ru/javascript/book/prime/ellipsis/spread-rest-applying/
// Применение операторов rest и spread. Учебник Трепачёва

// Task 1
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
const average = function (...nums) {
  return nums.reduce((sum, n) => sum + n, 0) / arguments.length;
};
console.log(average(15, 20, 10, 16, 20, 19, 1, 1, 1));        // Output: 11.444444444444445

// Task 2
// Реализуйте функцию unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный
const unite = function (...arrs) {
  return arrs;
};
console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));        // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Task 3
// Реализуйте функцию merge, параметрами принимающую произвольное количество массивов и сливающую их элементы в один массив.
const merge = function (...arrs) {
  return arrs.flat(1);
};
console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));        // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
