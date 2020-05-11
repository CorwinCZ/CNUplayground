const humanYearsCatYearsDogYears = (humanYears) => {
  let dogYears = 0;
  let catYears = 0;
  if (Number.isInteger(humanYears) && humanYears >= 1) {
    for (let i = 0; i < humanYears; i++) {
      if (i === 0) {
        dogYears += 15;
        catYears += 15;
      } else if (i === 1) {
        dogYears += 9;
        catYears += 9;
      } else {
        dogYears += 5;
        catYears += 4;
      }
    }
    return [humanYears, catYears, dogYears];
  } else {
    return "Invalid input";
  }
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
