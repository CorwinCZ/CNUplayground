function KataTask(humanYears) { 
   var catYears = humanYears === 1 
                    ? 15 
                    : humanYears === 2 
                        ? 24 
                        : 24 + ((humanYears - 2)*4) ;
    var dogYears = humanYears === 1 
                        ? 15 
                        : humanYears === 2 
                            ? 24 
                            : 24 + ((humanYears - 2)*5) ;
    return [humanYears, catYears, dogYears]

}
