// [Дескрипторы, глава 7 learjs] Задача с собеса
// Сложность 2/10

const obj = {
  testProp: 123,
}

Object.defineProperty(obj, 'logTestProp', {
  value: function () {
    console.log(this.testProp);
  },
});

obj.logTestProp(); // expect 123
obj.testProp = 345;
obj.logTestProp(); // expect 345