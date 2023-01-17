// https://habr.com/ru/company/otus/blog/686670/
// Задачи для собеседования: промисы


// Task 1
// Каким будет вывод этого фрагмента кода?
console.log('start');
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
})
console.log('end');     // Output: 'start' 1 'end'    - когда мы вызываем промис, его колбэк выполняется сразу же



// Task 2
// Каким будет вывод этого фрагмента кода?
console.log('start');

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise2.then(res => {
  console.log(res);
});

console.log('end');     // Output: 'start' 1 'end' 2    - выполнение промиса это асинхронщина => выполняется после синхронщины



// Task 3
// Каким будет вывод этого фрагмента кода?
console.log('start');

const promise3 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise3.then(res => {
  console.log(res);
});

console.log('end');     // Output: 'start' 1 3 'end' 2



// Task 4
// Каким будет вывод этого фрагмента кода?
console.log('start');
const promise4 = new Promise((resolve, reject) => {
  console.log(1);
});
promise4.then(res => {
  console.log(2);
});
console.log('end');     // Output: 'start' 1 'end'     - .then не выполняется, тк метод resolve не вызывается вообще



// Task 5
// Каким будет вывод этого фрагмента кода?
console.log('start');

const fn5 = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
}));

console.log('middle');

fn5().then(res => {
  console.log(res);
});

console.log('end');     // Output: 'start' 'middle' 1 'end' 'success+'    - функция выполнится только после мидл, промис резолвнется после синхронщины



// Task 6
// Каким будет вывод этого фрагмента кода?
console.log('start');

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log;           // Output: 'start' 'end' 1 2    - асинхронщина после синхронщины



// Task 7
// Каким будет вывод этого фрагмента кода?
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');         // Output: 'start' 'end' 'resolve' 'setTimeout'     - таймаут это макрозадача, у нее более низкий приоритет выполнения.



// Task 8
// Каким будет вывод этого фрагмента кода?
const promise8 = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise8.then((res) => {
  console.log(res);
});

console.log(3);           // Output: 1 2 3 "timerStart" "timerEnd" "success"      - сначала вся синхронщина, потом вся синхронщина в колбэках, потом резолв



// Task 9
// Что выводит этот фрагмент кода?
const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log('timer2');
}, 0);                       // Output: 'timer1' 'promise1' 'timer2'     - микрозадачи выполняются все сразу (в области видимости), затем 1 макрозадача, повторять.



// Task 10
// Что выводит этот фрагмент кода?
console.log('start');

const promise10 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer10 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');           // Output: 'start' 'end' 'promise1' 'timer1' 'promise2' 'timer2'

// Общий алгоритм такой: Синхронный код => Все микрозадачи => Первая макрозадача (не вложенная) => Все недавно добавленные микрозадачи => Следующая макрозадача