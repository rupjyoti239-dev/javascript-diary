// 
 
 
function about(hobby,favSports){
  console.log(this.name, this.age, hobby, favSports);
}
const person = {
  name: "rup",
  age: 23,
}


const person2 = {
  name: "user",
  age: 20
}


about.call(person,"coding", "cricket");
about.call(person2);



// apply
about.apply(person, ["playing", "cricket"]);
about.apply(person2);