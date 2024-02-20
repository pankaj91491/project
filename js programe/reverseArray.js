function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap elements at start and end
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      // Move towards the center of the array
      start++;
      end--;
    }
  
    return arr;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

  //with built in function


  const arr=[1,2,3,4,5,6,7];
   const NewArr=arr.reverse();
   console.log(NewArr);

   //remove duplicates fron an array

   let num=[21,12,43,66,34,66,23,65];
   const rmD=num.filter((value,index,self)=>{
     return  self.indexOf(value)===index;
   });

    console.log(rmD)

    //remove duplicates fron an array second method

    let number=[1,1,1,2,2,3,4,45,5,5,45];
    function removeDup(arrr){
      let unique=[];
      for(let i=0;i<=arrr.lenth;i++){
       if(unique.indexOf(arrr[i])===-1){
        unique.push(arrr[i]);
       }
      }
      return unique;
    }
     
     const dup=removeDup(number)
     console.log(dup)