// http://old.code.mu/tasks/javascript/advanced/prodvinutaya-rabota-s-funkciyami-javascript.html
// Задачи на продвинутую работу с функциями. Учебник Трепачёва.

// Task 1
// Если переменная a больше нуля - то в ggg1 запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !.
const foo1 = function (a) {
  return a > 0
      ? function () {
        return '!';
      }
      : function () {
        return '!!';
      };
};
const ggg1 = foo1(-10);
console.log(ggg1());             // Output: '!!'



// Task 2
// Функция ggg2 принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg2.
const ggg2 = function (num, fn) {
  return fn(num);
};
console.log(ggg2(5, (num) => num ** 4));      // Output: 625



// Task 3
// Функция ggg3 принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4.
// Верните результатом функции ggg3 сумму 3 и 4.
const ggg3 = function (fn3, fn4) {
  return fn3() + fn4();
};
console.log(ggg3(() => 3, () => 4));        // Output: 7



// Task 4
// Дана функция ggg4. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб.
// Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа.
const ggg4 = function (num, fnPow2, fnPow3) {
  return fnPow2(num) + fnPow3(num);
};

function kvadrat(num) {
  return num ** 2;
}

function kub(num) {
  return num ** 3;
}

console.log(ggg4(5, kvadrat, kub));       // Output: 150



// Task 5
// Сделайте функцию each5, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each5 должна вернуть измененный массив.
const each5 = function (arr, fn) {
  return arr.map(fn);
};
console.log(each5([1, 2, 3, 4, 5], (el) => el * 2));      // Output: [ 2, 4, 6, 8, 10 ]



// Task 6
// Сделайте функцию each6, которая первым параметром принимает массив,
// а вторым - массив функций, которые по очереди применятся к каждому элементу массива:
const each6 = function (arr, fnArr) {
  let modifiedArr = Array.from(arr);
  for (let fn of fnArr) {
    modifiedArr = modifiedArr.map(fn);
  }
  return modifiedArr;
};

const fnArr = [
  (el) => el * 2,
  (el) => el + 100,
  (el) => -el,
];
console.log(each6([1, 2, 3, 4, 5], fnArr));     // Output: [ -102, -104, -106, -108, -110 ]