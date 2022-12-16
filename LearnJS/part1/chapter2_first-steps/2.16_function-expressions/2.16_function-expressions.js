// https://learn.javascript.ru/function-expressions

// Function Expression - ` let fnName = function(param){code} `
// создана внутри выражения + не может быть объявлена до блока функции + преимущества синтаксиса
function fnDeclaration() {
  return 'it\'s function declaration';
}

let fnExpression = function() {
  return 'it\'s function expression';
};


// В Js функция – это значение, мы можем обращаться с ней как со значением, но если поставить после нее скобки (), функция выполнится
// При выводе значения функции выведется ее исходный код (строкое представление)
function fnInParams(fn) {
  return 'hello, it\'s ' + fn();
}
function fnCallback() { return 'callback function' }

console.log( fnInParams(function() { return 'anonymous function' }) );      // Output: hello, it's anonymous function
console.log(fnInParams(fnCallback));                                           // Output: hello, it's callback function



// callback функция - ссылка на функцию(ее имя), отправленная в кач-ве аргумента в другую функцию, для последующего вызова
// анонимная функция - функция без имени, отправленная в кач-ве аргумента в выражение
// лямбда-функция - анонимная функция в одну строку





