function sortStringAlphabetically(str) {
    const arr = str.split("");
  
    arr.sort();
  
    const sortedString = arr.join("");
  
    return sortedString;
  }
  
  const str = prompt("Enter String:");
  
  const sortedString = sortStringAlphabetically(str);
  
  console.log(sortedString);
  