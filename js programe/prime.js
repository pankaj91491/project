//print prime numbers with generator function
 
 /*function* generateprime(){
    let primes=[]
    for(let num=2; ;num++){
        if (primes.every((prime) => num % prime !== 0)) {
            primes.push(num);
            yield num;
    }
  }
}
  const primeGenerator=generateprime();
  for(let i=0; i<=100;i++){
    console.log(primeGenerator.next().value);
  } 
    */
   
  // prime numbers in range 

  /*  function* GeneratePrimeInRange(start,end){
    for(let num=Math.max(2,start);num<=end;num++){
    if(Isprime(num)){
       yield num;
    }
  }
}

  function Isprime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i===0){
        return false;
    }
  }
  return num>1;
} 
 
const startRange=10;
const endRange=50;

const GeneratorPrime=GeneratePrimeInRange(startRange,endRange);
console.log(`prime number between the ${startRange} and ${endRange} is:`);
for(let prime of GeneratorPrime) {
    console.log(prime);
}
  */
//print prime without generator function

function findprimes(start,end){
    let primes=[]
    for(let i=start; i<=end; i++){
        if(IsPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}
function IsPrime(num){
  
  for(let i=2; i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false
    }
  }
  return num>1
}

 console.log(findprimes(40,100));