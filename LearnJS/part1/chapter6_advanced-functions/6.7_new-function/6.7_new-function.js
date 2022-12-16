// https://learn.javascript.ru/new-function

// Помимо Function Declaration и Function Expression(в т.ч arrow) есть третий вид объявления функции, через конструктор - `new Function([...args], f-body)`
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(3, 2));     // Output: 5

const sayHi = new Function('return "Hello world"');
console.log(sayHi());       // Output: 'Hello world'
// Благодаря такому синтаксису можно получить функцию из строки



// Особенности данного вызова в том, что где бы не была объявлена функция, ее [[Environment]] (ссылка на родителя) всегда будет указывать на глобальный объект
function foo1() {
  const value = 10;
  const newFunction = new Function('return value');
  return newFunction;
}
// console.log(foo1()());     // ReferenceError: value is not defined
// Такая особенность вынуждена из-за возможных проблем с минификаторами - алгоритмами, минифицирующими код и подменяющими имена переменных на более короткие


// Важно понимать, что this при таком определении ведет себя, как обычно - ссылается на объект, в котором объявлена функция
const obj = {
  name:  'obj',
  method: new Function('console.log(this)'),      // Output: { name: 'obj', method: [Function: anonymous] }   -  не глобал
}
obj.method();