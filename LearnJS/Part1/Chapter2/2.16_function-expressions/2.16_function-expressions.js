// https://learn.javascript.ru/function-expressions

// Function Expression - ` let fnName = function(param){code} `
// создана внутри выражения + не может быть объявлена до блока функции + преимущества синтаксиса

// В Js функция – это значение, мы можем обращаться с ней как со значением, но если поставить после нее скобки (), функция выполнится
// При выводе значения функции выведется ее исходный код (строкое представление)

// callback функция - ссылка на функцию(ее имя), отправленная в кач-ве аргумента в другую функцию, для последующего вызова
// анонимная функция - функция без имени, отправленная в кач-ве аргумента в другую функцию, для последующего вызова
// лямбда-функция - анонимная функция в одну строку

function fnDeclaration() {
  return 'its function declaration';
}

let fnExpression = function() {
  return 'its function expression';
};


function fnInParams(fn) {
  return 'hello, it\'s ' + fn();
}
console.log( fnInParams(function() { return 'anonimous function' }) );
console.log(fnInParams(fnCallback));
function fnCallback() { return 'callback function' }