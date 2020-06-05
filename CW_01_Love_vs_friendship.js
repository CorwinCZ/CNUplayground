var alphabet = 'abcdefghijklmnoprstquvwxyz'.split(''),
    number = 0;
function countWord(word) {
    for(var i=0; i<word.length; i++) {
        for(var j=0; j<alphabet.length; j++) {
            if(word[i] === alphabet[j]) {            
            number += (j+1);
            }
        }
    }
    console.log("Slovu '" + word + "' odpoveda cislo " + number);
    return number;
}
countWord("love");
