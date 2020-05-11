const abbrevName = (name) => {
  const partsOfName = name.split(" ");
  const initials = partsOfName.map((part) => {
    return part.charAt(0).toUpperCase();
  });
  return initials.join(".");
};

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
