// Task 1
// Написать декоратор, который добавляет к результату функции в начале 'пук...'
function ultimateResult(func) {
  console.log(`пук... `);
  return func;
}
let sum = function (a, b) {
  return a + b;
};
sum = ultimateResult(sum);
console.log(sum(5, 10));    // Output: 'пук...' 15