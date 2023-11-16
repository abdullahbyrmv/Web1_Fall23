function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let rounds = prompt("How many rounds you would like to play?");

for(let i = 1 ; i <= rounds ; i++){

    console.log("\nRound " + i);

    let dice1 = getRandomNumber(1,6);
    let dice2 = getRandomNumber(1,6);
    
    console.log("dice1 = " + dice1);
    console.log("dice2 = " + dice2);

    if((dice1 + dice2) === 7 || (dice1 + dice2) === 11){
    console.log("Bet Winned\n");
    }

    else if((dice1 + dice2) === 2 || (dice1 + dice2) === 3 || (dice1 + dice2) === 12){
    console.log("crapping out\n");
    }
}
