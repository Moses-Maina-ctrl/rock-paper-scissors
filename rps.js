
let playerScore = 0;
let computerScore = 0;
roundNumber = 0;
function getComputerChoice(){
    const move =["rock", "paper", "scissors"];
    return move[Math.floor(Math.random()*move.length)];
}

function playRound(){
    let playerMove = prompt("What's your move (rock, paper or scissors)?");
    playerMove = playerMove.toLowerCase();
    const computerMove = getComputerChoice();
     if (playerMove == "rock" && computerMove == "paper" || playerMove == "scissors" && computerMove == "rock" || playerMove == "paper" && computerMove == "scissors" ){
        let result = `The Computer crushed you this round. The Computer played ${computerMove}. ${computerMove} beats ${playerMove}`;
        computerScore += 1;
        roundNumber += 1;
        document.getElementById("player").innerHTML = result;
     } else if (playerMove ==  computerMove){
         let result = `Its a Draw. The Computer played ${computerMove}`;
        roundNumber += 1;
        document.getElementById("player").innerHTML = result;
     } else if (playerMove == "paper" && computerMove == "rock" || playerMove == "rock" && computerMove == "scissors" || playerMove == "scissors" && computerMove == "paper"){
        let result = `You won this round. `;
        playerScore += 1;
        roundNumber += 1;
        document.getElementById("player").innerHTML =result;
     } else {
        let result ="Re-enter your move again";
        document.getElementById("player").innerHTML =result;
     }
     
     
}
playRound();