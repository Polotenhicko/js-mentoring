// Task 1
// Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.
const array = ['one', 'two', 'three', 'four', 'five'];
const [elem1, elem2, elem3, ...arr] = array
console.log(elem1, elem2, elem3, arr);      // Output: 'one' 'two' 'three' [ 'four', 'five' ]

// Task 2
// Дан массив. Запишите последний элемент этого массива в переменную elem21, а предпоследний - в переменную elem22.
const [elem21, elem22] = array.reverse();
console.log(elem21, elem22);      // Output: 'five' 'four'
array.reverse();

// Task 3
// Дан массив. Запишите второй элемент этого массива в переменную elem32. Первый элемент никуда записывать не надо.
const [, elem32] = array;
console.log(elem32);      // Output: 'two'

// Task 4
// Дан массив. Запишите второй элемент этого массива в переменную elem42, третий - в переменную elem43.
// Если в массиве нет третьего элемента - запишите в переменную elem43 значение 'eee',
// а если нет второго - в переменную elem42 запишите значение 'bbb'. Первый элемент никуда записывать не надо.
const [, elem42 = 'bbb', elem43 = 'eee'] = array;
console.log(elem42, elem43);      // Output: 'two' 'three'

// Task 5
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age.
const object = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'};
const {name, surname, age} = object;
console.log(name, surname, age);      // Output: Петр Петров 20 лет

// Task 6
// Дан объект {name1: 'Петр', 'surname1': 'Петров', 'age1': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
const object1 = {name1: 'Петр', 'age1': '20 лет'};
const {name1 = 'Аноном', surname1 = 'Анонимович', age1 = '? лет'} = object1;
console.log(name1, surname1, age1);      // Output: Петр Анонимович 20 лет

