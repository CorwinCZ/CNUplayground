function wordsToMarks(string){
  return string.split("").map(a => a.charCodeAt(0) -96).reduce((a, b) => a + b);
}