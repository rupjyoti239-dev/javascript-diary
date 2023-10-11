// function returning promise
function myPromise(){
  const bucket = ['veg', "salt", 'water', 'rice', 'suger', 'coffee']
  return new Promise((resolve, reject) => {
  if (bucket.includes('veg') && bucket.includes('rice') && bucket.includes('salt')) {
    resolve("Fried rice is ready");
  }
  else {
    reject("item not available")
  }
})
}



myPromise()
.then((success)=>{
  console.log(success);
})
.catch((failure)=>{
  console.log(failure);
})