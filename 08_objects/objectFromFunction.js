const userMethod = {
   about: function(){
      return `Usr name is ${this.fullName} and age is ${this.age}`
  },

  is18: function(){
    return this.age>=18;
  }
}

function createUser(name,age,email,address){
  // const user = {};
  const user = Object.create(userMethod) // this will create an empty user object and also it is connected with userMethod and is user object can inharit all the methods declared inside userMethod
  user.fullName = name;
  user.age= age;
  user.email = email;
  user.address = address;
  // user.about =  userMethod.about;
  // user.is18 = userMethod.is18;

  return user;
}



const user1 = createUser("rupjyoti", 23,"rup.gmail.com","guwahati");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());