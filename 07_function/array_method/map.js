// MAP FUNCTION RETURN THE RESULT IN THE FORM OF AN ARRAY

// print name and age
const person = [
  {name: "rupjyoti", age: 23, address:"ghy"},
  {name: "jyoti", age: 21, address:"ghy"},
  {name: "viki", age: 23, address:"ghy"},
  {name: "ram", age: 22, address:"ghy"},
  {name: "sham", age: 20, address:"ghy"}
];


const result = person.map((user)=>{
  return `name: ${user.name} and address: ${user.address}`
})

console.log(result);