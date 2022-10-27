'use strict'
// Задача на конструктор заказа:
// Создайте функцию-конструктор GroceryBasket(), создающую const-объекты, с методами addItem(), deleteItem(), getCheck(). 
// getCheck() должен группировать аналогичные объекты в одну позицию, выдавать стоимости объектов и итоговую стоимость корзины.


function Item(name, price) {
  this.name = name;
  this.price = price;
  this.count = 1;
}
const milk = new Item('Milk 1L', 0.7);
const bread = new Item('Bread', 1.6);
const potatoes = new Item('Potatoes 1Kg', 1.1);
const cheese = new Item('Cheese 200gr', 2.2);


function Check() {
  this.items = [];

  this.addItem = function(item) {
    if (this.items.find((i) => i.name === item.name)) {
      this.items[this.items.findIndex((i) => i.name === item.name)].count += 1
    } else {
      this.items.push(item);
    }
    return this;
  };

  this.deleteItem = function(id) {
    this.items.splice(id - 1, 1);
    return this;
  };

  // Если есть промокод, передавайте его в метод при вызове
  this.getCheck = function(code) {
    const totalPrice = this.items.map(i => i = i.price).reduce((sum, e) => sum + e)
    let discount = 0;
    if (code === 'WINTER20') discount = 20;
    if (code === 'EMPLOYEE50') discount = 50;
    if (code === '6SENIORS99') discount = 99;

    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i + 1}. ${this.items[i].price.toFixed(2)}$ - ${this.items[i].name} (${this.items[i].count})`);
    };
    console.log(`Discount: ${discount}%`);
    if (discount) {
      console.log(`Total price: ${totalPrice.toFixed(2)}$ => ${(totalPrice - totalPrice / 100 * discount).toFixed(2)}$`);
    } else {
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    };
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


const check = new Check()
check.addItem(milk).addItem(bread).addItem(potatoes).addItem(cheese).deleteItem(2).addItem(cheese).getCheck('WINTER20')