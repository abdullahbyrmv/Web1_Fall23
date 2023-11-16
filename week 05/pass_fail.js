let username=prompt("Enter your name: ");

console.log("Greetings " + username);

let score=parseFloat(prompt("What is your score?"));

if(score<59.5){
    console.log("You failed the course");
}
else if(score>=59.5 && score<69.5){
    console.log("You got D letter grade");
}
else if(score>=69.5 && score<79.5){
    console.log("You got C letter grade");
}
else if(score>=79.5 && score<89.5){
    console.log("You got B letter grade");
}
else if(score>=89.5 && score<=100){
    console.log("You got A letter grade");
}
