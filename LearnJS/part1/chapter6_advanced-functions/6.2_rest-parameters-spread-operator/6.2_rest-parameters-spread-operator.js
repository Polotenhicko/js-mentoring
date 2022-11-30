// https://learn.javascript.ru/rest-parameters-spread-operator

// Оператор ...rest - ставится в конце, собирает оставшиеся переменные в *МАССИВ*  (  a, b, c => [a, b, c]  )
const sum = (a, b, ...rest) => a + b + ` [${rest}]`;
console.log( sum(10, 9, 8, 7, 6, 5, 4) );     // Output: 19 [8,7,6,5,4]


// У функции (не стрелочной) есть неявный *ПСЕВДОМАССИВ* `arguments`, который содержит аргументы, переданные в нее
const sum2 = function (a, b, ...rest) {
  return arguments;
};
console.log( sum2(10, 9, 8, 7, 6, 5, 4) );     // Output: [Arguments] { '0': 10, '1': 9, '2': 8, '3': 7, '4': 6, '5': 5, '6': 4 }


// Оператор ...spread - 'расширяет' итерируемый объект в список значений  (  [a, b, c] => a, b, c  )
const arr1 = [1, 2, 3, 2, 1];
const arr2 = [9, 9, 9, 9, 9];
console.log(Math.max(arr1));                              // Output: NaN  (Math.max принимает только примитивы по порядку)
console.log(Math.max(...arr1, ...arr2, 5, 6, 7, 8));      // Output: 9

const string1 = 'Hello this is example string';
console.log(...string1);                                  // Output: H e l l o   t h i s   i s   e x a m p l e   s t r i n g  (по символу)
console.log([...string1]);                                // Output: ['H', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']
console.log(Array.from(string1));                         // Output: ['H', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']
// между последними двумя примерами (23-24 стрк.) есть разница - последний работает на псевдомассивы и итерируемые объекты, а предпоследний только на итерируемые