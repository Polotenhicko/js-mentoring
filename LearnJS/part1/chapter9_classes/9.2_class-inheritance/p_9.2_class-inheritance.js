//  Реализуйте класс Student (Студент), который будет наследовать от класса User.
//  Этот класс должен иметь следующие свойства:
//    name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
//  Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
//  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.


// Вот так должен выглядеть класс User, от которого наследуется наш Student:
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    console.log(
        new Date().getFullYear(),
        new Date(this.year).getFullYear(),
    );
    return new Date().getFullYear() - new Date('' + this.year).getFullYear();
  }
}

// Вот так должен работать наш класс:

const student = new Student('Иван', 'Иванов', 2019);

console.log(student.name);             // Output: 'Иван'
console.log(student.surname);          // Output: 'Иванов'
console.log(student.getFullName());    // Output: 'Иван Иванов'
console.log(student.year);             // Output: 2019
console.log(student.getCourse());      // Output: 4 - четвертый курс, так как текущий год 2023