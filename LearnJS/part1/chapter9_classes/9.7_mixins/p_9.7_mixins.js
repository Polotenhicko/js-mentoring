// Task 1
// Что будет в консоли
class User {
  constructor(name) {
    this.name = name;
  }
}

const sayMixin = {
  say(str) {
    console.log(`${str} ${this.name}`);
  },
};

const hiByeMixin = {
  sayHi() {
    super.say('Hi');
  },
  sayBye: function () {
    super.say('Bye');
  }
};

Object.setPrototypeOf(hiByeMixin, sayMixin);


Object.assign(User.prototype, hiByeMixin);
new User('Anton').sayHi();
new User('Anton').sayBye();
// Ответ: Hi Anton    SyntaxError: super   - в функциях нет [[HomeObject]]. Он есть только в методах. Их синтаксис различается.