// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn15 = inventor => (inventor.year >= 1500 && inventor.year < 1600);
console.log(1, inventors.filter(bornIn15));

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventor => ({first: inventor.first, last: inventor.last});
console.log(2, inventors.map(fullName));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthSort = (inventorA, inventorB) => {if (inventorA.year < inventorB.year) return 1; else return -1};
console.log(3, inventors.sort(birthSort));

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorAge = inventor => inventor.passed - inventor.year;
const sum = (acc, item) => acc + item;
console.log(4, inventors.map(inventorAge).reduce(sum));

// 5. Sort the inventors by years lived
const sortAge = (inventorA, inventorB) => {if (inventorAge(inventorA) > inventorAge(inventorB)) return 1; else return -1};
console.log(5, inventors.sort(sortAge));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByName = (personA, personB) => {if (personA.last > personB.last) return 1; else return -1};
const splitNameString = person => person.split(", ");
const splitNameParts = name => ({last: name[0], first: name[1]});
const sortedAndEditedPeople = people.map(splitNameString).map(splitNameParts).sort(sortByName);
console.log(7, sortedAndEditedPeople);
// console.log(7, people.sort((personA, personB) => personB - personA));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const addObjCount = (item, obj)=> {if (!obj[item]) obj[item] = 1; else obj[item] += 1}
let instances = {};
data.map(instance => addObjCount(instance, instances));
console.log(8, instances);