function Explode_String(str) {
  
    let res="";
    
    for (let i = 0; i < str.length; i++) {
        res += str.slice(0, i);
    }
        res += str;
        console.log(res);
}


const string = prompt("Enter String: ");

Explode_String(string);
