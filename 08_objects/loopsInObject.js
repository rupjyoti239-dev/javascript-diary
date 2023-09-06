// to iterate over an object we mainly used for-in loop or forEach loop

{
  const person = {
    name: "rupjyoti",
    age: 23,
    skills: ['HTML','CSS','JAVASCRIPT']
  };


  //👉 using for loop-in loop to print only value 
  for(let value in person){
    console.log(person[value]);
  }
  console.log("\n");


  //👉 using for loop-in loop to print key and value 
 
    for(let value in person){
      console.log(`${value} : ${person[value]}`);
    }


    //👉 print only the skills
    console.log(person.skills);
}




