// https://learn.javascript.ru/mixins


// С примесями могут возникнуть конфликты, если они перезаписывают св-ва класса. Нужно аккуратнее выбирать для них имя.



// Примесь (mixin) - это класс(объект), в котором хранятся методы для других классов, чтобы вшивать их без наследования.
const sayHiMixin = {
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};



// Для вшивания примеси в класс просто копируем методы из примеси в 'prototype' класса.
class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);
new User('Kek').sayHi();              // Output: 'Hi, Kek'



// Примеси могут наследовать друг-друга и создавать таким образом микс-цепочки
// При этом можно пользоваться `super` для обращения к родительской примеси - методы ищутся в прототипе примеси, а не класса.
// тк `super` обращается к `[[HomeObject]].[[Prototype]]` метода, а `[[HomeObject]]` всегда ссылается на объект, в котором объявлен метод.
const sayByeMixin = {
  __proto__: sayHiMixin,

  sayBye() {
    console.log(`Bye, ${this.name}`);
  },
}

Object.assign(User.prototype, sayByeMixin);
new User('Kek').sayHi();               // Output: 'Hi, Kek'
new User('Kek').sayBye();              // Output: 'Bye, Kek'


// ---------------------------------------------------------------------------------------------------------------------
// === Пример использования примеси - EventMixin ===
// Примесь будет определять 3 метода для работы с событиями:
//  .trigger(eventName, ...args) - генерирует событие
//  .on(eventName, handler) - принимает событие и аргументы из .trigger и назначает обработчик события
//  .off(eventName, handler) - удаляет обработчик события

const eventMixin = {
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) { return null; }     // Выход из метода если обработчиков нет

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))      // Вызов всех хендлеров для события
  },

  on(eventName, handler) {
    if (!this._eventHandlers) { this._eventHandlers = []; }
    if (!this._eventHandlers[eventName]) { this._eventHandlers[eventName] = [] }      // Создание массива событий и массива с обработчиками по событию

    this._eventHandlers[eventName].push(handler);                                     // Запихиваем обработчик в событие
  },

  off(eventName, handler) {
    const handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) { return null; }                                                   // Выход из метода если обработчиков нет

    for (let i = 0; i < handlers.length; i++) {                                       // Удаляет
      if (handlers[i] === handler) { handlers.splice(i--, 1); }
    }
  },
};


class Menu {
  choose(value) {                                                                           // Метод для выбора триггера (эмулирует клик)
    this.trigger('click', value);
  }
}

Object.assign(Menu.prototype, eventMixin);                                                  // Замешиваем миксин в класс
const menu = new Menu();

menu.on('click', value => console.log(`Выбранное значение: ${value}`));    // Назначаем обработчик события на событие 'click'

menu.choose('123');                                                                   // Кликаем на событие, передаем при клике '123'
