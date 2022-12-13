// https://learn.javascript.ru/bind

// Если передавать метод с this в логике как колбэк, то потеряется контекст.
// Чтобы его привязать используется `bind(this, ...args)()`, `call(this, ...args)`, `apply(this, ...args)`
let user = {
  name: 'Vova',
  getName() {
    console.log(this.name);
  },
};
setTimeout(user.getName, 0);                 // Output: undefined
setTimeout(user.getName.bind(user), 0);      // Output: 'Vova'


// bind(null) ссылается на глобальный объект
function f11() {
  console.log( this );
}
let user11 = {
  g: f11.bind(null)
};
user11.g();         // Output: globalThis


// Также можно запихнуть выполнение в анонимную функцию, тогда сработает замыкание на объекте.
// (!) Но такой метод имеет уязвимость - если мы перезапишем объект во время вызова (зайдет другой пользователь), то мы получим ошибку
setTimeout(() => user.getName(), 0);      // Output: 'Vova'
setTimeout(() => user = null, 1);
// setTimeout(() => user.getName(), 1000);              // TypeError: Cannot read properties of null (reading 'getName')


// Если у объекта много методов, которые мы собираемся активно передавать, имеет смысл заранее перезаписать их с bind():
const user2 = {
  name: 'Anton',
};
for (let key in user) {
  if (typeof user[key] === 'function') {
    user[key] = user[key].bind(user);
  }
}
// (!) Но bind нельзя применить дважды, так что если нужно забиндить на что-то еще, так лучше не делать
setTimeout(user.getName.bind(user2), 0);      // Output: 'Vova'  - ожидалось 'Anton'


// bind также может привязывать аргументы. Таким образом можно 'зафиксировать' часть аргументов:
function mul(a, b) {
  console.log(a * b);
}
const double = mul.bind(null, 2);
console.log(
    double(5),      // Output: 10
    double(10),     // Output: 20
    double(1),      // Output: 2
);


// Если нужно зафиксировать аргументы без фиксации this, то придется создать функцию внутри функции со ссылкой на this
function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  }
}

const obj = {
  name: 'Petya',
  say(time, phrase) {
    console.log(`[${time}] - ${this.name}: ${phrase}`);
  },
};

obj.sayNow = partial(obj.say, new Date().getHours() + ':' + new Date().getMinutes());
obj.sayNow('Hello');



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Что выведет функция?
function f1() {
  console.log( this ); // Output: globalThis
}

let user1 = {
  g: f1.bind(null)
};

user1.g();



// Task 2
// Можем ли мы изменить this дополнительным связыванием? Что выведет этот код?
function f2() {
  console.log(this.name);
}
f2 = f2.bind( {name: "Вася"} ).bind( {name: "Петя" } );
f2();                                                         // Output: 'Вася' - bind работает только 1 раз



// Task 3
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log( bound.test ); // undefined, тк bind полностью поменял контекст функции



// Task 4
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте последнюю строку, чтобы всё работало (других строк изменять не надо).
function askPassword(ok, fail) {
  let password = 'password12345';
  if (password == "rockstar") ok();
  else fail();
}

let user4 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user4.loginOk.bind(user4), user4.loginFail.bind(user4));      // Output: 'Вася failed to log in' - была потеря контекста из-за колбэка



// Task 5
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// Исправьте последнюю строку, чтобы всё работало (других строк изменять не надо).
function askPassword5(ok, fail) {
  let password = 'password1234';
  if (password == 'rockstar') ok();
  else fail();
}

let user5 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword5(user5.login.bind(user5, true), user5.login.bind(user5, false));    // Output: John failed to log in