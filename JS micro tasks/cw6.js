function abbrevName(name){
    let temp = name.split(" ").map(a => a[0].toUpperCase());
    temp.splice(1,0,'.')
    return temp.join("");
  }