// https://learn.javascript.ru/promise-error-handling

// В `.then(() => resolve)` цепочке вызовов в конец ставится `.catch()`, чтобы поймать ошибку любого .then(), стоящего перед ней.
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
}).then((result) => {
  console.log(result * 2);
  return asdfasf;
}).then((result) => {
  console.log(result * 2);
  return result * 2;
}).catch(console.log);      // Output: 2  ReferenceError: asdfasf is not defined



// Вокруг функции промиса находится неявный `try...catch`, то есть `.catch()` перехватит не только ошибки промисов, но и случайные ошибки в обработчиках.
// Два этих промиса работают идентично:
new Promise((resolve, reject) => {
  throw new Error('whoops1');
}).catch(console.log);                      // Output: Error 'whoops1'

new Promise((resolve, reject) => {
  reject(new Error('whoops2'));
}).catch(console.log);                      // Output: Error 'whoops2'



// Если пробросить (throw) ошибку внутри `.catch()`, то она отправится дальше к следующему `.catch()`. Это нужно для сортировки ошибок по типам.
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(function(error) {
  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    console.log("Не могу обработать ошибку");
    throw error;                                // пробрасывает эту или другую ошибку в следующий catch
  }
}).then(function() {
  /* не выполнится */
}).catch(error => {
  console.log(`Неизвестная ошибка: ${error}`);  // ничего не возвращаем => выполнение продолжается в нормальном режиме
});



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Что вы думаете? Выполнится ли `.catch?` Поясните свой ответ.
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);
// `.catch()` не выполнится, вокруг промиса неявная конструкция `try...catch`, но ошибка кидается после выполнения промиса.
// если бы вместо `throw` был бы `reject`, то все бы работало.