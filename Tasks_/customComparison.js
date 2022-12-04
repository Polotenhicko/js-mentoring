// Реализуйте с помощью замыкания и методов преобразования объектов в примитивы логику, чтобы для объекта с этой логикой было:
//  obj > obj \\ true

// Ответить на вопросы после реализации:
// Можно ли сделать также, но без замыкания? Например, хранить данные в теле объекта и обращаться к ним через this? Попробуйте сделать.
// Опционально: попробуйте сделать так чтобы:
//  obj > obj => true
//  obj > obj => false
//  obj > obj => true
//  obj > obj => false
// То есть, чтобы один раз было false, а потом true, а потом опять false.

// === Реализация на замыканиях ===
function customComparison () {
  let switcher = 0;
  return {
    valueOf() {switcher++; return switcher % 4 ? 1 : -1}
  }
}
const obj = customComparison();
console.log(
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
    obj > obj,            // Output: true
    obj > obj,            // Output: false
);

// === Реализация на конструкторе (this) ===
function CustomComparison () {
  this.switcher = 0;
  this.valueOf = function () {this.switcher++; return this.switcher % 4 ? 1 : -1}
}
const obj2 = new CustomComparison();
console.log(
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
    obj2 > obj2,            // Output: true
    obj2 > obj2,            // Output: false
);