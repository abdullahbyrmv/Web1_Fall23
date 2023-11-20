function slicer(string){
    return string[0].toUpperCase()+string.slice(1);
}

function normalizeWord(string){
    let res = "";
    for(let i=0; i<string.length; i+=2){
        res+= slicer(string.slice(i, i+2));
    }
    return res;
}

function normalizeSentence(string){
    let splitted = string.split(' ');
    
    let res = "";
    
    for(let i=0; i<splitted.length; i++){
        if(i!=0){
            res+=" ";
        }
        res += normalizeWord(splitted[i]);
    }

    return res;
    
}


name = prompt("Please Write Your Full Name");

console.log(normalizeSentence(name));