const myPromise = new Promise((resolve, reject) =>{
    let age = 19;
    if(age>=18){
        resolve("Eligible for vote");
    }
    else{
        reject("Npt eligible for vote")
    }
})
console.log(myPromise);

// myPromise
//      .then((msg)=>console.log(msg) );
//      .catch((error)=>console.log(error));

const checkEligibility = ()=>{
    try{
    const msg = myPromise;
    console.log(msg);
    
  }catch(error){
    console.log(error);
  }
    
 
}

checkEligibility();