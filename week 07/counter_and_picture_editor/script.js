// Simple Counter

const defaultCounterValue = 10;
let counter = defaultCounterValue;

let dispEl = document.querySelector('#display');

display(counter);

let incBtn = document.querySelector('.inc');
let decBtn = document.querySelector('.dec');
let resBtn = document.querySelector('.res');

incBtn.addEventListener('click', incAndDisplay);
decBtn.addEventListener('click', decAndDisplay);
resBtn.addEventListener('click', resetAndDisplay);

function incAndDisplay(){
    display(++counter);
}

function decAndDisplay(){
    display(--counter);
}

function resetAndDisplay(){
    display(counter = defaultCounterValue);
}

function display(value){
    dispEl.innerHTML = value;
}


// Picture Editer

let widthEl = document.querySelector("#width");
let heightEl = document.querySelector("#height");
let loadBtn = document.querySelector(".loadimg");
let imgEl = document.querySelector("img");
const baseUrl = "https://picsum.photos";

loadBtn.addEventListener("click",handleClick);

function handleClick(){
    width = isNaN(widthEl.value) ? width : parseInt(widthEl.value);
    height = isNaN(heightEl.value) ? height : parseInt(heightEl.value);

    let url = `${baseUrl}/${width}/${height}`;

    imgEl.setAttribute("src",url);
}
