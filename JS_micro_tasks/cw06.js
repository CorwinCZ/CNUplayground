function abbrevName(name) {
    //array which contains the first letters of the first and last name
    const charArray = name.split(' ').map(elem => elem.charAt(0).toUpperCase());
    return `${charArray[0]}.${charArray[1]}`
}