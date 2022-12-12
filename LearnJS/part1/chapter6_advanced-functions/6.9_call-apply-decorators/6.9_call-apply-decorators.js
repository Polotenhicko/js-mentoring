// https://learn.javascript.ru/call-apply-decorators

// Декоратор - функция-обертка, расширяющая функционал того, что она оборачивает
function sum(a, b) {
  return a + b;
}

function cachingDecorator(fn) {
  const cache = new Map();

  return function (...args) {
    if (!cache.has(args)) {
      cache.set(args, fn.call(this, ...args));
    }
    return cache.get(args);
  }
}

sum = cachingDecorator(sum);
console.log(sum(5, 10));      // Output: 15


// Если функция, которую декорируют, в своей логике ссылается на `this` (например является методом), то после декорирования эта ссылка будет возвращать undefined тк контекст потеряется.
// Чтобы исправить это, существуют методы 'привязки' к контексту - `.bind()()` `.apply()` `.call()`

// `.call(context, ...args)` - вызовет функцию с контекстом context и передаст в нее аргументы args
const user = {name: 'boba', value: 10};
const admin = {name: 'admin', value: 15};
function sendMessage(...phrases) {
  console.log(this.name + phrases.join(' '));
}
sendMessage.call(user, ': Hello', 'nice', 'call');
sendMessage.call(admin, ': Hello', 'nice', 'call');

// `.bind()()` и `.apply()` сделают тоже самое, только bind не вызовет функцию сразу, а apply принимает аргументы псевдомассивом
sendMessage.bind(user, ': Hello', 'nice', 'bind')();
sendMessage.apply(user, [': Hello', 'nice', 'apply']);


// С помощью `.bind()()` `.apply()` `.call()` можно заимствовать любые методы
const pseudoArr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};
[].reverse.call(pseudoArr)
// pseudoArr.reverse();     // TypeError: pseudoArr.reverse is not a function
console.log(pseudoArr);     // Output: { '0': 5, '1': 4, '2': 3, '3': 2, '4': 1, length: 5 }



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
function spy(func) {
  spy.calls = [];
  return function (...args) {
    spy.calls.push(args);
    return func.call(this, ...args);
  };
}
function sum1(a, b) {
  return a + b;
}
sum1 = spy(sum1);
console.log(
    sum1(5, 10),      // Output: 15
    sum1(99, 1),      // Output: 100
    spy.calls,              // Output: [ [ 5, 10 ], [ 99, 1 ] ]
);


// Task 2
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.call(this, ...args), ms);
  }
}
function sum2(a, b) {
  console.log(a + b);
}
const delayedSum2 = delay(sum2, 1000);
delayedSum2(10, 15);                        // Output: 25   (after 1 sec)


// Task 3
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
const debounce = function func(f, ms) {
  func.isOpen = true;
  return function (...args) {
    if (func.isOpen) {
      func.isOpen = false;
      f.call(this, ...args);
      setTimeout(() => func.isOpen = true, ms);
    } else {
      console.log(`try again in ${ms / 1000} seconds`);
    }
  };
}
function sum3(a, b) {
  console.log(a + b);
}
const debouncedSum = debounce(sum3, 5000);
debouncedSum(10, 23);                             // Output: 33
debouncedSum(10, 24);                             // Output: 'try again in 5 seconds'


// Task 4
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
// Те вызовы, которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.
const throttle = function func(f, ms) {
  let isOpen = true;
  let argsBuffer = [];

  return function (...args) {

    if (isOpen) {
      isOpen = false;
      f.call(this, ...args);
      setTimeout(() => {
        isOpen = true;
        if (argsBuffer) {
          f.call(this, ...argsBuffer[argsBuffer.length - 1]);
          argsBuffer = [];
        }

      }, ms);
    } else {
      argsBuffer.push(args);
    }
  };
}
function sum4(a, b) {
  console.log(a + b);
}
const throttledSum = throttle(sum4, 5000);
throttledSum(10, 23);                             // Output: 33
throttledSum(10, 24);                             // Output: (пусто)
throttledSum(10, 25);                             // Output: 35
