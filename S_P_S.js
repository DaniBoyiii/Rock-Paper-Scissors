let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"] ;
    const randIdx = Math.floor(Math.random() * 3) ;
    return options[randIdx];
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        console.log("You win")
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"

    }
    else{
        console.log("YOU LOST")
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game Draw, Play Again"
    msg.style.backgroundColor = "#F4ECD6"
    msg.style.color = "black"
}


const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice)
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice)
    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        console.log("Choice was Clicked",userChoice);
        playGame(userChoice);
        genCompChoice()
    });
});













