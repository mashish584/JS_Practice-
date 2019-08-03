Array.prototype.filterClone = function(fn) {
  const returnValues = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i]);
    if (result) returnValues.push(this[i]);
  }

  return returnValues;
};

const data = [1, 2, 3, 4, 5, 6];

const result = data.filterClone(val => val < 3);

console.log(result);
