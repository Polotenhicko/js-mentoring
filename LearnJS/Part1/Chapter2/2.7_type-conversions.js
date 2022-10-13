// https://learn.javascript.ru/type-conversions

// Примитивное преобразование типов происходит с помощью методов приведения

// Строковое преобразование
let example = true
String(example)         // Output: "true"


// Численное преобразование
let example2 = '123'
Number(example2)        // Output: 123
example2 = example2 - 0 // Output: 123 - Также неявное преобразование происходит при мат. операциях
// Если значение невозможно привести к цифре, выдаст NaN


// Логическое преобразование
let example3 = ''
Boolean(example3)       // Output: false - возвразает true если нет 'пустых' значений

// Task 1
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
// Solution in ../../CodeWars/Completed/7kyu_two-fighters,-one-winner.js