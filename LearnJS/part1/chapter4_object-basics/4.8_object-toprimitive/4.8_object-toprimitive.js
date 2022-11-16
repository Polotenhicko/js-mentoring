// https://learn.javascript.ru/object-toprimitive

/* 
 * Методы преобразования объектов
 * 
 * obj[Symbol.toPrimitive](hint) - объединяет методы ниже
 * obj.toString()                - obj => string
 * obj.valueOf()                 - obj => number
*/
// Не существует логического(булевого) преобразования для объектов - все объекты true

// Хинты - подсказки, вшитые в операторы-конвертеры типов. Подсказывают методу `Symbol.toPrimitive` приоритет выполнения методов преобразования для объекта. 
  // Спецификация - https://tc39.github.io/ecma262/#sec-toprimitive

// При любом преобразовании кроме прямого обращения к `toString()` и `valueOf()` вызывается `[Symbol.toPrimitive]`,
  // который по хинту определяет какой метод из предыдущих вызвать.

// Хинты это аргумент, который принимает метод `[Symbol.toPrimitive](hint) {} для выбора трансформирующего метода
  // то, какой хинт будет отправлен, зависит от операции, выполняющей преобразование:
  /*
  * String  -> `String()`, `alert(value)` - операции, вызывающие хинт (тк возвращают очевидно строку)
  * Number  -> `/`, `*`, `**` - все операторы, работающие с цифрами кроме `+` и `==`. Также `Number()` и `+унарный`
  * Default -> `бинарный +` и `==` - операции, вызывающие хинт (тк не ясно конкретно какой тип возвращают - строку или число)
  */
// Булевого преобразования для объектов НЕТ - все объекты true

// Самое важное - Когда хинт попадает в [Symbol.toPrimitive], вызывается соотв. метод и начинается проверка - возвращает ли метод примитив,
  // если нет, то вызывает второй метод
  // хинт default тут ведет себя также как number

// По умолчанию `toString()` и `valueOf()` возвращают '[object Object]' и this соответственно (то есть valueOf никогда не возвращается, если приведение через [Symbol.toPrimitive])

const user = {
  name: 'John',
  money: 10000,
  [Symbol.toPrimitive](hint) {
    console.log('hint:', hint, '=>' );
    return hint === 'string' ? 'name: ' + this.name : this.money
  }
};
console.log(String(user))   // Output: 'hint: string =>' 'name: John'
console.log(+user)          // Output: 'hint: number =>' 10000
console.log(user + '')      // Output: 'hint: default =>' '10000'
// ps Методы могут вернуть любой тип, но опять же - объект отфильтруется в [Symbol.toPrimitive]

// Для производительности всегда старайтесь вызывать методы преобразования типов напрямую, а не [Symbol.toPrimitive].

// Упрощенная(для читаемости) логика методов преобразования в прототипе объекта
  // toString() и valueOf - трансформируют, [Symbol.toPrimitive] - управляет с помощью hint и фильтрует не-примитивы

const obj = {

  valueOf() {
    return this;
  },

  toString() {
    return '[object Object]';
  },

  [Symbol.toPrimitive](hint) {

    switch (hint) {
      case 'string':
        if (typeof this.toString() === 'object') {
          return this.valueOf();
        }
        return this.toString();

      case 'number':
        if (typeof this.valueOf() === 'object') {
          return this.toString();
        }
        return this.valueOf();

      case 'default':
        if (typeof this.valueOf() === 'object') {
          return this.toString();
        }
        return this.valueOf();

    }
  },
};


console.log(+obj);         // NaN           <= same as   +obj[Symbol.toPrimitive]('number')

console.log('' + obj);     // [obj Obj]     <= same as   '' + obj[Symbol.toPrimitive]('default')

console.log(String(obj));  // [obj Obj]     <= same as   String( obj[Symbol.toPrimitive]('string') )

