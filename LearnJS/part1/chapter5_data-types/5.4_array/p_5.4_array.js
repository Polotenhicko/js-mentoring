// https://code.mu/ru/javascript/book/prime/inbuilt/array/
// Методы массива учебник Трепачёва


// Task 1
// Дан следующий массив:
const arr1 = [1, 2, 3];
// Добавьте ему в конец элементы 4, 5, 6.
arr1.push(4, 5, 6);
// console.log(arr1);    // Output: [ 1, 2, 3, 4, 5, 6 ]


// Task 2
// Дан следующий массив:
const arr2 = [1, 2, 3];
// Добавьте ему в начало элементы 4, 5, 6.
arr2.unshift(4, 5, 6)
// console.log(arr2);    // Output: [ 4, 5, 6, 1, 2, 3 ]


// Task 3
// Дан следующий массив:
const arr3 = [1, 2, 3];
// Выведите на экран первый элемент этого массива.
// console.log(arr3[0]);        // Output: 1


// Task 4
// Дан следующий массив:
const arr4 = [1, 2, 3];
// Выведите на экран последний элемент этого массива.
// console.log(arr4.at(-1));    // Output: 3


// Task 5
// Дан следующий массив:
const arr5 = [1, 2, 3, 4, 5];
// Сделайте из этого массива следующий: [1, 2, 3]
arr5.length = 3;
// console.log(arr5);    // Output: [ 1, 2, 3 ]


// Task 6
// Дан следующий массив:
const arr6 = [1, 2, 3, 4, 5];
// Используя этот массив, запишите в новую переменную следующий массив: [4, 5]
const newVar = arr6.slice(3);
// console.log(newVar);    // Output: [ 4, 5 ]


// Task 7
// Дан следующий массив:
const arr7 = [1, 2, 3, 4, 5];
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
arr7.splice(1, 2);
// console.log(arr7);    // Output: [ 1, 4, 5 ]


// Task 8
// Дан следующий массив:
const arr8 = [1, 2, 3, 4, 5];
// С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
arr8.splice(3, 0, 'a', 'b', 'c');
// console.log(arr8);    // Output: [1, 2, 3, 'a', 'b', 'c', 4, 5]


// Task 9
// Дан следующий массив:
const arr9 = [1, 2, 3, 4, 5];
// С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
arr9.splice(1, 0, 'a', 'b');
arr9.splice(-1, 0, 'c');
arr9.splice(arr9.length, 0, 'e');
// console.log(arr9);    // Output: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']


// Task 10
// Дан следующий массив:
const arr10 = [1, 2, 3, 4, 5];
// Найдите позицию числа 3 в этом массиве.
// console.log(arr10.findIndex(n => n === 3));    // Output: 2


// Task 11
// Дан следующий массив:
const arr11 = [1, 2, 3, 4, 5];
// Проверьте, есть ли в этом массиве число 3.
// console.log(arr11.includes(3));    // Output: true