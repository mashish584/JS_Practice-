Array.prototype.mapClone = function(fn) {
  const returnValues = [];

  //check if this is array
  if ([].constructor !== Array) {
    return new Error("Invalid value type.");
  }

  for (let i = 0; i < this.length; i++) {
    returnValues.push(fn(this[i]));
  }
  return returnValues;
};

console.log([1, 2, 3, 4, 5].mapClone(value => value));
