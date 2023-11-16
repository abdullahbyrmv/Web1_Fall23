function sum_avg_min_max(array){
    let sum=0;
    let avg=0;
    let min=1000000000;
    let max=-1000000000;
    
    for (let i = 0; i < array.length; i++) {
    
    sum += array[i];
    
    if(array[i]<min){
        min=array[i];
    }
    if(array[i]>max){
        max=array[i];
    }
}
    avg=sum/array.length;
    console.log("sum = " + sum + "\navg = " + avg + "\nminimum = " + min + "\nmaximum = " + max);
}

function MostRepeated(array){
    let appearances = 1;
    let counter=0;
    let res=0;

    for (var i=0; i<array.length; i++)
    {
        for (var j=i; j<array.length; j++)
            {
                if (array[i] == array[j])
                {
                  counter++;
                }
                if (appearances<counter)
                {
                  appearances=counter; 
                  res = array[i];
                }
        }
        counter=0;
}
    console.log("most repeated element: " + res +" ( " + appearances +" times ) ");
}

function LeastRepeated(array){
    var appearances = array.length + 1;
    var counter = 0;
    var res = -1;
    
    for (var i = 0; i < array.length; i++) {
       counter = 0;
       for(let j = 0; j < array.length; j++){
         if(array[i] == array[j]){
            counter++;
         }
      }
         if(counter < appearances){
            appearances = counter;
            res = array[i];
      }
   }
   console.log("Least repeated element: " + res + " ( " + appearances + " times )");
}


let array = [1,2,2];

sum_avg_min_max(array);

MostRepeated(array);

LeastRepeated(array);
