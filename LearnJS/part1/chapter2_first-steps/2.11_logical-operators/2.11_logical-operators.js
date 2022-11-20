// https://learn.javascript.ru/logical-operators

// В js логические операторы возвращают первый операнд, удовлетворяющий условиям, а если все не удовлетворяют - последний
// Во время вычислений операнд приводится к boolean типу

/* 
 * Логические операторы js
 * 
 * `!` - Логическое 'НЕ' Возвращает обратное значение
 * `&&` - Логическое 'И' Возвращает первый false, иначе последний true
 * `||` - Логическое 'ИЛИ' Возвращает первый true, иначе последний false
 * 
*/

// `!!` Двойное 'НЕ' используется для приведения к булевому типу 

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
console.log( null || 2 || undefined );        // Output: 2

// Task 2
console.log( console.log(1) || 2 || console.log(3) );     // Output: 1; 2

// Task 3
console.log( 1 && null && 2 );                // Output: null

// Task 4
console.log( console.log(1) && console.log(2) );          // Output: 1; undefined

// Task 5
console.log( null || 2 && 3 || 4 );           // Output: 3

// Task 6
let age = null;
if (14 <= age && age <= 90) {};         // `age` в диапозоне 14-90

// Task 7
if (!(14 <= age && age <= 90)) {};      // `age` не в диапозоне 14-90 (с отрицанием)
if (age < 14 || 90 < age) {};           // `age` не в диапозоне 14-90 

// Task 8
if (-1 || 0) console.log( 'first' );          // if выдает '-1', alert выполняется
if (-1 && 0) console.log( 'second' );         // if выдает '0', alert не выполняется
if (null || -1 && 1) console.log( 'third' );  // if выдает '1', alert выполняется


// // Task 9
// let login = prompt('Кто там?', '');

// if (login === null) { 
//   alert('Отменено'); 
// } else if (login === 'admin') {
//   let pass = prompt('Введите пароль', '');
//   if (pass === null) {
//     alert('Отменено');
//   } else if (pass === 'Я главный') {
//     alert('Здравствуйте');
//   } else {
//     alert('Неверный пароль');
//   }
// } else {
//   alert('Я вас не знаю');
// };

