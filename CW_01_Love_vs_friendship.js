function wordsToMarks(word){
    return word.split("")
                .map(letter => letter.charCodeAt(0) - 96)
                .reduce((acc, cur) => acc + cur);
}
