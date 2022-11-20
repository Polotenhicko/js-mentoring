// https://learn.javascript.ru/object

// Объекты используются для хранения коллекций различных значений.
// Свойство объекта – это пара «ключ: значение». Ключ – это строка с «именем свойства». 
// Если имя св-ва содержит пробел, записывается в кавычках, вызывается в квадратных скобках
// Св-ва объекта, объявленного как константа, могут быть изменены (тк запрещается только перезапись `obj = ...`)
// Если обратиться к несуществующему св-ву, вернется undefined
// В качестве ключей для свойств могут использоваться только типы string или symbol

const exampleObj = {
  'user name': 'coolman',
  id: 1,
  posts: {id: 1, title: 'how to...', comments: ['lol', 'xdddd', 'kek']},
  1: null,
};


// Оператор "in" проверяет существования свойства в объекте (если св-во = undefined, выдаст true)
console.log("key" in exampleObj)

// `for...in` каждую итерацию выдает след. имя свойства 
for (let eachKey in exampleObj) {
  console.log('key: ' + eachKey);
};
// если обращаться к объекту по имени св-ва, вернется значение св-ва
for (eachKey in exampleObj) {
  console.log('value: ' + exampleObj[eachKey]);  
};
// св-ва итерируются и отображаются в таком порядке: если это '1', '2', '100000' и тд, то отображаются первыми по порядку, остальные в порядке добавления


// Для удаления (если массив, то 'опустошения') любых св-в - `delete <smthing>`
delete exampleObj.posts.comments[0];
console.log(exampleObj);


// Для доступа к св-ву через переменную (динамически) точка `.` не работает, работают только `[]` 
let key = 'user name';
console.log(exampleObj[key]);


// Существует динамическое именование ключа, если ключ взять в квадратные скобки 
let propName = 'likes';
const exampleObj2 = {
  [propName + 'Example']: 5,
}
console.log(exampleObj2)


// Если значение и ключ св-ва совпадают, можно писать только значение
const exampleFn = (name, age) => {
  return {
    name,
    age,
  };
};
console.log(exampleFn('John', 20))

// ---------------------------------------------------------------------------------------------------------------------


// Task 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


// Task 2
isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
}


// Task 3
const user1 = {
  name: "John"
};
// это будет работать?
user1.name = "Pete";       // Output: 'Pete'


// Task 4
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const countPays = (salaries) => {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}


// Task 5
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu))



