// const arr = [1, 2, 3, 4, 5];


// arr.reduce((a, i) => {
//   console.log("a ", a, " i ", i)
//   return a + i;
// })


// async function apiCall()
// {

//   const data = await window.fetch(`http://13.127.101.212:8080/customers/stream/`).catch(error => console.error("The Api error is ", error));
//   console.log("The API call data is ", data );
  
// }

// apiCall();


function calcLength(poitn) {
  let diff = point[1] - (8-point[0]);
  if (diff >= 0) {
    return 4 - diff;
  }
  return 4;
}

function loopIt() {

  for (let i = 1; i < 9; ++i) {

    console.log(`for ${i} top diagonal is `, calcLength(i));

  }

}

let chessBoard = [];

const chessBoardArrayMaker = () =>{
    for(let i = 1; i < 9 ; ++i)
    {
      let row = [];
      for(let j = 1; j < 9 ; ++j)
      {
          row.push([i,j]);
      }      

      chessBoard.unshift(row)
    }
    
  }
  
  chessBoardArrayMaker();
  
  console.clear();
  console.log("ChessBoard ", chessBoard);

  chessBoard.forEach(row => {
    console.log("row", row);
    row.forEach(col => {
      calcLength()
    })
  })

loopIt();

