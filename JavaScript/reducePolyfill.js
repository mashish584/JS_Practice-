Array.prototype.reduceClone = function(fn, defaultValue) {
  let prevValue = defaultValue;
  return (() => {
    for (let i = 0; i < this.length; i++) {
      prevValue = fn(prevValue, this[i]);
    }
    return prevValue;
  })();
};

const data = [1, 2, 3, 4, 5];

const returnValue = data.reduceClone((accumulator, value) => accumulator + value, 0);

console.log(returnValue);
