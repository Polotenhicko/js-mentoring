// https://learn.javascript.ru/settimeout-setinterval

// `setTimeout(fn, delay = 0, ...args?)`        - Вызовет fn(...args)` через delay мсек
setTimeout((x) => console.log(x), 1000, 'resolved');     // Output: 'resolved' (after 1 sec)


// Если вложить setTimeout в setTimeout, то вложенный запланируется сразу после выполнения предыдущего
setTimeout(function () {
  console.log('timeout');                                                       // Output: 'timeout' (after 2 sec)
  setTimeout(() => console.log('nested timeout'), 2000);         // Output: 'nested timeout' (after 4 sec)
}, 2000);


// вызов `setTimeout()` возвращает id таймаута (в node.js - объект)
const timeout = setTimeout((x) => console.log(x), 2000, 'resolved 101010');
console.log(timeout);          // Output: -timeout object-
console.log(+timeout);         // Output: 6 (asyncId)


// `clearTimeout(timeout)` - отменить запланированное событие, если таймаут больше не нужен (выполнился), обязательно нужно отменять, тк функция остается в памяти
clearTimeout(timeout);

// Когда функция передается в setTimeout\setInterval, на нее создается ссылка в планировщике, то есть таймаут в любом случае выполнится, даже если перезаписать его переменную


// Нулевой setTimeout выполнит функцию сразу после всего синхронного кода, тк js обращается к планировщику только после синхронного кода
setTimeout(() => console.log('async starts...'), 0);


// В браузере есть ограничение на частоту выполнения интервалов - после пяти вложенных таймеров интервал должен составлять не менее четырёх мс
// то есть после 5 вызовов, последующие будут с интервалом минимум 4 мс


// Зациклив setTimeout можно получить функционал setInterval, но есть отличия -
// setTimeout не считает время на выполнение функции, он делает фиксированную задержку от завершенной функции до вызова следующей
// setInterval учитывает время на выполнение, он делает фиксированную задержку от вызова функции до вызова следующей
function recursionTimeout() {
  setTimeout(function () {
    console.log('recursionTimeout');
    recursionTimeout();
  }, 5000);
}

recursionTimeout();



// ---------------------------------------------------------------------------------------------------------------------
// `setInterval(fn, interval = 0, ...args?)`    - Будет вызывать fn(...args) через каждые delay мсек
const interval = setInterval((x) => console.log(x), 1000, 'cycled');     // Output: 'cycled' (every 1 sec)

// `clearInterval(interval)` - остановить циклические вызовы
setTimeout(() => clearInterval(interval), 5000);



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
//    - Используя setInterval.
//    - Используя рекурсивный setTimeout.
const printNumbers1 = function (from, to) {
  let i = 1;
  setInterval(() => console.log(i++), 1000);
};
printNumbers1();

const printNumbers2 = function (i = 1) {

  setTimeout(function () {
    console.log(i);
    printNumbers2(i + 1);
  }, 1000);

};
printNumbers2();



// Task 2
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?   - После цикла, тк асинхрон выполняется после синхронного кода

// Что покажет console.log?
let i = 0;
setTimeout(() => console.log('task 2 '+ i), 100);      // Output: 100_000_000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100_000_000; j++) {
  i++;
}