// https://learn.javascript.ru/symbol

// Символ это уникальный идентификатор, который выполняет функции свойства объекта, только скрыт от обращения и перезаписи ( искл. `Object.assign()` )
// Создается с помощью Symbol('description')

// Символ не может быть неявно преобразован
console.log(String(Symbol('example')))    // Output: 'Symbol(example)'
// console.log( '' + Symbol('example'))             // Output: TypeError: Cannot convert a Symbol value to a string


// Все символы уникальны
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 == id2)   // Output: false

// У символов есть глобальный реестр. К нему можно обращаться в любом месте кода `Symbol.for(key)` - создание(если нет)/обращение
const example = Symbol.for('bomb')    // создали
const example2 = Symbol.for('bomb')   // обратились
console.log(example == example2)      // Output: true

// Если нужно наоборот узнать имя ГЛОБАЛЬНОГО символа по переменной - `Symbol.keyFor(var)`, локальным недоступно
console.log(Symbol.keyFor(example))   // Output: bomb
console.log(Symbol.keyFor(id1))       // Output: undefined (локальный)

// Символ не может неявно преобразовать свой тип, только явно - выводится `Symbol(id)`, но можно обратиться к описанию:
console.log(id1.description)

// Для вшивания символа в объект используется динамическое именование св-ва:
const obj = {
  [id1]: 'kek'
};
obj[id2] = 'lel';
console.log(obj.id1)    // Output: undefined
console.log(obj[id1])   // Output: kek
console.log(obj[id2])   // Output: lel

// Итерация for...in игнорирует символы:
for (let key in obj) {
  console.log(key)      // Output: (пусто)
}

// НО! `Object.assign()` копирует символы!
const obj2 = Object.assign({}, obj);
console.log(obj2[id1], obj2[id2])

// НО! Существуют методы, чтобы достать символы: 
// Object.getOwnPropertySymbols(obj) - получить все свойствава-символы
// Reflect.ownKeys(obj) - получить все св-ва, включая символы

// Также существуют системные символы, которые описаны в спецификации 
// (`Symbol.hasInstance`, `Symbol.isConcatSpreadable`, `Symbol.iterator`, `Symbol.toPrimitive`)
// Спецификация - https://tc39.github.io/ecma262/#sec-well-known-symbols