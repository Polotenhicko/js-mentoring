// https://learn.javascript.ru/prototype-inheritance

// Прототипное наследование - возможность создавать объекты на базе других объектов
// Объекты имеют скрытое св-во [[Prototype]], которое либо равно null, либо ссылается на другой объект - прототип

// Когда нужно прочитать св-во, а оно отсутствует, оно ищется в [[Prototype]]


// (!) Изменение [[Prototype]] объекта обширно влияет на производительность кода.
// Вместо этого лучше создать объект с нужным [[Prototype]] через `Object.create(prototype, ...props?)`

// С помощью свойства-асессора `__proto__` можно задать/изменить [[Prototype]]   (`__proto__` это геттер/сеттер для [[Prototype]])
// `__proto__` - это УСТАРЕВШИЙ СИНТАКСИС. Также можно задать [[Prototype]] с помощью `Object.setPrototypeOf(obj, prototype)` и узнать его с помощью `Object.getPrototypeOf(obj)`
const animal = {
  eats: true,
};
const rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;  // Теперь rabbit наследует св-ва от animal

console.log(
    rabbit.eats,            // Output: true
    rabbit.jumps,           // Output: true
);

const longEar = {
  earLength: 10,
  __proto__: rabbit,        // longEar наследует св-ва от rabbit, следовательно и от animal
};
console.log(longEar.eats);  // Output: true

// (!) Ссылки не могут идти по-кругу
// animal.__proto__ = longEar;       // TypeError: Cyclic __proto__ value



// Объект обращается к [[Prototype]] только для чтения - нельзя перезаписать или удалить св-во прототипа через объект-наследник
delete rabbit.eats;
console.log(animal.eats);   // Output: true


// Св-ва асессоры (гетеры, сетеры) прототипа работают как методы - благодаря this они обращаются к наследнику и работают с его св-ми.
const user = {
  name: 'John',
  surname: 'Smith',
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(str) {
    [this.name, this.surname] = str.split(' ');
  },
};

const admin = {
  __proto__: user,              // admin теперь наследник user
  isAdmin: true,
};

console.log(admin.fullName);    // Output: 'John Smith'
admin.fullName = 'Cool Guy';
console.log(
    admin.fullName,             // Output: 'Cool Guy'
    user.fullName,              // Output: 'John Smith'
    admin,                      // Output: { isAdmin: true, name: 'Cool', surname: 'Guy' }
);


// for...in захватывает и св-ва объекта и св-ва его прототипа. Если нам нужны только св-ва объекта, для этого есть проверка `.hasOwnProperty(prop)`
for (let prop in longEar) {
  if (longEar.hasOwnProperty(prop)) {
    console.log(`Own property: ${prop}`);
  } else {
    console.log(`Prototype property: ${prop}`);
  }
}                                                 // Output: Own property: earLength     Prototype property: jumps     Prototype property: eats



// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?
let animal1 = {
  jumps: null
};
let rabbit1 = {
  __proto__: animal1,
  jumps: true
};

console.log( rabbit1.jumps ); // (1) true

delete rabbit1.jumps;
console.log( rabbit1.jumps ); // (2) null

delete animal1.jumps;
console.log( rabbit1.jumps ); // (3) undefined


// Task 2
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head.
// Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
let head2 = {
  glasses: 1
};
let table2 = {
  pen: 3
};
let bed2 = {
  sheet: 1,
  pillow: 2
};
let pockets2 = {
  money: 2000
};

table2.__proto__ = head2;
bed2.__proto__ = table2;
pockets2.__proto__ = bed2;
console.log(
    pockets2.pen,         // Output: 3
    bed2.glasses,         // Output: 1      glasses быстрее получить через head2.glasses тк во время поимка не придется обращаться к [[Prototype]]
);


// Task 3
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal3 = {
  eat() {
    this.full = true;
  }
};

let rabbit3 = {
  __proto__: animal3
};

rabbit3.eat();          // св-во фул присвоится объекту rabbit:
console.log(rabbit3);   // Output: { full: true }


// Task 4
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
let hamster = {
  stomach: [],              // У хомяков общий желудок. Нужно присвоить каждому хомяку свой отдельный.

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple