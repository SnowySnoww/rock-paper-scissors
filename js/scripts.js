let computerChoice;
let playerChoice;
let result;
let playerWins = 0;
let computerWins = 0;

for(n = 0; n <= 4; n++){
    playRound();
    console.log(getResult());
}

winCount();

function playRound(){
    computerPlay(0, 2);
    playerPlay();
    testResult();
}

function getRandomNum(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

function computerPlay(min, max){
    computerChoice = getRandomNum(min, max);
    switch(computerChoice){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function playerPlay(){
    let validChoice = false;
    while(validChoice == false){
        playerChoice = prompt(`Type "Rock", "Paper" or "Scissors"! (or 1, 2 or 3)`).toLowerCase().trim();
    if (playerChoice == "rock" || playerChoice == "1"){
        if(playerChoice == "1"){
            playerChoice = "rock";
        }
        validChoice = true;
        break;
    }else if(playerChoice == "paper" || playerChoice == "2"){
        if(playerChoice == "2"){
            playerChoice = "paper";
        }
        validChoice = true;
        break;
    }else if(playerChoice == "scissors" || playerChoice == "3"){
        if(playerChoice == "3"){
            playerChoice = "scissors";
        }
        validChoice = true;
        break;
    }else{
        alert("Invalid choice.")
        validChoice = false;
    }
    }
}

function testResult(){
    if(computerChoice == "rock"){
        if(playerChoice == "rock"){
            return result = 0;
        }else if(playerChoice == "paper"){
            return result = 2;
        }else{
            return result = 1;
        }
    }else if (computerChoice == "paper"){
        if(playerChoice == "rock"){
            return result = 1;
        }else if(playerChoice == "paper"){
            return result = 0;
        }else{
            return result = 2;
        }
    }else if (computerChoice == "scissors"){
        if(playerChoice == "rock"){
            return result = 2;
        }else if(playerChoice == "paper"){
            return result = 1;
        }else{
            return result = 0;
        }
    }
}

function winCount(){
    return console.log(`RESULTS: The Player won ${playerWins} times in total!\nThe Computer won ${computerWins} times in total!`);
}

function getResult(){
    if (result == 0){
        return `The Player chose ${playerChoice} and the Computer chose ${computerChoice}!\nIt's a tie!`;
    }else if(result == 1){
        computerWins++;
        return `The Player chose ${playerChoice} and the Computer chose ${computerChoice}!\nThe Computer won!`;
    }else if (result == 2){
        playerWins++;
        return `The Player chose ${playerChoice} and the Computer chose ${computerChoice}!\nThe Player won!`;
    }
}
