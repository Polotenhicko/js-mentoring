// https://learn.javascript.ru/async-await


// `async/await` это синтаксический сахар для получения промиса

// `async` - промисифицирует функцию, оборачивая результат ее выполнения в промис.
async function foo() {
  return 1;
}

foo().then(console.log);       // Output: 1


// `await` - используется только внутри async функций. Заставляет интерпретатор ждать выполнения промиса, после чего вернет его результат
async function foo2() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
  });
}

foo2().then(console.log);       // Output: 2 (after 1 sec)



// Для использования `await` в верхнем уровне вложенности можно обернуть логику в анонимную async функцию
(async () => {
  let response = await Promise.resolve('html');
})();



// Если нам необходимо ловить ошибки из `await`: внутри функции удобно обернуть всё в `try...catch`, снаружи функции пользоваться `.catch()`
async function foo3() {
  try {
    const user = await 'Anonymous';
    return 'promise'
  } catch(e) {console.log(e.name)}
}
foo3().catch(console.log);



// Методы тоже могут быть асинхронные.
class Waiter {
  async wait() {
    return await Promise.resolve('waiter');
  }
}

new Waiter().wait().then(console.log);

// (!) Функции конструкторы и геттеры/сеттеры не могут быть асинхронными



// Когда необходимо подождать несколько промисов одновременно, можно обернуть их в `Promise.all`, а затем в `await`
const results = Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(console.log); // Error: 404


// Task 2
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(console.log);
}
f();