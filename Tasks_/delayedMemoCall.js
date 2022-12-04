// Нужно создать функцию delayedMemoCall, чтобы она удовлетворяла вызовам:
const delayer = delayedMemoCall(3000);

delayer(obj4.getData, obj4);      // 123 after 3 seconds
delayer(obj4.getData, otherObj);  // 456 after 3 seconds

// must memorize value data when called
delayer(obj4.getData, otherObj); // 456 after 3 seconds

otherObj.testProp = 789;        // mutation affects only next calls

delayer(obj4.getData, otherObj); // 789 after 3 seconds

delayer.setDelay(5000);         // setting delay affects only next calls

delayer(obj4.getData, otherObj); // 789 after 5 seconds



function delayedMemoCall (msec) {

  return function func(fn, obj) {
    const buffer = Object.fromEntries(Object.entries(obj));

    func.setDelay = function (newMsec) {
      msec = newMsec;
    };

    setTimeout(() => fn.apply(buffer), msec );
  }
}