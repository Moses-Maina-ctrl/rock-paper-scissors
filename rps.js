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
        if (computerScore ==5){
            let resultz = `I Win this Game!!!! Loser!! Press F5 to play again`;
            finalOutput_div.innerText =resultz;  
            disableBtn()    
        }  
     } else if (playerMove ==  computerMove){
        let result = `Its a Draw.The Computer played ${computerMove}`
        output_div.innerText =result;
     } else if ((playerMove == "paper" && computerMove == "rock")
     ||(playerMove == "rock" && computerMove == "scissors" )
     || (playerMove == "scissors" && computerMove == "paper")){
        let result = `You win.The Computer played ${computerMove}`
        output_div.innerText =result;
        playerWins(); 
        if( playerScore == 5){
            let resultz = `You win this Game!! Lucky!! Press F5 to play again`;
            finalOutput_div.innerText =resultz;
            disableBtn()     
     }
     } else {   
        let result = `Its a Draw.The Computer played ${computerMove}`
        output_div.innerText =result; 
     } 
}))
function disableBtn(){
    btn.forEach(button => {
        button.disabled = true
    })
}