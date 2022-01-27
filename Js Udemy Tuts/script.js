console.log("closures")

var a = 2;

var b = 3 + 2;

// they are memory efficient

const someHeavyVarFunc = () => {

 var arr = Array(10000).fill("hii");

 return function (index) {

  return arr[index];

 }
}


const hvv = someHeavyVarFunc(); // here someheavy is now out of stack ie its flushed and arr is retained and return func has access to it


// Below only one arr is used arr is not created twice hence memory is saved

console.log("The 1ooth index is ",hvv(100));
console.log("The 16oth index is ",hvv(160));



// Encapsulation

const makeNuclearButton = () =>{
 let timeWithoutDestruction = 0;
 const passTime = () => timeWithoutDestruction++;
 const totalPeaceTime = () =>timeWithoutDestruction;
 const launch = () =>
 {
  timeWithoutDestruction = -1;
  return "bomb"
 }

 setInterval(passTime, 1000);

 return {
  totalPeaceTime : totalPeaceTime
 }
}


// here the timeWithoutDestruction and launch function are encapsulated

const bombTheCity = makeNuclearButton();
console.log("Peace Time ",bombTheCity.totalPeaceTime());

