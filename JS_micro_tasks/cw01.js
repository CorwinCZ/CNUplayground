function wordsToMarks(string) {
    return string.split('').map(elem => elem.charCodeAt(0) - 96).reduce((store,value) => store + value) 
}