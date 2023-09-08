
// multiply each array element by 2
const ar = [1,2,3,4,5,6];

ar.forEach((num,index)=>{
  console.log(`${num}x 2 = ${num*2} at index: ${index}`);
})


console.log("\n\n");



// print name and age
const person = [
  {name: "rupjyoti", age: 23, address:"ghy"},
  {name: "jyoti", age: 21, address:"ghy"},
  {name: "viki", age: 23, address:"ghy"},
  {name: "ram", age: 22, address:"ghy"},
  {name: "sham", age: 20, address:"ghy"}
];

person.forEach((user)=>{
  console.log(`Name: ${user.name} and age: ${user.age}`);
})