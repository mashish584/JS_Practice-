let userData = {
  name: "Ashish Mehra",
  address: {
    city: {
      name: "Kashipur",
      pin: 244713
    }
  }
};

let newObj = {};

const mapOverObject = function(obj, parent) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        mapOverObject(obj[key], `${parent}_${key}`);
      } else {
        newObj[`${parent}_${key}`] = obj[key];
      }
    }
  }
};

mapOverObject(userData, "user");
console.log(newObj);
