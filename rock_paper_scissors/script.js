document.addEventListener("DOMContentLoaded", function() {
    
  let choices = ["Rock", "Paper", "Scissors"];
  
    // Randomly choose moves for both players
    let player1Choice = choices[Math.floor(Math.random() * choices.length)];
    let player2Choice = choices[Math.floor(Math.random() * choices.length)];
  
    // Display the choices
    document.getElementById("choice1").textContent = player1Choice;
    document.getElementById("choice2").textContent = player2Choice;
  
    // Determine the winner
    let result="";

    if (player1Choice === player2Choice) {
      result = "A Draw";
    } 
    else if (
      (player1Choice === "Rock" && player2Choice === "Scissors") ||
      (player1Choice === "Paper" && player2Choice === "Rock") ||
      (player1Choice === "Scissors" && player2Choice === "Paper")
    ) {
      result = "Player 1 wins";
      document.getElementById("player1").classList.add("winner");
      document.getElementById("player2").classList.add("loser");
    } 
    else {
      result = "Player 2 wins";
      document.getElementById("player2").classList.add("winner");
      document.getElementById("player1").classList.add("loser");
    }
  
    // Display the result outside of the player divs
    document.getElementById("message").textContent = result;
  
    // Add a smiling face to the winning player
    if (result.includes("Player 1 wins")) {
      document.getElementById("choice1").textContent = "😊 " + player1Choice;
    } 
    else if (result.includes("Player 2 wins")) {
      document.getElementById("choice2").textContent = "😊 " + player2Choice;
    }
  });
  