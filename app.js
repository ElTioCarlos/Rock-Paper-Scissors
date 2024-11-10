function getHumanChoice() {
    
    response = prompt("¿Rock, Paper or Scissor?")
    response = response.trim().toLowerCase();
    
    return response;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    number = randomNumber(1,3);
    
    switch (number) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissor"
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("draw\n")
        return "draw"
    } 

    if (humanChoice === "rock") {

        if (computerChoice === "paper") {
            console.log("Computer is winner\n");
            return "computer"
        }

        if (computerChoice === "scissor") {
            console.log("Human is winner\n")
            return "human"
        }
    }

    if (humanChoice === "paper") {

        if (computerChoice === "scissor") {
            console.log("Computer is winner\n");
            return "computer"
        }

        if (computerChoice === "rock") {
            console.log("Human is winner\n")
            return "human"
        }
    }

    if (humanChoice === "scissor") {

        if (computerChoice === "rock") {
            console.log("Computer is winner\n");
            return "computer"
        }

        if (computerChoice === "paper") {
            console.log("Human is winner\n")
            return "human"
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;    
    
    
    for (let i = 0; i < 5; i++) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`Human select: ${humanSelection}\nComputer select: ${computerSelection}`);

        let round = playRound(humanSelection, computerSelection);
        

        switch (round) {
            case "draw":
                break

            case "computer":
                computerScore++
                break;
            
            case "human":
                humanScore++
                break
            }
    }

    if (humanScore === computerScore) {
        console.log("draw")
    }

    if (humanScore > computerScore) {
        console.log("Human win")
    } else {
        console.log("computer win")
    }

    console.log(`Scores\nHuman: ${humanScore}\nComputer: ${computerScore}`)
}

playGame();