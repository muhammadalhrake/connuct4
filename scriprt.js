
while (!player1) {
  var player1 = prompt('player 1 Enter your name . you will be red.'); 
}
player1color = 'red';

while (!player2) {
  var player2 = prompt('player 2 Enter your name . you will be Yellow.'); 
}
player2color = 'yellow';

var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSolet = document.querySelectorAll('.slot');
const  playerTurne = document.querySelector('.Plyer-turn');
const  reset = document.querySelector('.reset');
var currentplayer = 1;
playerTurne.textContent =`${player1}'s turn `;
Array.prototype.forEach.call(tableCell , (cell)=>{
  cell.addEventListener('click' , changColor);
  cell.style.backgroundColor = 'white';
})

for (i=0 ;i<tableCell.length;i++){
  tableCell[i].addEventListener('click', (e)=>{
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
  })
}

function changColor(e){
  let column = e.target.cellIndex;
  let row = [];
  for (let i=5 ;i >-1;i--){
    //console.log("ftf7yug", tableRow[i].children[column].style,tableRow[i].children[column].style.backgroundColor=='white');
    if(tableRow[i].children[column].style.backgroundColor=='white'){
      row.push(tableRow[i].children[column]);
      //console.log(row);
      if(currentplayer==1){
        row[0].style.backgroundColor=player1color;
        if(cellCheck()||RowCheck()|| DepthCheck1()||DepthCheck2()){
          tableSolet.forEach(slot=>{
            slot.style.backgroundColor='white';
          })
          return(alert(`${player1}'s win `));
        }else if(FullDrowingCheck()){
          playerTurne.textContent='Game over';
          alert('Game over ');
        }else{
          playerTurne.textContent=`${player2}'s turn!`;
          //console.log(row[0]);
          return currentplayer=2;
        }
      }else{
        row[0].style.backgroundColor= player2color;
        if(cellCheck()||RowCheck()|| DepthCheck1()||DepthCheck2()){
          return(alert(`${player2}'s win `));
        }else if(FullDrowingCheck()){
          playerTurne.textContent='Game over';
          alert('Game over ');
        }else{
          playerTurne.textContent=`${player1}'s turn!`;
          //console.log(row[0]);
          return currentplayer=1;
        }
      }
    }
  }
}
function colorCheck(one , tow , three ,four){
  if(one==tow&&one===three&&one===four&&one!=='white'){
    return true;
  }
} 
// hear we check four Element from table of cell 
function cellCheck(){
  for(let row=0 ; row<tableRow.length; row++){
    for(let cell=0 ; cell<4;cell++){
      if(colorCheck(tableRow[row].children[cell].style.backgroundColor,tableRow[row].children[cell+1].style.backgroundColor,tableRow[row].children[cell+2].style.backgroundColor,tableRow[row].children[cell+3].style.backgroundColor)){
        return true;
      }
    }
  }
}
// hear we check four Element from table of row
function RowCheck(){
  for(let cell=0 ; cell<7;cell++){
    for(let row=0 ; row<3;row++){
      if(colorCheck(tableRow[row].children[cell].style.backgroundColor,tableRow[row+1].children[cell].style.backgroundColor,tableRow[row+2].children[cell].style.backgroundColor,tableRow[row+3].children[cell].style.backgroundColor)){
        return true;
      }
    }
  }
}
// hear in the next tow function we check four Element from table of depth 
function DepthCheck1(){
  for(let cell=0 ; cell<4 ; cell++){
    for(let row =0 ; row<3 ; row++){
      if(colorCheck(tableRow[row].children[cell].style.backgroundColor,tableRow[row+1].children[cell+1].style.backgroundColor,tableRow[row+2].children[cell+2].style.backgroundColor,tableRow[row+3].children[cell+3].style.backgroundColor)){
        return true;
      }
    }
  }
}
function DepthCheck2(){
  for(let cell = 0; cell < 4; cell++){
    for (let row = 5; row > 2; row--){
        if (colorCheck(tableRow[row].children[cell].style.backgroundColor, tableRow[row-1].children[cell+1].style.backgroundColor,
            tableRow[row-2].children[cell+2].style.backgroundColor,tableRow[row-3].children[cell+3].style.backgroundColor)){
                return true;
        }
    }
}
}
function FullDrowingCheck(){
  let fullSlot = []
    for (i=0; i < tableCell.length; i++){
        if (tableCell[i].style.backgroundColor !== 'white'){
            fullSlot.push(tableCell[i]);
        }
    }
    if (fullSlot.length === tableCell.length){
        return true;
    }
}
reset.addEventListener('click',()=>{
  tableSolet.forEach(slot=>{
    slot.style.backgroundColor='white';
  })
  playerTurne.style.color='black';
  return(currentplayer===1  ? playerTurne.textContent=`${player1}' turn`:playerTurne.textContent=`${player2}' turn`)
})
