// http://old.code.mu/tasks/javascript/dom/rabota-s-datami-v-javascript.html
// Задачи на даты (учебник Трепачёва)

// Task 1
// Выведите на экран текущий день.
console.log(new Date().getDate());

// Task 2
// Выведите на экран текущий месяц.
console.log(new Date().getMonth() + 1);

// Task 3
// Выведите на экран текущий год.
console.log(new Date().getFullYear());


// Task 4
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
// Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами,
// которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
const addZero = function (dateStr) {
  return `0${dateStr}`.slice(-2);
};
const now = new Date;
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${addZero(now.getDate())}.${addZero(now.getMonth())}.${now.getFullYear()}`);


// Task 5
// Выведите на экран номер текущего дня недели.
console.log(new Date().getDay() + 1);

// Task 6
// Узнайте, какой день недели был 7-го января 2015 года.
console.log(new Date(2015, 0, 7).getDay() + 1);     // Среда (4)

// Task 7
// Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
console.log( Math.trunc((new Date() - Date.parse('1988-03-01')) / 3_600_000) );   // 304502

