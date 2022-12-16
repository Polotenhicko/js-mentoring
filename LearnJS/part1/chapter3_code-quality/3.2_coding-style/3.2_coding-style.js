// https://learn.javascript.ru/coding-style

// Линтер - инструмент для проверки стиля кода (актуальный на 2022 - ESLint)

/* 
 * Базовые стайлгайды
 * 
 * Google JavaScript Style Guide - https://google.github.io/styleguide/javascriptguide.xml
 * Airbnb JavaScript Style Guide - https://github.com/airbnb/javascript     ( перевод - https://leonidlebedev.github.io/javascript-airbnb/ )
 * Idiomatic.JS - https://github.com/rwaldron/idiomatic.js                  ( перевод - https://github.com/rwaldron/idiomatic.js/tree/master/translations/ru_RU )
 * StandardJS - https://standardjs.com/
*/



// Пример документации функций JsDoc
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

/**
 * Returns x, raised to the nth power.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n A number that can be raised to a power.
 * @return {number} x, raised to the nth power.
 */
function pow(x, n) {
  return x ** n;
}



// Task 1
function pow1(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow1(x,n))
}


// solution
function pow2(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) { result *= x; };
  return result;
}

let x2 = prompt('x?', '');
let n2 = prompt('n?', '');
if (n <= 0) {
  alert(`Степень ${n2} не поддерживается, 
      введите целую степень, большую 0`);
} else { alert( pow2(x, n) ) };