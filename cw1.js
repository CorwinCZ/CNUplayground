function wordsToMarks(string){
    let a = 0;
    for (let i = 0; i < string.length; i++) {
      a += string[i].charCodeAt(0) -96
    }
    return a;
  }