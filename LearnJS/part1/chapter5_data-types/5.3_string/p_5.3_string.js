// https://code.mu/ru/javascript/book/prime/inbuilt/string/
// Строковые методы учебник Трепачёва


// Task 1
// Дана строка 'js'. Сделайте из нее строку 'JS'.
console.log('js'.toUpperCase())   // Output: 'JS'


// Task 2
// Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log('JS'.toLowerCase());   // Output: 'js'


// Task 3
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
console.log('я учу javascript!'.substr(0, 1));        // Output: 'я'
console.log('я учу javascript!'.substring(0, 1));     // Output: 'я'
console.log('я учу javascript!'.slice(0, 1));         // Output: 'я'


// Task 4
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
console.log('abcde'.indexOf('c'));                   // Output: 2


// Task 5
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
console.log('abcde'.includes('a'));                 // Output: true


// Task 6
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
console.log('abcde'.startsWith('a'));              // Output: true


// Task 7
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
console.log('abcde'.endsWith('a'));               // Output: false


// Task 8
// Дана строка. Проверьте, начинается ли эта строка на 'https://'.
console.log('https://code.mu'.startsWith('https://'));     // Output: true


// Task 9
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
console.log('index.html'.endsWith('.html'));     // Output: true



// Task 10
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
console.log('1-2-3-4-5'.split('-'));     // Output: [ '1', '2', '3', '4', '5' ]


// Task 11
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
console.log('12345'.split(''));         // Output: [ '1', '2', '3', '4', '5' ]


// Task 12
// Дан следующий массив:
const arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.
console.log(arr.join('-'));     // Output: '1-2-3-4-5'