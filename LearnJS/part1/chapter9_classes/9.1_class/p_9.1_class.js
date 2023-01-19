// Task 1
// [ООП, глава 9] Задача с собеса
// Сложность 6/10 на собесе, обычно 3/10
// Дан код, ответить на вопросы к нему

// 1. Почему одни и те же имена свойств, но не ругается интерпретатор?
// 2. Что такое геттеры и есть ли тут они? Что такое методы и есть ли тут они?
// 3. Что такое класс и экземпляр класса?
// 4. Куда записывается каждое свойство?
// 5. Что выведется в результате выполнения for и spread? Почему?

class Item1 {
  data = 10;
  get() {}
  static data = 20;
  static get() {}
}

// for (const key in Item) { console.log(key); }
// for (const key in new Item()) { console.log(key); }

// console.log({...Item});
// console.log({...new Item1()});


// 1) Разные типы свойств - статическое и публичное
// 2) Геттер - свойство-асессор позволяющее получить доступ к защищенному св-ву. Тут их нет, тк после `get` у них обязательно должно быть имя.
//    Метод - свойство объекта или класса, представляющее собой функцию. Синтаксис - `method() {}`. Тут два метода - статический и публичный `get()`.
// 3) Класс это конструктор объектов, созданный с помощью ключевого слова `class`. Экземпляр класса это объект, созданный классом с помощью ключевого слова `new`.
// 4) Статические св-ва => класс. Публичные св-ва => прототип. Приватные св-ва => прототип.
// 5) В результате первого for выведется: static data - методы `enumerable: false`, остальное лежит в прототипе.
//    В результате второго for выведется: data - методы `enumerable: false`, остальное лежит в классе.
//    В результате первого spread выведется: { static data } - методы `enumerable: false`, остальное лежит в классе.
//    В результате второго spread выведется: { data } - методы `enumerable: false`, остальное лежит в классе.



// Task 2
// [ООП, главы 8,9] Задача с собеса
// Сложность 8/10 на собесе, обычная 4/10
// With given example, need to write prototype analog
class CBasicItem {
    constructor(_testProp) {
        this._parentProp = _testProp + 100;
    }

    getParentProp() {
        return this._parentProp;
    }
}

class CItem extends CBasicItem {
    static data = 5;

    constructor(_testProp) {
        super(_testProp);
        this._testProp = _testProp;
    }

    getProp() {
        return this._testProp + this.getParentProp() + CItem.data;
    }
}

console.log(new CItem(1000).getProp()); // expect 2105



// Решение: ------------------------------------------------------------------------------------------------------------
function PBasicItem(_testProp) {
  this._parentProp = _testProp + 100;

  this.getParentProp = function () {
    return this._parentProp;
  }
}

function PItem(_testProp) {
  Object.setPrototypeOf(PItem, PBasicItem);

  PItem.data = 5;

  this._testProp = _testProp;

  this.getProp = function () {
    const parent = new (Object.getPrototypeOf(Object.getPrototypeOf(this).constructor))(_testProp);     // хы
    return this._testProp + parent.getParentProp() + PItem.data;
  }
}

console.log(new PItem(1000).getProp());
