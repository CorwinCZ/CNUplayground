const grow = (x) => {
  if (x.length > 0) {
    return x.reduce((a, b) => a * b);
  } else {
    return "Invalid input";
  }
};

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
