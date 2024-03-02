let player1,computer;
let playerScore=0;
let compScore=0;
let choice;
function playerChoice(choice) {
    player1 = choice;
    console.log(`Player1 selected ${player1}`);
    comp();
    game();
}

//computer input
function comp(){
choices=["rock","paper","scissor"];
let sol = choices[Math.floor(Math.random()*choices.length)];
computer=sol;
console.log("computer selected", computer )
};

function CompResult(){ document.getElementById("result").innerHTML="Computer Wins!";
}
function PlayerResult(){ document.getElementById("result").innerHTML="Player Wins!";
}
function draw(){ document.getElementById("result").innerHTML="Draw!";
}
function game(){
  if ((player1==="rock" && computer==="scissor")||(player1==="paper" && computer==="rock")||(player1==="scissor" && computer==="paper")){
    console.log("player 1 wins!!");
    PlayerResult();
    playerScore+=1;
  }else if((player1==="rock" && computer==="rock")||(player1==="paper" && computer==="paper")||(player1==="scissor" && computer==="scissor")){
    console.log("Draw!");
    draw();
  }
  else{
    console.log("Computer wins!");
    CompResult();
    compScore+=1;
  }
  let playerDisplay=document.getElementById("playerchoice").innerHTML="Player selected : "+player1;
  let compDisplay=document.getElementById("compchoice").innerHTML="Computer selected : "+computer;
   let pscore=document.getElementById("playerscore").innerHTML="Player Score :"+playerScore;
  let cscore=document.getElementById("compscore").innerHTML="Computer Score :"+compScore;
}


