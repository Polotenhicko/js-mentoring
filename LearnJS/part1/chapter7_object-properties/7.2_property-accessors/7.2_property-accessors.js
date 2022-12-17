// https://learn.javascript.ru/property-accessors

// Геттеры и сеттеры - свойства-асессоры - функции(методы) для присвоения и получения значения. Используются как обертки для записи/чтения св-в.

// Св-во-асессор `get propName(){}` позволяет получить значение - геттер
const obj1 = {
  name: 'Vova',
  surname: 'Brown',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
console.log(obj1.fullName);      // Output: 'Vova Brown' - вызвали как обычную функцию, геттер сделал всю работу за кулисами



obj1.fullName = 'Michael Scott';
console.log(obj1.fullName);      // Output: 'Vova Brown' - тк сеттера нет, нельзя перезаписать св-во



// Св-во-асессор `set propName(){}` позволяет записать значение - сеттер
const obj2 = {
  name: 'Vova',
  surname: 'Brown',

  set fullName(fullName) {
    [this.name, this.surname] = fullName.split(' ');
  },
};
console.log(obj2.fullName);      // Output: undefined   - нет геттера

obj2.fullName = 'Alice Cooper';
console.log(
    obj2.name,                   // Output: 'Alice'
    obj2.surname,                // Output: 'Cooper'
);                               // с помощью сеттера одной командой изменили 2 св-ва объекта



// У св-в-асессоров дескрипторы отличаются от св-в - нет writable и value, зато есть get и set.
// То есть можно создавать/изменять геттер и сеттер с помощью Object.defineProperty(obj, 'prop': { get() {return this.name + this.surname} })
console.log(Object.getOwnPropertyDescriptor(obj1, 'fullName'));
// Output:
// {
//   get: [Function: get fullName],
//   set: undefined,
//   enumerable: true,
//   configurable: true
// }

// Создать в дескрипторе и value и set не получится - будет ошибка
// Object.defineProperty(obj1, 'prop', { get() {return this.name + this.surname}, value: '2' });     // TypeError: Invalid property descriptor.



// Геттеры и сеттеры используются как обертки для св-в объекта.
// Мы можем хранить данные в св-ве `_name`, но взаимодействовать с ними через `set name()` `get name()`, при этом добавив туда доп. логику
const obj3 = {
  get name() {
    return this._name;
  },
  set name(str) {
    if (str.length < 2) {
      console.log('too short');
    } else {
      this._name = str;
    }
  },
};

obj3.name = '';      // Output: 'too short'
obj3.name = 'Boba';
console.log(
    obj3.name,        // Output: 'Boba'
    obj3._name,       // Output: 'Boba'   - так лучше не делать (см. ниже)
);
// Существует соглашение о том, что св-ва, начинающиеся с '_'(андерскора) являются внутренними, их не следует читать/менять за пределами объекта



// Можно использовать асессоры для совместимости - допустим раньше объект user принимал имя и возраст, а потом решили, что он будет принимать имя и дату рождения.
// Тогда для того, чтобы новые объекты работали в т.ч со старыми функциями, передающими возраст, можно создать геттер, считающий и возвращающий возраст из даты.
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      return new Date().getFullYear() - this.birthday.getFullYear();
    },
  });
}

const user = new User('John', new Date(1992, 6, 29));
console.log(user.age);                              // Output: 30
console.log(user.birthday.toLocaleDateString());    // Output: 29.07.1992