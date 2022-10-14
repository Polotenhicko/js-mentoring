// https://learn.javascript.ru/strict-mode

// Строгий режим это стандарт, оптимизирующий отладку и работу кода
// Включается командой `'use strict'` в начале тела блока или кода


// Practice
// В обычном режиме следующие ошибки игнорируются и вызывают непредвиденные результаты выполнения:
'use strict';

// Err: нельзя переписывать глобальные сущности
let undefined = 5; 
let Infinity = 5;

// Err: св-во foo не поддерживает перезапись
let obj = {};
Object.defineProperty(obj, 'foo', { value: 1, writable: false });
obj.foo = 1;

// Err: у св-ва foo есть только геттер
let obj2 = { get foo() { return 17; } };
obj2.foo = 2;

// Err: Объект fixedObj сделан нерасширяемым с помощью метода Object.preventExtensions
let fixedObj = {};
Object.preventExtensions(fixedObj);
fixed.bar= 1;

// Err: попытка удаления неудаляемого св-ва
delete Array.prototype;

// Err: одинаковые имена свойств объекта
let o = { a: 1, a: 2 };

// Err: одинаковые имена аргументов функции
const multiply = (x, x, y) => x*x*y;

// Err: звпрещено объявлять переменные в `eval()`. 
// (С `eval` и `arguments` вообще много ограничений)
eval('let x');


