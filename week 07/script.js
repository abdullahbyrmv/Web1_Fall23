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
