//  function fun() {
//   console.log("inside set time out");
// }


// console.log("hello world");
// setTimeout(fun,9000);
// console.log("hello world 2");




const greeting = (name,role)=>{
   console.log(`hello my name is ${name}
   i'm a ${role}`);
}

const id = setTimeout(greeting,5000,"rupjyoti","software developer");
// setTimeout(greeting("Nathan", "Software developer"), 3000)
//setTimeout(greeting("rupjyoti","software developer"),5000); if we pass the argument inside the function it will execute immediately without waiting


// clearTimeout(id);