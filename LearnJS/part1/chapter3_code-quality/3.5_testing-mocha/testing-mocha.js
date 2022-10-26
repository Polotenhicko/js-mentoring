// https://learn.javascript.ru/testing-mocha

/* 
 * Фреймворки для тестирования js (браузер и сервер)
 * 
 * Mocha – основной фреймворк. Общие функции тестирования, такие как `describe()`, `it()` и `assert`       ( https://mochajs.org/ ).
 * Chai – библиотека, с множеством методов assert.                                                         ( https://www.chaijs.com/ )
 * Sinon – библиотека, позволяющая наблюдать за функциями, эмулировать встроенные функции и многое другое  ( https://sinonjs.org/ ).
 * Karma – высокоуровневый фреймворк с возможностью автозапуска тестов                                     ( https://karma-runner.github.io )
*/

/* 
 * Методы функции `assert`
 *  
 * Проверка, что переданное значение равно NaN -  `.isNaN()` 
 * Проверяет value1 == value2 -                   `.equal(value1, value2)`
 * Проверяет value1 === value2 -                  `.strictEqual(value1, value2)`
 * Проверяет value1 != value2 -                   `.notEqual(value1, value2)`
 * Проверяет value1 != value2 -                   `.notStrictEqual(value1, value2)`
 * Проверяет value === true -                     `.isTrue(value)`
 * Проверяет value === false -                    `.isFalse(value)`
*/


// Хорошей практикой считается сначала писать тесты, потом писать функционал
// Спецификация - описание задачи кода и тесты:
  describe("pow", function() {                          // Заголовок - группирует тесты

    it("возводит в степень n", function() {             // Имя теста (что тестируем?)
      assert.equal(pow(2, 3), 8);                       // Тест 
      assert.equal(pow(3, 3), 27);                      // Тест (если предыдущий fail - скипает этот и запускает след. `it()`)
    });
    it("возводит в степень n", function() {             // Если добавить метод `.only` сразу после `it`, выполнится только этот тест, `.skip` пропустит тест
      assert.equal(pow(2, 3), 8);                       
    });

  }); // Также можно обернуть `it()` в функцию и запустить в цикле для автоматизации вставки значений
      // Но! если так делать, то для наглядности рез-та и инкапсуляции зацикленной функции, лучше все это обернуть в еще один `describe()` (вложенный, без доп `it()`)


// В теле `describe()` существуют функции, которые будут выполняться до/после тестов, 
// используются для инициализации, обнуления счётчиков или чего-нибудь ещё между тестами:
  before(() => alert("1 – перед всеми тестами"));
  after(() => alert("4 – после всех тестов"));
  beforeEach(() => alert("2 – перед тестом"));
  afterEach(() => alert("3 – после теста"));          // Расположение в функции не влияет на порядок их выполнения




// **Импорт Mocha и Chai в браузер (в header шаблона)**:
  // добавим стили mocha для отображения результатов 
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">'

  // добавляем сам фреймворк mocha 
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>'

  '<script>'
    // включаем режим тестирования в стиле BDD
    'mocha.setup("bdd");'
  '</script>'

  // добавим chai 
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>'

  '<script>'
    //  Объявим assert chai глобально
    'let assert = chai.assert;'
  '</script>'


// **Реализация тестов в браузере (в body шаблона)**:
  '<script>'
  'function pow(x, n) {'
    // Здесь будет реализация функции
  '}'
  '</script>'

  // скрипт со спецификацией (describe, it...)
  '<script src="test.js"></script>'

  // элемент с id="mocha" будет содержать результаты тестов
  '<div id="mocha"></div>'

  // запускаем тесты!
  '<script>'
  'mocha.run();'
  '</script>'



// Task 1
// Что не так?
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// Решение
describe('Pow', () => {

  it('5 to the power of 1 will be 5', () => {
    assert.equal(pow(5, 1), 5);
  });

  it('5 to the power of 2 will be 25', () => {
    assert.equal(pow(5, 2), 25);
  });

  it('5 to the power of 3 will be 125', () => {
    assert.equal(pow(5, 3), 125);
  });

});