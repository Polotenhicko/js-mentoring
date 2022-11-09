// https://code.mu/ru/javascript/book/prime/inbuilt/math/
// Математические методы учебник Трепачёва


// Task 1
// Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));   // Output: 1024


// Task 2
// Найдите квадратный корень из 245.
console.log(Math.pow(245, 1/2)) // Output: 15.652475842498529


// Task 3
// Дан следующий массив:
const arr = [4, 2, 5, 19, 13, 0, 10];
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let sum = 0;
for (let i in arr) {
  sum += arr[i];
}
console.log(Math.pow(sum, 1/2))   // Output: 7.280109889280518


// Task 4
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
console.log( Math.round( Math.pow(379, 1/2) ) );  // Output: 19
console.log( Math.pow(379, 1/2).toFixed(1) );     // Output: 19.5
console.log( Math.pow(379, 1/2).toFixed(2) );     // Output: 19.47


// Task 5
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
const obj = {
  floor: Math.floor( Math.pow(387, 1/2) ),
  ceil: Math.ceil( Math.pow(387, 1/2) ),
}
console.log(obj);   // Output: { floor: 19, ceil: 20 }


// Task 6
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log( Math.min(4, -2, 5, 19, -130, 0, 10) );   // Output: -130
console.log( Math.max(4, -2, 5, 19, -130, 0, 10) );   // Output: 19

// Task 7
// Выведите на экран случайное целое число от 1 до 100.
console.log(Math.random() * (100 - 1) + 1);


// Task 8
// С помощью цикла заполните массив 10-ю случайными целыми числами.
const arr2 = [];
for (let i = 10; i > 0; i--) {
  arr2.push( Math.round( Math.random() * (10 - 1) + 1 ) );
}
console.log(arr2);


// Task 9
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
const absDiff = (a, b) => Math.abs(a - b);
console.log( absDiff(15, 6), absDiff(6, 15), absDiff(0, 15) );    // Output: 9, 9, 15