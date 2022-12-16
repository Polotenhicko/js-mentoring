// https://learn.javascript.ru/array

// Массив это контейнер для упорядоченных данных, в отличие от объекта вместо ключей индекс
  // Внутрь кладется любой тип данных
    // не стоит класть разные типы и оставлять много пустых ячеек между в массиве, тк это убивает преимущества движка в области памяти


// Массивы - это расширенные объекты - с доп. методами и св-вом `length`
  // То есть все особенности объекта применимы и на массив, например сложность копирования
const arr = ['yo', 'bitch', 'esketit', 'shot', 'flex'];
console.log(typeof arr);   // Output: 'object'




// Массив можно создать с помощью `[]` или `Array(length)` или `Array.from(var)` или `Array.of(...var)`
const arrr = [1, 2, 3];
function arrMakingOf(...primitives) {
  return Array.of(primitives)
}
console.log(arrr);                                                       // Output: [ 1, 2, 3 ]
console.log(Array(5));                                         // Output: [ <5 empty items> ]
console.log(arrMakingOf(10, 20, 30, 40, 50, 60));               // Output: [ 10, 20, 30, 40, 50, 60 ]
console.log(Array.from( {
    name: 'object',
    [Symbol.iterator]() {
      return {
        current: 1,
        last: 5,
        next() {
          return this.current <= this.last ? { done: false, value: this.current++ } : {done: true};
        },
      }
    }
}));                                          // Output: [ 1, 2, 3, 4, 5 ]   - преобразовал итерируемый объект в массив (еще может преобразовать псевдомассив)




// У массива есть метод для преобразования в примитив - только toString()
console.log(String(arr));       // Output: 'yo,bitch,esketit,shot,flex'

// У массива есть длина
console.log(arr.length);      // Output: 5

// Длинну можно перезаписать - это сократит массив или добавит пустых слотов
  // Таким образом можно быстро очистить массив (arr.length = 0)
arr.length = 4
console.log(arr);      // Output: ['yo', 'bitch', 'esketit', 'shot']
arr.length = 6
console.log(arr);      // Output: ['yo', 'bitch', 'esketit', 'shot', <2 empty items> ]



// Обращение к эл-ту с помощью `[]`
console.log(arr[2]);      // Output: 'esketit'

// Можно переписывать или добавлять эл-ты, незаполненные эл-ты между- <n empty item>
arr[7] = '-added-';
arr[2] = '-replaced-';
console.log(arr);      // Output: ['yo','bitch','-replaced-','shot','flex',<2 empty item>,'-added-']

// Если нужно обратиться к эл-ту с конца - `arr.at()`
  // Квадратные скобки читают -1 буквально, `.at()` копирует обращение как из методов строки
console.log(arr[-1]);               // Output: undefined
console.log(arr.at(-1));      // Output: -added-



// === Добавление и удаление эл-тов ===

// Удаление последнего эл-та - '.pop()' (возвращает удаленный эл-т)
console.log(arr.pop(), arr);      // Output: -added-    [ 'yo', 'bitch', '-replaced-', 'shot', 'flex', <2 empty items> ]

// Добавление эл-тов в конец - '.push(...items)' (возвращает новую длинну)
console.log(arr.push('-pushed1-', '-pushed2-'), arr);      // Output: 9    ['yo','bitch','-replaced-','shot','flex',<2 empty items>,'-pushed1-','-pushed2-']

// Удаление первого эл-та и сдвиг всех эл-тов - `.shift()` (возвращает удаленный эл-т)
console.log(arr.shift(), arr);      // Output: 'yo'   ['bitch','-replaced-','shot','flex',<2 empty items>,'-pushed1-','-pushed2-']

// Добавление эл-тов в начало и сдвиг всех эл-тов - 'unshift(...items)' (возвращает новую длинну)
console.log(arr.unshift('-unshifted1-', '-unshifted2-'), arr);      // Output: 10    ['-unshifted1-','-unshifted2-','bitch','-replaced-','shot','flex',<2 empty items>,'-pushed1-','-pushed2-']



// === перебор эл-тов ===

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Для перебора массивов стоит использовать только `for...of` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // `for` пойдет, но он старый, а `for...in` гораздо медленнее (10-100 раз)

// Цикл for..of не дает доступа к индексу, только к значению
for (value of arr) {
  console.log(value);   // Output: -unshifted1- -unshifted2- bitch -replaced-  etc...
}


// === сравнение массивов ===

// Как и другие объекты, переменные содержащие массив равны только если ссылаются на один массив
// Если сравнить объект с примитивом, то он преобразуется в примитив, а после сравнивается (массив всегда преобразуется сначала в строку)
  // Чтобы сравнить массив, нужно итерировать его содержимое
console.log([] == []);   // Output: false
console.log(0 == []);    // Output: true (пустая строка преобразуется в 0)

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;    // добавляем новое значение в "копию"
shoppingCart.push("Банан");
// что в fruits?
console.log( fruits.length );     // Output: 4


// Task 2
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
const styles = ['Джаз', '«Блюз»'];
styles.push('Рок-н-ролл');
styles[Math.round( styles.length/2 ) - 1] = 'Классика';
console.log(styles.shift());     // Output: Джаз
styles.unshift('Рэп', 'Регги');
console.log(styles);             // Output: [ 'Рэп', 'Регги', 'Классика', 'Рок-н-ролл' ]


// Task 3
// Каков результат? Почему?
let arr3 = ["a", "b"];
arr3.push(function() {
  console.log( this );    // Output: [ 'a', 'b', [Function (anonymous)] ]
});
arr3[2](); // В индекс 2 добавляется метод, который выводит структуру этого массива через this


// Task 4
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
  let sum = 0;
  do {
    const num = prompt('input nums to sum', '');
    if (typeof num === 'number') { sum += num }
  } while (num === 'number')
  return sum;
}


// Task 5
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
const getMaxSubSum = (arr) => {
  let currentSumSub = 0;
  let maxSumSub = 0;

  for (value of arr) {
    if (value > 0) {
      currentSumSub += value;
    } else {
      maxSumSub = Math.max(maxSumSub, currentSumSub);
      currentSumSub = 0;
    }
  }
  return maxSumSub;
};
console.log( getMaxSubSum([1, -2, 3, 4, -9, 6]) );    // Output: 
