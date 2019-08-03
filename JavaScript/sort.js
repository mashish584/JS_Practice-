const a = [9, 22, 33, 41, 1, 55, 6, 7, 8, 3, 2, 2, 1, 1, 1];
let data = {
  a: {
    num: 1
  },
  b: {
    num: 0
  }
};

console.log(
  a.sort((val1, val2) => {
    if (val1 > val2) {
      return 1;
    } else if (val1 < val2) {
      return -1;
    }
    return 0;
  })
);

// simple way to sort
console.log(a.sort((a, b) => (a > b) - (a < b)));

// Object sorting
function sortObject(field) {
  return function(a, b) {
    return (a[field] > b[field]) - (a[field] < b[field]);
  };
}
