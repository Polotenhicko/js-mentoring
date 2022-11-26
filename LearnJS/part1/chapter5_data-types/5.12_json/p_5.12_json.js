// http://old.code.mu/tasks/javascript/advanced/rabota-s-json-v-javascript.html
// Задачи на работу с JSON. Учебник Трепачёва

// Task 1
// Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя".
console.log(JSON.parse('["Коля", "Вася", "Петя"]')[2]);     // Output: 'Петя'

// Task 2
// Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON.
console.log(JSON.stringify({a: 'aaa', b: 'bbb'}));         // Output: '{"a":"aaa","b":"bbb"}'