// promise chaining

function myPromise(){
  return new Promise((reslove,reject)=>{
    reslove("rup");
  })
}


myPromise().then((value)=>{
  console.log(value);
  value += "jyoti";
  return value 
}).then((value)=>{
  console.log(value);
  value += " sarma";
  return value;
}).then((value)=>{
  console.log(value);
})