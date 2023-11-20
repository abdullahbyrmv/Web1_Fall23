function rand(a, b, n){
    let res = [];
    while(n-->0){
        res.push(Math.floor(Math.random()*(b-a+1))+a);
    }
    return res;
}

function count(arr){
    const cnt = {};
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        if(cnt[element]!==undefined){
            cnt[element] +=1;
        }
        else{
            cnt[element] = 1;
        }
    }
    return cnt;

}

   
a = parseInt(prompt("Enter a: "))
b = parseInt(prompt("Enter b: "))
n = parseInt(prompt("Enter n: "))

let randoms = rand(a, b, n);

console.log(randoms);

let frequency= count(randoms);

for (let key in frequency){
    console.log(key +" is repeated "+frequency[key]+" times.");
}

