//let namiesto var, len to bolo prednastavene
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15;
    let dogYears = 15; 
    
    if(humanYears == 2) {
      catYears = 24;
      dogYears = 24;
      return [humanYears,catYears,dogYears];
    }
    
    if(humanYears > 2) {
    // odcitanie prvych 2 rokov
      catYears = 24 + ((humanYears-2)*4);
      dogYears = 24 + ((humanYears-2)*5);
       return [humanYears,catYears,dogYears];
    }
    
    return [humanYears,catYears,dogYears]
   
  }