// https://learn.javascript.ru/constructor-new

// Функции-конструкторы пишутся с большой буквы и выполняется с помощью `new`. Нужны, чтобы создавать много однотипных объектов
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  let example = new User("Jack");
  console.log(new User("Jack"))
  console.log(example)


// Выполнение `new User("Jack")` возможно благодаря this (стрелочные функции не работают):
  function User(name) {
    // this = {};  (неявно)

    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;

    // return this;  (неявно)
  }


// Если функция создана с помощью `new`, у нее появляется св-во `new.target` - его можно использовать для соотв. проверки
  function example2() {
    console.log(new.target)
  }
  example2()
  new example2()


// Если нужно быстро инкапсулировать объект, можно использовать `new` при объявлении функции
  // функция не сохранится - объект создается и тут же вызывается:
  let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  };


// Конструктор неявно возвращает `this`. Если вручную прописать в return объект, то он вернется вместо `this`. Примитивные значения не вернутся
  function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- возвращает этот объект
  }
  console.log( new BigUser().name );  // Godzilla, получили этот объект


// Можно создавать методы в конструкторе:
function Example3(title) {
  this.title = title;
  this.method = function() { console.log('it\'s', title); };
}
example3 = new Example3('example 3');
example3.method();



// Task 1
// При каких условиях функции будут равны?
let obj = {}
function A() { return obj }
function B() { return obj }

let a = new A;
let b = new B;

console.log( a == b ); // true


// Task 2
function Calculator() {
  this.read = function(a, b) {
    this.a = a;
    this.b = b;
  };

  this.sum = function() {
    return this.a + this.b
  };
  
  this.mul = function() {
    return this.a * this.b
  };
};

const calculator = new Calculator;
calculator.read(10, 2);
console.log(calculator.sum(), calculator.mul());


// Task 3
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function(value) {
    this.value += value;
  }
}

const accumulator = new Accumulator(1);
accumulator.read(5);
accumulator.read(3);
console.log(accumulator.value);