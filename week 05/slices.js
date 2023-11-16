function printAllPossibleSlices(str){
    const res = [];
  
    res.push("_" + str);
  
    for (let i = 0; i < str.length - 1; i++) {
        
      const firstSlice = str.substring(0, i + 1);
  
      const secondSlice = str.substring(i + 1);
  
      res.push(`${firstSlice}_${secondSlice}`);
    }
  
    res.push(str + "_");
  
    console.log(res.join("\n"));
  }
  
  const word = prompt("Enter word:")
  
  printAllPossibleSlices(word);
