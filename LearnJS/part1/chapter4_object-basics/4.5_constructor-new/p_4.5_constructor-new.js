'use strict';

// Task 1
// Задача на конструктор заказа:
// Создайте функцию-конструктор GroceryBasket(), создающую const-объекты, с методами addItem(), deleteItem(), getCheck(). 
// getCheck() должен группировать аналогичные объекты в одну позицию, выдавать стоимости объектов и итоговую стоимость корзины.
debugger

// Конструктор предметов и 4 созданных предмета - milk, bread, potatoes, cheese
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.count = 1;
}

const milk = new Item('Milk 1L', 0.7);
const bread = new Item('Bread', 1.6);
const potatoes = new Item('Potatoes 1Kg', 1.1);
const cheese = new Item('Cheese 200gr', 2.2);


// Конструктор чека
function Check() {
  this.items = [];
  this.lock = false;

  // .lockOrder() - Блокирует изменения предметов в чеке
  this.lockOrder = function () {
    this.lock = true;
    console.log('Check is locked now...');
    return this;
  };

  // .unlockOrder() - Разблокирует изменения предметов в чеке
  this.unlockOrder = function () {
    this.lock = false;
    console.log('Check is unlocked now...');
    return this;
  };

  // .addItem(item) - Добавляет предмет, созданный в конструкторе предметов - milk, bread, potatoes, cheese
  this.addItem = function (item) {
    if (this.lock) {
      console.log('can\'t do that - check is locked');
      return this;
    }
    if (this.items.find((i) => i.name === item.name)) {
      this.items[this.items.findIndex((i) => i.name === item.name)].count += 1;
    } else {
      this.items.push(item);
    }
    return this;
  };

  // .deleteItem(index) - Удаляет предмет по его индексу (начиная с 0)
  this.deleteItem = function (index) {
    if (this.lock) {
      console.log('can\'t do that - check is locked');
      return this;
    }
    this.items.splice(index - 1, 1);
    return this;
  };

  // .getCheck(code) - Формирует чек. Если есть промокод, передавайте его как аргумент при вызове
  this.getCheck = function (code) {
    const totalPrice = this.items.map(i => i.price).reduce((sum, e) => sum + e);
    let discount = 0;
    if (code === 'WINTER20') {
      discount = 20;
    }
    if (code === 'EMPLOYEE50') {
      discount = 50;
    }
    if (code === '6SENIORS99') {
      discount = 99;
    }

    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i + 1}. ${this.items[i].price.toFixed(2)}$ - ${this.items[i].name} (${this.items[i].count})`);
    }
    console.log(`Discount: ${discount}%`);
    if (discount) {
      console.log(`Total price: ${totalPrice.toFixed(2)}$ => ${(totalPrice - totalPrice / 100 * discount).toFixed(2)}$`);
    } else {
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
    return this;
  };
}

/*
 * Output:
 * {
 *  1. 0.70$ - Milk 1L (1)
 *  2. 1.60$ - Bread (1)
 *  3. 1.10$ - Potatoes 1Kg (2)
 *  4. 2.20$ - Cheese 200gr (3)
 *  Discount: 20%
 *  Total price: ̶5̶.̶6̶0̶$̶  1.12$
 * }
*/

const check = new Check();
check.addItem(milk)
    .addItem(bread)
    .addItem(potatoes)
    .addItem(cheese)
    .deleteItem(2)
    .addItem(potatoes)
    .getCheck('WINTER20');



// Task 2
// Тестануть new.target
// function test() {
//   console.log(new.target)
// }
// test();
// new test();