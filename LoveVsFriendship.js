const wordsToMarks = (string) => {
  let numericValue = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const word = string.toLowerCase();
  if (word !== "") {
    const wordArray = word.split("");
    wordArray.map((letter) => {
      numericValue += alphabet.indexOf(letter) + 1;
    });
    return numericValue;
  } else {
    return "Invalid input";
  }
};

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
