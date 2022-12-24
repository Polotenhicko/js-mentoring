// http://old.code.mu/tasks/javascript/context/prodvinutaya-rabota-s-kontekstom-v-javascript.html
// Задачи на продвинутую работу с контекстом. Учебник Трепачёва.

// Task 1
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось значение св-ва elem1.
var elem1 = {
  value: 'привет',
};
function func1() {
  console.log(this.value);
}
func1.call(elem1); // Output: 'привет'



// Task 2
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями
var elem2 = {
  value: 'привет',
};
function func2(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}
func2.call(elem2, 'Иванов', 'Иван'); // Output: 'привет, Иванов Иван'



// Task 3
// Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().
var elem3 = {
  value: 'привет',
};
function func3(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}
func3.apply(elem2, ['Иванов', 'Иван']); // Output: 'привет, Иванов Иван'




// Task 4
// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на св-во elem.
var elem4 = {
  value: 'привет',
};
function func4(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}

func4 = func4.bind(elem4)

func4('Иванов', 'Иван');      // Output: 'привет, Иванов Иван'
func4('Петров', 'Петр');      // Output: 'привет, Петров Петр'



// Task 5
// Создать функцию, которая запоминает переданные в нее числа и суммирует их когда аргументы не передаются.
let rememberSum = (...args) => {
  if (args.length === 0) {
    return 'no args';
  }
  if (args.length === rememberSum.previousArgsLength) {
    return args.reduce((sum, e) => sum + e, 0);
  }
  rememberSum.previousArgsLength = args.length;
  return rememberSum.bind(this, ...args);
};

console.log(rememberSum(1,2,3)(1,2,3)(1,2,3)());
console.log(rememberSum(1,2,3)(1,2,3)(1,2,3)());
