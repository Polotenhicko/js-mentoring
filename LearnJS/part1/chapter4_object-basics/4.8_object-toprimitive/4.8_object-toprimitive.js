// https://learn.javascript.ru/object-toprimitive

/* 
 * Методы преобразования объектов (логика описывается в объекте)
 * 
 * obj[Symbol.toPrimitive](hint) - объединяет методы ниже
 * obj.toString()                - obj => string
 * obj.valueOf()                 - obj => number
*/
// Не существует логического(булевого) преобразования для объектов - все объекты true
// Также все методы по желанию могут возвращать любой примитивный тип (объект игнорируется)

// Хинты - подсказки, вшитые в операторы-конвертеры типов. Подсказывают методу `Symbol.toPrimitive` приоритет выполнения методов преобразования для объекта. 
  // Спецификация - https://tc39.github.io/ecma262/#sec-toprimitive


// Когда требуется автоматически преобразовать объект в символ, вызывается метод с символьным ключом `obj[Symbol.toPrimitive](hint) {}`
  // в этом методе в зависимости от хинта объекта вызывается определенный метод преобразования
    // приоритет хинтов: string => number => default(number => string)
  // если метод не находится, то вызывается `obj.toString()` и `obj.valueOf()`. Если последний отсутствует, `.toString()` становится универсальным
const user = {
  name: 'John',
  money: 10000,
  [Symbol.toPrimitive](hint) {
    console.log('hint:', hint, '=>' );
    return hint === 'string' ? 'name: ' + this.name : this.money
  }
};
console.log(String(user))   // Output: 'hint: string =>' 'name: Jhon'
console.log(+user)          // Output: 'hint: number =>' 10000
console.log(user + '')      // Output: 'hint: default =>' '10000'


// Методы `.toString()` и `.valueOf()` по умолчанию вшиты в объект, они возвращают "[object Object]" или сам объект соответственно
  // Поэтому когда мы отображаем объект с преобразованием без измененных методов, он выводит "[object Object]" или себя
const example = {
  test: 'test1',
};
console.log(example.toString());  // Output: "[object Object]"
console.log(Number(example));     // Output: NaN

