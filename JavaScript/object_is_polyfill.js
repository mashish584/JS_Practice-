if (!Object.is || true) {
  Object.is = (value1, value2) => {
    let value1IsNegative = isNegativeValue(value1);
    let value2IsNegative = isNegativeValue(value2);

    if (value1IsNegative || value2IsNegative) {
      return value1IsNegative && value2IsNegative;
    } else if (isNaNValue(value1) && isNaNValue(value2)) {
      return true;
    } else {
      return value1 === value2;
    }

    function isNegativeValue(value) {
      return value === 0 && 1 / value === -Infinity;
    }

    function isNaNValue(value) {
      return value !== value;
    }
  };
}
