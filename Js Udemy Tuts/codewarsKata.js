


// A <-> T
// G <-> C

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {

    console.log(c, " c");
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

var t = DNAStrand("AAGGTTCC");


console.log("darshan".replace(/./g, "1"))



const tt = [1, 2, 3, 4, 5];
const sum = tt.reduce((a, t) => t + a, 0);
console.log(sum)

function toCamelCase(str) {
  if (str === '') return str;
  let strToArray = str.split("-");
  if (strToArray.length <= 1) {
    strToArray = str.split("_");
  }
  for (let i = 1; i < strToArray.length; ++i) {
    if (strToArray[i].length > 1) {
      const word = strToArray[i];
      strToArray[i] = word.slice(0, 1).toUpperCase() + word.slice(1, word.lenght);
    }
  }
  return strToArray.join('');
}

console.log(toCamelCase('the_stealth_warrior'));



var number = function (busStops) {
  // Good Luck!
  return busStops.reduce((acc , [ins ,outs])=>acc + ins-outs , 0);
}

console.log(number([[10, 0], [3, 5], [5, 8]]))