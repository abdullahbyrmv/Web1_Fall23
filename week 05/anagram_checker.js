function AnagramChecker(str1, str2) {
    
    let len1 = str1.length;
    let len2 = str2.length;
     
    if(len1 !== len2){
       console.log('False');
       return;
    }
     
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');
     
    if(sorted1 === sorted2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 
 let string1 = prompt("Enter first string:");
 let string2 = prompt("Enter second string:");
 
 AnagramChecker(string1,string2);
 