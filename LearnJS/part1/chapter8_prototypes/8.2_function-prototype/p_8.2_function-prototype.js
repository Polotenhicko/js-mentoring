// Task 1
// Есть ли разница между вызовами:
function Rabbit() { }
Rabbit.prototype.test = function() { console.log(this); return this}

var rabbit = new Rabbit();

rabbit.test();                         // Output: rabbit obj
rabbit.__proto__.test();               // Output: Rabbit.prototype obj
Rabbit.prototype.test();               // Output: Rabbit.prototype obj
Object.getPrototypeOf(rabbit).test();  // Output: Rabbit.prototype obj

// this ссылается на ближайший внешний объект (ближайший объект перед точкой).


// Task 2
// В функции-конструкторе запихать в прототип 2 объекта и вызвать их методы в новом экземпляре.
const obj1 = {
  hide() {console.log(this, 'hide!')},
};
const obj2 = {
  run() {console.log(this, 'run!')},
};

function ObjInstance () { }
ObjInstance.prototype.obj1 = obj1;
ObjInstance.prototype.obj2 = obj2;
ObjInstance.prototype.jump = function () {console.log(this, 'jump!')};

const objInstance = new ObjInstance();
objInstance.obj1.hide();    // Output: { hide: [Function: hide] } hide!     (this ссылается на obj1)
objInstance.obj2.run();     // Output: { run: [Function: run] } 'run!'      (this ссылается на obj2)
objInstance.jump();         // Output: ObjInstance {} 'jump!'               (this ссылается на constructor)
