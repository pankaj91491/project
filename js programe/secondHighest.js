function findsecondHighest(arr){
    const uniquesortArr=[...new Set(arr)].sort((a,b)=>b-a);

if(uniquesortArr.length<2){
    return `the secondhighest is not found`
 }
 return uniquesortArr[1]
};
 
const numbers = [12, 5, 6, 8, 12, 10, 84, 15];
const secondHighest = findsecondHighest(numbers);
console.log("Second highest number:", secondHighest);

// built in method:

let num=[12,43,66,2,34,75];
let NewNum=num.sort((a,b)=>a-b).reverse()
console.log(NewNum[1]);

 