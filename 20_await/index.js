// normal get request without using await

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{
//       return res.json();
//     })
//     .then((data)=>{
//       console.log(data);
//     })





// async function

// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   if(response.ok){
//      const data = await response.json();
//   return data
//   }
//   else{
//     throw new Error("new Error")
//   }
 
// }



// arrow aysnc function 
const getUsers =async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if(response.ok){
     const data = await response.json();
  return data
  }
  else{
    throw new Error("new Error")
  }
}







getUsers()
  .then((myData) => {
    console.log(myData);
  })
  .catch((er) => {
    console.log(er);
  })