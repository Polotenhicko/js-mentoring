// private-protected-properties-methods

// Внутренний интерфейс - методы и св-ва, доступные из других методов класса, но не снаружи.
// Внешний интерфейс - методы и св-ва, доступные снаружи класса.


// В js есть два типа св-в объекта - Публичные и Приватные
// public - доступные отовсюду (внешний интерфейс)
// private - доступные только внутри класса (внутренний интерфейс)
// (protected) - в js не реализованы, но их ЭМУЛИРУЮТ. Работают как private, но передаются по наследству.


// Публичные (public) св-ва не требуют дополнительного синтаксиса для объявления


// Приватные (private) св-ва создаются со знаком `#` в начале имени переменной
// (!) Аккуратнее, не поддерживается во всех движках
class User {
  #usersLimit = 200;

  #checkLimit(value) {
    if (value < this.#usersLimit) console.log('too much users')
  }

  createName() {
    this['#name'] = 'boba'
    console.log(this['#name']);
  }
}
// new User().#usersLimit     // SyntaxError: Private field '#usersLimit' must be declared in an enclosing class
// new User().#checkLimit     // SyntaxError: Private field '#checkLimit' must be declared in an enclosing class

new User().createName();      // Output: 'boba'  -  можно объявить приватное св-во с помощью метода класса



// Чтобы защитить св-во (protected) можно воспользоваться внутренним соглашением по поводу переменных с `_` (андерскором) в начале и создать МЕТОДЫ эмулирующие св-ва асессоры
// (функции могут принимать несколько методов, в отличие от геттеров сеттеров)
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) console.log('Отрицательное количество воды');
    this._waterAmount = value;
  }

  getWaterAmount() {
    console.log( this._waterAmount );
  }
}

const coffeeMachine = new CoffeeMachine();

coffeeMachine.setWaterAmount(-5);             // Output: 0

coffeeMachine.setWaterAmount(5);
coffeeMachine.getWaterAmount();               // Output: 0


// Защищенные поля будут наследоваться
class Coffee extends CoffeeMachine {}
const coffee = new Coffee();
coffee.getWaterAmount();                      // Output: 0