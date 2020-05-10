var humanYearsCatYearsDogYears = function(humanYears) {
    let cat, dog; 
    cat = dog = 15;
    if (humanYears > 1) {
      cat += 9 + 4 * (humanYears - 2)
      dog += 9 + 5 * (humanYears - 2)
    }
    return [humanYears, cat, dog];
  }
  