// OBJECT DESTRUCTURING
const person = {
  name: "rupjyoti",
  age: 23,
  address: "guwahati",
  title: "developer"
}


let {name,address, title} = person;

console.log(name);
console.log(address);


console.log("\n");






// IF WE WANT TO CHANGE THE VARIABLE NAME WE CAN USE : AND GIVE A NEW NAME

let {name:useName, age:userAge} = person;
console.log(useName);
console.log(userAge);






console.log("\n\n\n");






// SUPPOSE WE HAVE AN ARRAY OF OBJECT 


const users = [
  {name: "rup", age: 23, address: "ghy"},
  {name: "jyoti", age: 21, address: "rangia"},
  {name: "ram", age: 25, address: "nalbari"},
  {name: "sham", age: 20, address: "ghy"}
];


const [user1, user2, user3,user4] = users;
console.log(user1);
console.log(user2);
console.log(user3);




console.log("\n\n\n");




/* if we want to access the  
 👉name of first object 
 👉address of the 3rd object 
 👉age of 4th object 
*/

const [{name:obj1_name}, , {address:obj3_address}, {age:obj4_age}] = users;
console.log(obj1_name);
console.log(obj3_address);
console.log(obj4_age);

