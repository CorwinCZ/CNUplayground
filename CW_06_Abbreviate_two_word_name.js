function Abbreviate(string) {
    return string.split(' ').reduce((count, item) => getFirstLetter(count) + "." + getFirstLetter(item)) + ".";
    
    function getFirstLetter(string) {
        return string.split('').filter((item, index) => index === 0)
    }
}