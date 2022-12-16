// https://learn.javascript.ru/operators

/*
 * Базовые операторы js
 * 
 * `+` - Сложение (если унарный перед значением, преобразует его в число)
 * `-` - Вычитание 
 * `*` - Умножение 
 * `/` - Деление 
 * `%` - Взятие остатка от деления 
 * `**` - Возведение в степень (если число дробное, то взятие кв. корня)
*/

/*
 * Побитовые операторы js
 * 
 * `&` - AND(и)
 * `|` - OR(или) 
 * `^` - XOR(побитовое исключающее или - `1`, когда операнды НЕ равны, иначе `0` )
 * `~` - NOT(побитовое не) 
 * `<<` - LEFT SHIFT(левый сдвиг) - добавляет `n` нулей слева (умножает на 2**n)
 * `>>` - RIGHT SHIFT(правый сдвиг) - убирает `n` битов слева (делит на 2**n)
 * `>>>` - ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) 
*/

/*
 * falsy значения (все остальные, которых здесь нет - truthy)
 *
 * false          (Bool)
 * 0              (Number)
 * -0             (Number)
 * NaN            (Number)
 * 0n (0x0n)      (BigInt)
 * '' ("" ``)     (String)
 * null           (null)
 * undefined      (undefined)
 * document.all   (object)
*/


// Если в выражении с бинарным `+` есть строка, то это конкатенация и вернется строка
console.log(
    '' + 1,     // Output: '1'
    1 + '',     // Output: '1'
    1 - '',     // Output: 1
);

// Все остальные математические операции возвращают число
// при этом falsy значения преобразуются в `0`, truthy в `1`
console.log(
    '' / 1,     // Output: 0
    1 * '',     // Output: 0
    1 - '',     // Output: 1
);

// Объекты преобразуются согласно методу [Symbol.toPrimitive]. По умолчанию выдают '[object Object]'
console.log({} + '');     // Output: '[object Object]'

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
let a = 1;
let b = 1;
let c = ++a;
let d = b++;
// Output: a = 2, b = 2, c = 2, d = 1


// Task 2
let a2 = 2;
let x = 1 + (a2 *= 2); // Output: a2 = 4, x = 5


// Task 3
console.log(
    '' + 1 + 0,         // Output: '10'
    '' - 1 + 0,         // Output: -1
    true + false,       // Output: 1
    6 / '3',            // Output: 2
    '2' * '3',          // Output: 6
    4 + 5 + 'px',       // Output: '9px'
    '$' + 4 + 5,        // Output: '$45'
    '4' - 2,            // Output: 2
    '4px' - 2,          // Output: NaN
    '  -9  ' + 5,       // Output: '  -9  5'
    '  -9  ' - 5,       // Output: -14
    null + 1,           // Output: 1
    undefined + 1,      // Output: NaN
    ' \t \n' - 2,       // Output: -2
    {} + 1,             // Output: '[object Object]1'
    undefined + null,   // Output: NaN
    '   ' + {},         // Output: '   [object Object]'
    true + null,        // Output: 1
    false + undefined,  // Output: NaN
);

// Task 4
// let a4 = prompt("Первое число?", 1);
// let b4 = prompt("Второе число?", 2);
// alert(+a4 + +b4); // 12