import language from "../data.json" assert {type: "json"};
import {body, lang, darkMode, title, playerTitle, computerTitle, score, result, buttonRock, buttonPaper, buttonScissors, imageLeft, imageRight} from "./selectors.js";

let isEnglish = true;
let isDark = false;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerChoice;
let computerChoice;
let resultInfo = document.createElement("p");
let resultInfoExtra = document.createElement("p");

score.textContent = `${playerScore}:${computerScore}`

buttonRock.addEventListener("click", rockButton);
buttonPaper.addEventListener("click", paperButton);
buttonScissors.addEventListener("click", scissorsButton);

function rockButton(){
    roundCount++;
    playerChoice = "rock";
    imageLeft.src = "./imgs/rock-left.png"
    computerPlay()
    if(isEnglish == true){
        if(playerChoice === computerChoice){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "It's a tie!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(computerChoice == "paper"){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "The Computer won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            computerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }else{
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "You won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            playerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }
    }else{
        playerChoice = "pedra";
        if(playerChoice === computerChoice){
            makeUpperCase();
            resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
            resultInfoExtra.textContent = "É um empate!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(computerChoice == "papel"){
            makeUpperCase();
            resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
            resultInfoExtra.textContent = "O computador venceu este round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            computerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }else{
            makeUpperCase();
            resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
            resultInfoExtra.textContent = "Você venceu este round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            playerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }
    }
}

function paperButton(){
    roundCount++;
    playerChoice = "paper";
    imageLeft.src = "./imgs/paper-left.png"
    computerPlay()
    if(isEnglish == true){
        if(playerChoice === computerChoice){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "It's a tie!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(computerChoice == "rock"){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "You won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            playerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }else{
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "The computer won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            computerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }
        }else{
            playerChoice = "papel";
            if(playerChoice === computerChoice){
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "É um empate!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
            }else if(computerChoice == "pedra"){
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "Você venceu este round!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
                playerScore++;
                score.textContent = `${playerScore}:${computerScore}`
            }else{
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "O computador venceu este round!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
                computerScore++;
                score.textContent = `${playerScore}:${computerScore}`
            }
    }
}

function scissorsButton(){
    roundCount++;
    playerChoice = "scissors";
    imageLeft.src = "./imgs/scissors-left.png"
    computerPlay()
    if(isEnglish == true){
        if(playerChoice === computerChoice){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "It's a tie!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(computerChoice == "paper"){
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "You won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            playerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }else{
            makeUpperCase();
            resultInfo.innerHTML = `You chose ${playerChoice} and the computer chose ${computerChoice}`
            resultInfoExtra.textContent = "The Computer won this round!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
            computerScore++;
            score.textContent = `${playerScore}:${computerScore}`
        }
    }else{
            playerChoice = "tesoura";
            if(playerChoice === computerChoice){
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "É um empate!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
            }else if(computerChoice == "pedra"){
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "O computador venceu este round!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
                computerScore++;
                score.textContent = `${playerScore}:${computerScore}`
            }else{
                makeUpperCase();
                resultInfo.innerHTML = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}`
                resultInfoExtra.textContent = "Você venceu este round!"
                result.appendChild(resultInfo);
                resultInfo.appendChild(resultInfoExtra);
                playerScore++;
                score.textContent = `${playerScore}:${computerScore}`
            }
    }
}

function computerPlay(){
    computerChoice = getRandomNum();
    if(isEnglish == true){
        switch(computerChoice){
            case 0:
                computerChoice = "rock";
                imageRight.src = "./imgs/rock-right.png"
                break;
            case 1:
                computerChoice = "paper";
                imageRight.src = "./imgs/paper-right.png"
                break;
            case 2:
                computerChoice = "scissors";
                imageRight.src = "./imgs/scissors-right.png"
                break;
        }
    }else{
        switch(computerChoice){
            case 0:
                computerChoice = "pedra";
                imageRight.src = "./imgs/rock-right.png"
                break;
            case 1:
                computerChoice = "papel";
                imageRight.src = "./imgs/paper-right.png"
                break;
            case 2:
                computerChoice = "tesoura";
                imageRight.src = "./imgs/scissors-right.png"
                break;
        }
    }
}

function findWinner(){
    if(isEnglish == true){
        if(playerScore == computerScore){
            resultInfo.innerHTML = `You won ${playerScore} times and the computer won ${computerChoice} times`
            resultInfoExtra.textContent = "It is a tie!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(playerScore > computerScore){
            resultInfo.innerHTML = `You won ${playerScore} times and the computer won ${computerChoice} times`
            resultInfoExtra.textContent = "You've won the game!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else{
            resultInfo.innerHTML = `You won ${playerScore} times and the computer won ${computerChoice} times`
            resultInfoExtra.textContent = "The computer won the game!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }
    }else{
        if(playerScore == computerScore){
            resultInfo.innerHTML = `Você ganhou ${playerScore} vezes e o computador ganhou ${computerChoice} vezes`
            resultInfoExtra.textContent = "É um empate!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else if(playerScore > computerScore){
            resultInfo.innerHTML = `Você ganhou ${playerScore} vezes e o computador ganhou ${computerChoice} vezes`
            resultInfoExtra.textContent = "Você ganhou o jogo!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }else{
            resultInfo.innerHTML = `Você ganhou ${playerScore} vezes e o computador ganhou ${computerChoice} vezes`
            resultInfoExtra.textContent = "Você perdeu o jogo!"
            result.appendChild(resultInfo);
            resultInfo.appendChild(resultInfoExtra);
        }
    }
    
}

function getRandomNum(){
    return Math.floor(Math.random() * (3));
}

function makeUpperCase(){
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
}


function changeColor(){
    isDark = !isDark;
    if (isDark == true){
        body.style.cssText = "color: white; background: #121212"
        title.style.cssText = "color: #BB86FC"
    }else{
        body.style.cssText = "color: black; background: white"
        title.style.cssText = "color: black"
    }
}

function changeLang(){
    isEnglish = !isEnglish;
    if (isEnglish == true){
        lang.textContent = language[0].lang;
        title.textContent = language[0].title;
        playerTitle.textContent = language[0].player;
        computerTitle.textContent = language[0].computer;
        result.textContent = language[0].results;
        buttonRock.textContent = language[0].rock;
        buttonPaper.textContent = language[0].paper;
        buttonScissors.textContent = language[0].scissors;
    }else{
        lang.textContent = language[1].lang;
        title.textContent = language[1].title;
        playerTitle.textContent = language[1].player;
        computerTitle.textContent = language[1].computer;
        result.textContent = language[1].results;
        buttonRock.textContent = language[1].rock;
        buttonPaper.textContent = language[1].paper;
        buttonScissors.textContent = language[1].scissors;
    }
}


if(roundCount >= 5){
    findWinner();
}

lang.addEventListener("click", changeLang)
darkMode.addEventListener("click", changeColor)
