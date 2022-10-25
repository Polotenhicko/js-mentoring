// Task 1
// Скопировать объект с вложенным объектом
const object1 = {
  title: 'hello',
  text: 'Nulla purus enim, viverra fermentum metus elementum, ornare viverra dolor.',
  item: {
    title: 'world',
    text: 'Nam nec volutpat nisi. Fusce vulputate neque quis risus lobortis lacinia',
    item: null,
  }
};

// Solution
const copyObj = (obj) => {
  let resultObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      resultObj[key] = {};
      Object.assign(resultObj[key], obj[key]);
    } else {
      resultObj[key] = obj[key];
    }
  };
  return resultObj;
};

// console.log(copyObj(object1));


// Tests
// var assert = require('assert');

// describe('copyObj()', () => {
//   const object2 = copyObj(object1)

//   it('should copy object', () => {
//     assert.notEqual(object2, object1)
//   });

//   object2.title = 'test';
//   it('object should transform without source transformation', () => {
//     assert.notEqual(object2.title, object1.title)
//   });
//   it('should copy inner object', () => {
//     assert.notEqual(object2.item, object1.item)
//   });

//   object2.item.title = 'test'
//   it('inner object should transform without source transformation', () => {
//     assert.notEqual(object2.item.title, object1.item.title)
//   });
// });