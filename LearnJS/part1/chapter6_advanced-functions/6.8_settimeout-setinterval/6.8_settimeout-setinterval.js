// https://learn.javascript.ru/settimeout-setinterval

// `setTimeout(fn, delay = 0, ...args?)`        - Вызовет fn(...args)` через delay мсек
setTimeout((x) => console.log(x), 1000, 'resolved' );     // Output: 'resolved' (after 1 sec)


// Если вложить setTimeout в setTimeout, то вложенный запланируется сразу после выполнения предыдущего
setTimeout(function () {
  console.log('timeout');                                                       // Output: 'timeout' (after 2 sec)
  setTimeout(() => console.log('nested timeout'), 2000);         // Output: 'nested timeout' (after 4 sec)
}, 2000);


// вызов `setTimeout()` возвращает id таймаута (в node.js - объект)
const timeout = setTimeout((x) => console.log(x), 2000, 'resolved 101010' );
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
const interval = setInterval((x) => console.log(x), 1000, 'cycled' );     // Output: 'cycled' (every 1 sec)

// `clearInterval(interval)` - остановить циклические вызовы
setTimeout( () => clearInterval(interval), 5000);



// ---------------------------------------------------------------------------------------------------------------------
