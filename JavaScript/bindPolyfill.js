const user = {
  firstName: "Ashish",
  lastName: "Mehra"
};

const printUser = function(hometown, state) {
  return `${this.firstName} ${this.lastName} - ${hometown},(${state})`;
};

// with default bind()
// console.log(printUser.bind(user)());

// bind() polyfill
Function.prototype.bindClone = function(...args1) {
  const fn = this;
  return function(...args2) {
    return fn.apply(args1.shift(), [...args1, ...args2]);
  };
};

console.log(printUser.bindClone(user)("Kashipur", "Uttarakhand"));
