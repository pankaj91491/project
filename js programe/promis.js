 function getCheeze(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheeze="ye lo Cheez";
            resolve(cheeze)
        },2000)   
    }) 
 }

 function getburger(cheeze){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Burger="ye lo burger";
            resolve(Burger)
        },2000)   
    }) 
 }

 function getpizza(Burger){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizaa="ye lo pizaa";
            resolve(pizaa)
        },2000)   
    }) 
 }

 getCheeze().then((cheeze)=>{
    console.log('cheeeze bn gya h:',cheeze);
    return getburger(cheeze);
 }).then((Burger)=>{
    console.log('burger bn gya h:',Burger);
    return getpizza(Burger);
 }).then((pizaa)=>{
    console.log('pizaa bn gya h:',pizaa);
 }).catch((data)=>{
    console.log('process end')
 })