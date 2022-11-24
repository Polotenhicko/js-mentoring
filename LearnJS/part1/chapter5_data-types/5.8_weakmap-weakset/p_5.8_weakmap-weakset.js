// [Map, рекурсия, кеш]
// Задача:
// 1. оптимизировать функцию getStringCount из задач на методы массивов, чтобы результат вычисления кешировался в WeakMap

// 2.
//    a. разобраться/загуглить что такое циклическая ссылка в объекте, реализовать такой объект
//    b. разобраться почему без доработок getStringCount при наличии циклической ссылки в объекте
//       получает нежелательное поведение (переполнение стека вызовов)
//    c. попробовать оптизимизровать решение чтобы захендлить это каким-либо образом и написать комментарий над функцией,
//       как она работает с циклическими ссылками

// 3. Опционаольно: желательно после 1 и 2: исследовать как хендлит циклические ссылки метод JSON.stringify на mdn


// getStringCount:
// Реализуйте (с использованием рекурсии) функцию getStringCount,
// которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
const arr = [1, 3, 2, 4, 5];
const obj = {
  first: '1',
  second: 2,
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
};

const cache = new WeakMap;

/**
  * The getStringCount() function count all string variables of object or array.
  *
  * Does not support cyclic references - cyclic property will be ignored.
  * @param item - object or array for counting all it's string type variables
  * @return {number} - Number of strings in item.
*/
const getStringCount = function (item) {
  if (!cache.has(item)) {

    let strSum = 0;

    Object.values(item).forEach(el => {
          if (typeof el === 'string') {
            strSum++;
          } else {
            if (typeof el === 'object' && el !== null && el !== item) {
              strSum += getStringCount(el);
            }
          }
        }
    );
    cache.set(item, strSum);


  }
  return cache.get(item);
};
console.log(getStringCount(arr));                              // Output: 5
console.log(getStringCount(obj));                              // Output: 2
console.log(getStringCount(['1', '2', ['3', '4']]));      // Output: 4



// Реализую циклическую ссылку (ссылается на себя)
const a = {};
a.str = 'string';
a.a = a;
// console.log(a);     // Output: <ref *1> { a: [Circular *1] }

console.log(getStringCount(a));