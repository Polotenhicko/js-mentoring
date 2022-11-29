// Деструктурировать объект как массив. Какая ошибка появляется?                TypeError: object is not iterable
// Применить Symbol.iterator чтобы деструкторизировать без ошибок.
// Деструктрурировать массив как объект и получить не undefined значения.
const object2 = {
  name: 'object2',
  value: 15,
  user: 'Danya',
};

object2[Symbol.iterator] = function () {
  const last = Object.entries(this).length;
  let i = 0;
  const thisObj = this;

  return {
    next() {
      if (last > i) {
        return {done: false, value: Object.entries(thisObj)[i++][1]};
      } else {
        return {done: true};
      }
    }
  };

};

const [name7, value7, user7] = object2;
console.log(name7, value7, user7);


const arr7 = [123, 456, 789, 0];
const obj7 = {'0': arr7[0], '1': arr7[1], '2': arr7[2], '3': arr7[3]};
// const obj7 = Object.fromEntries(arr7.entries());                             // same shit
console.log(obj7);