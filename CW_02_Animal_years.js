function KataTask(humanYears) { 
    var catMltpl = 4,
        dogMltpl = 5;
    function countYears(humanYears, Mltpl) {
        return humanYears === 1 
                ? 15 
                : humanYears === 2 
                    ? 24 
                    : 24 + ((humanYears - 2)*Mltpl);
    }
    return [humanYears, countYears(humanYears, catMltpl), countYears(humanYears, dogMltpl)]
}
