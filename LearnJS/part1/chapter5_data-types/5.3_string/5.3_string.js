// https://learn.javascript.ru/string

// Строку можно записать через '', "", ``. У обратных кавычек есть преимущества - можно обращаться к переменным `${}` и писать в несколько строк

// Шаблонная функция - func`string`, это автоматически вызываемая функция, которая получает аргументом строку со всеми ее переменными - теговый шаблон

/* 
 * Спецсимволы для строк
 * 
 * `\n` -	Перевод строки
 * `\'`, `\"` -	Кавычки
 * `\\`	- Обратный слеш
 * `\t` -	Знак табуляции
*/

// У строки есть св-во length
console.log('hello'.length)

// Для доступа к символам используется [], как у массивов или метод charAt(index)
  // Разница в том, что при отсутствии символа, [] вернёт undefined, а charAt — пустую строку
console.log( 'hello'[1000] );         // Output: undefined
console.log( 'hello'.charAt(1000) );  // Output: '' (пустая строка)

// можно перебрать строку используя for..of
for (let char of "Hello") {
  console.log(char);          // Output: 'H','e','l','l','o'
}

// Содержимое строки в JavaScript нельзя переписать
let example = 'hello';
example[3] = '5';
console.log(example);         // Output: 'hello'

// Методы toLowerCase() и toUpperCase() меняют регистр символов
console.log( 'Interface'.toUpperCase() );   // Output: INTERFACE
console.log( 'Interface'.toLowerCase() );   // Output: interface

// Можно искать индекс конкретного порядка символов в строке - str.indexOf(substr, pos) - substr - что искать, pos - начиная с какого индекса
  // Возвращает -1 если нет совпадений, либо индекс первой буквы найденной подстроки
  let str = 'Widget with id';
  console.log( str.indexOf('get') )     // Output: 3
  console.log( str.indexOf('jopa') )    // Output: -1
// str.lastIndexOf(substr, position) делает тоже самое, только с конца строки

