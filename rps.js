let playerScore = 0;
let computerScore = 0;
//this function returns a random move from the move array//
function getComputerChoice(){
    const move =["rock", "paper", "scissors"];
    return move[Math.floor(Math.random()*move.length)];
}
const Btn =document.querySelectorAll("#btn");
//this function add 1 to the playerScore every time a player wins//
function playerWins(){
    playerScore++;
    
    return playerScore;
}
//this function add 1 to the computerScore every time a player wins//
function computerWins(){
    computerScore++;
    return computerScore;
}

// this is the main function //
/*function playRound(){
    //prompt the player for the move//
    let playerMove = prompt("What's your move (rock, paper or scissors)?");
    playerMove = playerMove.toLowerCase();
    const computerMove = getComputerChoice();
    //if the computer wins the computerwin function is called//
     if ((playerMove == "rock" && computerMove == "paper" )
     || (playerMove == "scissors" && computerMove == "rock")
     || (playerMove == "paper" && computerMove == "scissors" )){
        let result = `The Computer crushed you this round. The Computer played ${computerMove}. ${computerMove} beats ${playerMove}`;
        //creates a 'p' element //
        let z = document.createElement('p'); // is a node
        z.innerText = result;
        document.body.appendChild(z);
        computerWins();      
     } else if (playerMove ==  computerMove){
         let result = `Its a Draw. The Computer played ${computerMove}`;
        let z = document.createElement('p'); // is a node
            z.innerText = result;
            document.body.appendChild(z);
     } else if ((playerMove == "paper" && computerMove == "rock")
     ||(playerMove == "rock" && computerMove == "scissors" )
     || (playerMove == "scissors" && computerMove == "paper")){
        //if the player wins the playerwin function is called//
        let result = `You won this round. The Computer played ${computerMove}. ${playerMove}  beats ${computerMove} `;
        let z = document.createElement('p'); // is a node
        z.innerText = result;
        document.body.appendChild(z);
        playerWins();       
     } else {
        let result ="Re-enter your move again";
        let z = document.createElement('p'); // is a node
        z.innerText = result;
        document.body.appendChild(z);
     }
}*/
//This function prints out the winner after the round is over//
function winner(computerScore,playerScore){
    //call the computerWin function which returns the total computerScore. There is a problem where the total compscore is greater by one( so thats why I minus one. Its a temporary fix for the moment). //
    let computerScoreTotal= computerWins(computerScore) -1;
    //call the playerWin function which returns the total playerScore//
    let playerScoreTotal= playerWins(playerScore) -1;
    if (computerScoreTotal > playerScoreTotal){
        let result = `The Computer Wins this Game. 
        computer - ${computerScoreTotal} vs You -${playerScoreTotal}
        Press F5 to play again`;
        let z = document.createElement('p'); // is a node
        z.innerText = result;
        document.body.appendChild(z);
    }else  if( playerScoreTotal>computerScoreTotal){
        let result = `You win this Game. 
        computer - ${computerScoreTotal} vs You -${playerScoreTotal}
        Press F5 to play again`;
        let z = document.createElement('p'); // is a node
        z.innerText = result;
        document.body.appendChild(z);
    } 
}
function game(){    
    for (let i =0; i <5; i++){
        playRound()
    }   
    winner();
}
game();
