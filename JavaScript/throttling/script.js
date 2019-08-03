// throttling with setTimeout
function throttleWithTimeout(fn, delay) {
  let makeCall = true;
  return function() {
    if (makeCall) {
      fn.apply(this, arguments);
      makeCall = false;
      setTimeout(() => {
        makeCall = true;
      }, delay);
    }
  };
}

// throttle with timeStamp
function throttleWithTimeStamp(fn, delay) {
  let previousTimeStamp = Date.now();
  return function() {
    if (Math.floor(Date.now() - previousTimeStamp) > delay) {
      fn.apply(this, arguments);
      previousTimeStamp = Date.now();
    }
  };
}

const invokeAPI = throttleWithTimeStamp(() => {
  console.log("API CALL");
}, 3000);
