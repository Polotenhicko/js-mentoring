// Task 5
// Есть ли разница между вызовами:
function Rabbit5() { }
Rabbit5.prototype.test = function() { console.log(this); }

var rabbit5 = new Rabbit5();

rabbit5.test();                         // Output:
rabbit5.__proto__.test();               // Output:
Rabbit5.prototype.test();               // Output:
Object.getPrototypeOf(rabbit5).test();  // Output: