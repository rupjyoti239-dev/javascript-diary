// setTimeout and promise

function myPromise(){
  return new Promise((resolve,reject)=>{
    const value = true;
    setTimeout(()=>{
       if(value){
      resolve();
    }else{
      reject()
    }
    },3000)
  })
}


myPromise().
then(()=>{
  console.log("resolve");
}).
catch(()=>{
  console.log("reject");
})