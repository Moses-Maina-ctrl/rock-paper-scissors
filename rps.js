let playerScore = 0;
let computerScore = 0;
const btn =document.querySelectorAll("#btn");
const playerScore_span = document.querySelector(".playerScore");
const computerScore_span = document.querySelector(".CompScore");
const output_div = document.querySelector("#output > p");
const finalOutput_div = document.querySelector("#finalOutput > p");

//this function returns a random move from the move array//
function getComputerChoice(){
    const move =["rock", "paper", "scissors"];
    return move[Math.floor(Math.random()*move.length)];
}

//this function add 1 to the playerScore every time a player wins//
function playerWins(){
    playerScore++;
    playerScore_span.innerText =playerScore;
    
}
//this function add 1 to the computerScore every time a player wins//
function computerWins(){
    computerScore++;
    computerScore_span.innerText =computerScore;
}
btn.forEach(button => button.addEventListener("click", () =>{
    let playerMove = button.textContent;
    playerMove = playerMove.toLowerCase();
    const computerMove = getComputerChoice();
   
    if ((playerMove == "rock" && computerMove == "paper" )
     || (playerMove == "scissors" && computerMove == "rock")
     || (playerMove == "paper" && computerMove == "scissors" )){
        let result = `The Computer crushed you this round. The Computer played ${computerMove}. ${computerMove} beats ${playerMove}`;
        output_div.innerText =result;
        computerWins();  
          
     } else if (playerMove ==  computerMove){
        let result = `Its a Draw.The Computer played ${computerMove}`
        output_div.innerText =result;
     } else if ((playerMove == "paper" && computerMove == "rock")
     ||(playerMove == "rock" && computerMove == "scissors" )
     || (playerMove == "scissors" && computerMove == "paper")){
        let result = `You win.The Computer played ${computerMove}`
        output_div.innerText =result;
        
        playerWins(); 
           
     } else {
        
        console.log("wrong")
        
     }
     
}))


function winner(){
    //call the computerWin function which returns the total computerScore. There is a problem where the total compscore is greater by one( so thats why I minus one. Its a temporary fix for the moment). //
    let computerScoreTotal= computerWins(computerScore) -1;
    //call the playerWin function which returns the total playerScore//
    let playerScoreTotal= playerWins(playerScore) -1;
    if (computerScoreTotal ==5){
        let result = `The Computer Wins this Game.`;
        finalOutput_div.innerText =result;
        playerScore = 0;
        computerScore = 0;
        playerScore_span.innerText =playerScore;
        computerScore_span.innerText =computerScore;
        
    }else  if( playerScoreTotal == 5){
        let result = `You win this Game.`;
        output_div.innerText =result;
        playerScore = 0;
        computerScore = 0;
        playerScore_span.innerText =playerScore;
        computerScore_span.innerText =computerScore;
        
    } else {

    }
}
