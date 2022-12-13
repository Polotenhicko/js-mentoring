// http://old.code.mu/tasks/javascript/context/prodvinutaya-rabota-s-kontekstom-v-javascript.html
// Задачи на продвинутую работу с контекстом. Учебник Трепачёва.

// Task 1
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.
var elem1 = 'привет';
function func1() {
  console.log(this.value);
}
func1(); //тут должно вывести value инпута



// Task 2
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями
var elem2 = 'привет';
function func2(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}
func2(); //тут должно вывести 'привет, Иванов Иван'



// Task 3
// Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().
var elem3 = 'привет';
function func3(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}
func3(); //тут должно вывести 'привет, Иванов Иван'



// Task 4
//
var elem4 = 'привет';
function func4(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()

func4('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func4('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


