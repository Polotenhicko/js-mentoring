// глубокая статья на английском
// http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html

// Старая статья про `toString()`, `valueOf()` без `[Symbol.toPrimitive]`
// https://learn.javascript.ru/object-conversion

// Примеры задачи на `toString()`
// http://old.code.mu/javascript/object/toString.html
// Примеры задачи на `valueOf()`
// http://old.code.mu/javascript/object/valueOf.html

// хорошая статья на русском с большим количеством задач и объяснений решений по теме (внизу)
// https://medium.com/@sergeybulavyk/преобразование-типов-в-javascript-35a15ddfc333
// -------------------------------------------------------------------------------------------------------------------------------------------



// === теория ===
// За преобразование объекта в примитив отвечают несколько вшитых в прототип объекта методов - `toString()`, `valueOf()` и `[Symbol.toPrimitive]`.
// При любом преобразовании кроме прямого обращения к `toString()` и `valueOf()` вызывается `[Symbol.toPrimitive]`,
  // который по хинту определяет какой метод из предыдущих вызвать.

// Хинты это аргумент, который принимает метод `[Symbol.toPrimitive](hint) {} для выбора `.
  // то, какой хинт будет отправлен, зависит от операции, выполняющей преобразование:
    // String  -> `String()`, `alert(value)` - операции, вызывающие хинт (тк возвращают очевидно строку)
    // Number  -> `/`, `*`, `**` - все операторы, работающие с цифрами кроме `+` и `==`. Также `Number()` и `+унарный`
    // Default -> `бинарный +` и `==` - операции, вызывающие хинт (тк не ясно конкретно какой тип возвращают - строку или число)
  // Булевого преобразования для объектов НЕТ - все объекты true

// Самое важное - Когда хинт попадает в [Symbol.toPrimitive], вызывается соотв. метод и начинается проверка - возвращает ли метод примитив,
  // если нет, то вызывает второй метод
  // хинт default тут ведет себя также как number

// --- пример для того, чтобы разобраться ---
const user = {
  name: 'John',
  money: 10000,
  [Symbol.toPrimitive](hint) {
    console.log('hint:', hint, '=>' );
    return hint === 'string' ? 'name: ' + this.name : this.money
  }
};
// console.log(String(user))   // Output: 'hint: string =>' 'name: John'
// console.log(+user)          // Output: 'hint: number =>' 10000
// console.log(user + '')      // Output: 'hint: default =>' '10000'
// Если ответственный за преобразование метод не сможет вернуть примитив (или метода нет), то вызовется второй метод.
// default сначала проверяет можно ли выдать число, если нет, выдает строку

// ps Методы могут вернуть любой тип, но не объект


// === план ===

// --- задания НЕ глубокий лвл ---
// Что выведет консоль?
const foo = {
  name: 'dupa',
  value: 10,
};
console.log(+foo);
console.log(foo + '');
console.log(String(foo));
// По умолчанию `toString()` и `valueOf()` возвращают '[object Object]' и this
// Почему тут NaN - это попытка вернуть +строку тк, valueOf возвращает НЕ примитив. Если `toString() {return 10}`, то +строка будет нормально преобразовываться
// -------------------------------------

const russiaPop = {
  country: 'russia',
  population: 10000,
}
const chinaPop = {
  country: 'china',
  population: 100000,
}
const americaPop = {
  country: 'america',
  population: 15000,
}
const worldPop = russiaPop + chinaPop + americaPop        // какого хуя '[object Object][object Object][object Object]'
console.log(worldPop)                                     // потому что через default прогоняется в стринг




const fooo = {
  toString: function () {
    return "foo";
  },
  valueOf: function () {
    return 5;
  }
};
console.log(fooo + "bar"); // 5bar
console.log([fooo, "bar"].join("")); // foobar          // Потому что передается хинт default, который имеет number в приоритете

// ps для (психов)производительности всегда старайтесь вызывать методы преобразования типов напрямую, а не [Symbol.toPrimitive].


// Date() пока не исследую, что о нем известно:
// 1. Date это object (не примитивный тип)
// 2. по умолчанию default вызывает строку, а не число, как у нормальных объектов
// 3. Когда мы преобразовываем Date через number hint, если все ок, возвращается кол-во мсек от 1 Января 1970, иначе NaN
exampleDate = new Date()
console.log(exampleDate + '');
console.log(+exampleDate);


// === финалочка для закрепления ===

// // === начинать с примитивов если много времени ===
// true + false             // 1                     + вызывает численное преобразование
// 12 / "6"                 // 2                     / вызывает численное преобразование 6
// "number" + 15 + 3        // 'number153'           Оператор + выполняется слева направо
// 15 + 3 + "number"        // '18number'            18 + ‘number’, и тк один из операндов строка, 18 становится строкой
// "foo" + + "bar"          // 'fooNaN'              +Унарный имеет приоритет выше бинарный +
// 'true' == true           // false                 в сравнении все неподходящее стремится стать числом
// false == 'false'         // false                 в сравнении все неподходящее стремится стать числом
// null == ''               // false                 null равен только null или undefined
// !!"false" == !!"true"    // true                  это не пустые строки


// для психов
// Важно понимать, что в массиве toString() работает иначе чем в объекте - возвращает не [obj Obj], а строку,всех,значений

// [1] + 1                  // "11"                  Массив преобразуется в строку "1"
// [1] > null               // true                  ==> '1' > 0 ==> 1 > 0 ==> true
// [] == []
// [] == ![]
// ['x'] == 'x'             // true                  ['x'] преобразуется в число (this), но проверку не проходит и выдает строку 'x'
// [] + null + 1            // 'null1'               ==>  '' + null + 1 ==>  'null' + 1 ==> 'null1'
// [1,2,3] == [1,2,3]       // false                 это разные экземпляры, тут нет преобразований
// {}+[]+{}+[1]             // '0[object Object]1'   первое воспринимается как блок кода без скобочек ==> +[]+{}+[1] ==> 0 + {} + [1] ==> 0 + '[object Object]' + [1] ==> '0[object Object]' + [1] ==> '0[object Object]' + '1' ==> '0[object Object]1'
// !+[]+[]+![]              // 'truefalse'           ==> !(+[]) + [] + (![]) ==> !0 + [] + false ==> true + [] + false ==> true + '' + false ==> 'truefalse'