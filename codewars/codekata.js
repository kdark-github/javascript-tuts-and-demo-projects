

// function createPhoneNumber(numbers){

//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");

// }

// const tt = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);   // "(123) 456-7890" op 
// console.log("The tt is ", tt);



// function validParentheses(parens){
//   //TODO 
//   let count = 0;
//   parens.split("").every(paren =>{
//     if(count === -1) return false;
//     if(paren === '(')
//     {
//       count +=1;
//     }
//     else {
//       count -=1;
//     }
//     return true
//   })
//   return count === 0;
// }

// const res = validParentheses( "())(()" )

// console.log("The ",res);
// var tok =  /[()]/g;

// console.log("Test ", tok.test("())(()"))


function isValidWalk(walk) {
  //insert brilliant code here
  let accns = 0;
  let accew = 0;
  walk.forEach(step => {

    switch (step) {
      case 'n': accns += 1;
        break;
      case 'e': accew += 1;
        break;
      case 's': accns -= 1;
        break;
      case 'w': accew -= 1;
        break;
      default:
        break;
    }
  });
  console.log("The steps is : ", accns+accew);
  return walk.length === 10 && (Math.abs(accns)+Math.abs(accew)) === 0;
}


const isAtStartPoint = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
console.log("isAtStartPoint : ", isAtStartPoint);