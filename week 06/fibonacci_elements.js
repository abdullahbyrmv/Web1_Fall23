function fib(a, b){
    let numbers=[];
    
    numbers[0] = 1;
    numbers[1] = 1;
    
    for(let k=2; k<b; k++){
        numbers[k] = numbers[k-1] + numbers[k-2];
    }
    let res = [];
    for(let k=a-1; k<b; k++){
        res.push(numbers[k]);
    }
    return res;
}

let a = prompt("Enter number 1: ");
let b = prompt("Enter number 2: ");

let array=fib(a,b);

console.log(array);