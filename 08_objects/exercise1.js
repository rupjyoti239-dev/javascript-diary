// Create an empty object called dog
{
  const dog = {

  }
}
// Print the the dog object on the console
{
  const dog = {

  }
  console.log(dog);
}
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
{
  const dog = {}
  dog.name = "Bruno";
  dog.legs = 4;
  dog.color = "black";
  dog.age = 1;
  dog.bark = function(){
    return `woof woof`
  }
}
// Get name, legs, color, age and bark value from the dog object
{
  const dog = {}
  dog.name = "Bruno";
  dog.legs = 4;
  dog.color = "black";
  dog.age = 1;
  dog.bark = function(){
    return `woof woof`
  }

  console.log(dog.name);
  console.log(dog.legs);
  console.log(dog.color);
  console.log(dog.age);
  console.log(dog.bark());
}
// Set new properties the dog object: breed, getDogInfo

{
  
  const dog = {}
  dog.name = "Bruno";
  dog.legs = 4;
  dog.color = "black";
  dog.age = 1;
  dog.bark = function(){
    return `woof woof`
  }

  dog.breed = "husky";
  dog.getInfo = function(){
    return `Dog name: ${dog.name}
            dog legs: ${dog.legs}
            dog color: ${dog.color}
            dog age: ${dog.age}
            dog bark: ${dog.bark()}
            dog breed: ${dog.breed}
            `
  }

  console.log(dog);
  console.log(dog.bark());
  console.log(dog.getInfo());

}