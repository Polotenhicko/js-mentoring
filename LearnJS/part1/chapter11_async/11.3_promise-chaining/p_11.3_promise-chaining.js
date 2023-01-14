// Task 1
// Покурить разницу между `.then(f1, f2)` и `.then(f1).catch(f2)`

const promiseMaker = function (switcher) {
  if (switcher) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('rejected'));
      }, 1000);
    });
  }
};


promiseMaker(0).then(() => {
  console.log('.then(f1, f2) => resolved');
}, () => {
  console.log('.then(f1, f2) => rejected');
}).then(() => {
  console.log('.then(f1, f2) => resolved');
}, () => {
  console.log('.then(f1, f2) => rejected');
});


promiseMaker(0).then(() => {
  console.log('.then(f1).catch(f2) => resolved');
}).catch(() => {
  console.log('.then(f1).catch(f2) => rejected');
}).then(() => {
  console.log('.then(f1).catch(f2) => resolved');
}).catch(() => {
  console.log('.then(f1).catch(f2) => rejected');
});

/**
 * Output:
 * .then(f1, f2) => rejected
 * .then(f1, f2) => resolved
 * .then(f1).catch(f2) => rejected
 * .then(f1).catch(f2) => resolved
 */