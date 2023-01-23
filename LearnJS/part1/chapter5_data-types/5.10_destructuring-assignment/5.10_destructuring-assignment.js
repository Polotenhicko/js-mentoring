// https://learn.javascript.ru/destructuring-assignment

// Деструктурирующее присваивание - 'распаковка' ПЕРЕБИРАЕМЫХ объектов в несколько переменных
const [firstName, secondName] = 'Cool Man Nice Code'.split(' ');
console.log(firstName);          // Output: 'Cool'
console.log(secondName);         // Output: 'Man'
const [a, b, c] = 'abc';
console.log(a, b, c);            // Output: 'a' 'b' 'c'
const [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);    // Output: 1 2 3


// Можно пропустить переменную, указав 'холостую' запятую
const [jopapa, , jepopo] = 'Cool Man Nice Code'.split(' ');
console.log(jopapa);    // Output: 'Cool'
console.log(jepopo);    // Output: 'Nice'


// Можно деструктурирующе присваивать св-ва объекту
const obj = {};
[obj.name, obj.value] = 'Cool Man Nice Code'.split(' ');
console.log(obj);     // Output: { name: 'Cool', value: 'Man' }


// Можно поменять переменные местами без буфера
let j = 'jojo';
let n = 'naruto';
let o = 'onePeace';
[j, n, o] = [n, o, j];
console.log(j, n, o);      // Output: 'naruto' 'onePeace' 'jojo'


// Оператор ...rest - ставится в конце, собирает оставшиеся переменные в массив
const [jepo, jepa, ...jopi] = 'Cool Man Nice Code'.split(' ');
console.log(jopi[0]);     // Output: 'Nice'
console.log(jopi[1]);     // Output: 'Code'


// Деструктуризация поддерживает значения переменных по-умолчанию
const [
  value = 'something',
  name1 = 'somefing'
      .split('')
      .reverse()
      .join('')
] = 'j';
console.log(value, name1);     // Output: 'j' 'gnifemos'


// ---------------------------------------------------------------------------------------------------------------------
// Деструктуризация для объекта происходит с помощью фигурных скобок - `{}` и ключей свойств (если такого ключа нет - присваивает undefined)
// если нужно поместить значение в переменную с другим названием - {length: renamedProp} (length => renamedProp)
const fish = {
  family: 'clown',
  mass: 15,
  length: 25,
};
const {family, length: renamedProp, mass} = fish;
console.log(family, renamedProp, mass);    // Output: 'clown' 25 15


// JS видит `{}` вне выражения (без let, const и тп в начале) как блок кода. Поэтому иногда приходится использовать `()`
let phone = { q: 12345678910, w: 'huawei', e: 'red',};
let phoneNumber = null;
let model = null;
let color = null;

({q: phoneNumber, w: model, e: color} = phone);
console.log(phoneNumber, model, color);     // Output: 12345678910 'huawei' 'red'
console.log({phoneNumber, model, color});     // Output: { phoneNumber: 12345678910, model: 'huawei', color: 'red' }
console.log([phoneNumber, model, color]);     // Output: [ 12345678910, 'huawei', 'red' ]


// Для вложенных объектов/массивов будет вложенная деструктуризация (...rest тут чет не работает)
const options = {
  size: {
    width: 10,
    weight: 20,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

const {
  size: {
    width,
    weight,
  },
  items: [item1, item2],
  title = 'default',
} = options;

console.log(title, width, weight, item1, item2);     // Output: 'default' 10 20 'Cake' 'Donut'
// тут мы дробим `size` и `items` на их переменные, поэтому доступ к `size` и `items` невозможен


// ---------------------------------------------------------------------------------------------------------------------
// Если много параметров, можно не передавать все параметры в функцию, а изначально объявить их как св-ва объекта и передавать неполный объект
// тогда не важна очередность и наличие параметров - они будут подтягиваться по имени
function showMenu({title = 'menu', width = 100, height = 200} = {}) {
  console.log(`${title} ${width} ${height}`);
}
showMenu({width: 500});     // Output: 'menu 500 200'
// (!) Но обязательно нужно давать аргументу-объекту при объявлении значение по-умолчанию


// ---------------------------------------------------------------------------------------------------------------------
// Task 1
// Напишите деструктурирующее присваивание, которое:
//    Свойство name присвоит в переменную name.
//    Свойство years присвоит в переменную age.
//    Свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
let user = {
  name: "John",
  years: 30
};

const {
  name,
  years: age,
  isAdmin = false,
} = user;
console.log(name, age, isAdmin);      // Output: 'John' 30 false


// Task 2
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = function (salaries) {
  if (Object.entries(salaries).length === 0) {
    return null;
  }
  return Math.max(...Object.entries(salaries).map((key, value) => value));      // можно прост через Object.value
};

console.log(topSalary(salaries));