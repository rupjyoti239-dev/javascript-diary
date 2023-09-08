const person = {
  name: "rup",
  age: 23,
  xa: this,  // this will return the window object in browser
  about: function(){
    // console.log(this);  //this will return the current object
    console.log(`person name: ${this.name} and age: ${this.age}`);  //here this will return the nama and age the current objcet
  }
};

// console.log(person);
person.about();
// console.log(person.name);
console.log(person.xa);





// const person2 = {
//   name: "rupjyoti",
//   age: 21,
//   about: ()=>{
//     console.log(this);
//     // console.log(`name: ${this.name}`);
//   }
// };

// person2.about()

