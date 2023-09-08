// CREATING AN OBJECT
{

  const person = {
    name: "Ripjyoti sarma",
    age: 23
  }
  console.log(person);



  console.log("\n");
}





// ACCESSING DATA FROM OBJECT

{
  const person = {
    name: "Ripjyoti sarma",
    age: 23
  }

  //👉 using key-name:
  console.log(person.name);
  console.log(person.age);

  //👉 using square bracket:  square brakerts are mainly used when key has more than one word(eg: contact number, user name)
  console.log(person['name']);
  console.log(person['age']);


  console.log("\n");
}




// ADDING NEW VALUE TO AN OBJECT
{
  const person = {
    name: "rupjyoti",
    age: 23
  }

  //adding new key value
  person['contact number'] = 88128374;
  person.address = "guwahati";
  person.title = "developer";

  //print the whole object 
  console.log(person);


  console.log("\n");
}






// clone a object 

const ob1 = {name: "rupjyoti" , age:23, address: "ghy"};
// const obj2 = {...ob1};
const obj2 = Object.assign({}, ob1)
console.log(obj2);




