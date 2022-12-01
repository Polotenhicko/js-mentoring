// https://learn.javascript.ru/recursion

// Рекурсия - вызов функции внутри этой же функции внутри этой же функции внутри этой же функции...
// Рекурсии менее эффективны(медленнее), зато более читаемы

// Шаг рекурсии - выражение, в котором функция вызывает себя. (ветки древа)
// База рекурсии - условие, при котором рекурсия завершается. (листья древа)
// Глубина рекурсии - кол-во повторных вызовов функции (можно точно рассчитывать на 10000 вызовов) (ветвистость древа)
const pow = (a, b) => {
  let pow = a;
  while (b-- > 1) { pow *= a }
  return pow;
};
console.log(pow(5, 3));               // Output: 125

const recursionPow = (a, b) => !b ? 1 : a * recursionPow(a, b - 1);
console.log(recursionPow(5, 3));      // Output: 125


// Контекст выполнения - содержит информацию о текущей выполняющейся функции (позиция в коде, локальные переменные, this и пр.)

// Когда функция производит вложенный вызов:
  // 1. Выполнения текущей функции приостанавливается
  // 2. Её контекст выполнения кладется в стек контекстов выполнения
  // 3. Выполняются вложенные вызовы, для каждого создается новый контекст выполнения
  // 4. Первоначальный контекст выполнения достается из стека и продолжается выполнение


// Связанный список - структура данных, в которой каждый эл-т содержит ссылку на соседний эл-т
// Удобно модифицировать (делить, добавлять, удалять и пр.) - эффективнее чем shift, unshift,
// но к последним эл-там в списке удобнее обращаться через массив
const arrExample = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
arrExample.shift();
console.log(arrExample[0].a);         // Output: 2

let linkedListExample = {a: 1, next: {a: 2, next: {a: 3, next: {a: 4, next: null}}}};
linkedListExample = linkedListExample.next;
console.log(linkedListExample.a);     // Output: 2


// Task 1
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
const sumTo = function (n) {
  return n === 1 ? 1 : n + sumTo(n - 1);
};
console.log(sumTo(5));      // Output: 15


// Task 2
// Написать функцию factorial(n), которая возвращает n!, используя рекурсию.
const factorial = function (n) {
  return n === 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));      // Output: 120


// Task 3
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи
const fib = function (n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};
console.log(fib(7));      // Output: 13


// Task 4
// Напишите функцию printList(list), которая выводит элементы списка по одному.
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
const printList = function (list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);     // Output: 1 2 3 4



// Task 5
// Выведите односвязный список из предыдущего задания в обратном порядке
const printReverseList = function (list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
};
printReverseList(list);     // Output: 4 3 2 1
