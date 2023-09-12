const users = [
  {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
 {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
]


// print all email
// {
//   const email = (obj)=>{
//     let ar = [];
//     for(let user of obj){
//       ar.push(user.email);
//     }
//     return ar;
//   }

//   console.log(email(users));
// }



// Count logged in users count users having greater than equal to 50 points from the following object.

// {
//   const logged = (obj)=>{
//     let count = null;
//     for(let user of obj){
//       if(user.isLoggedIn){
//         count++;
//       }
//     }
//     return count;
//   }


//   console.log(logged(users));
// }





// count users having greater than equal to 50 points from the following object.
// {
//   const point = (obj)=>{
//     let count =null;
//     for(let user of obj){
//       if(user.points>=50){
//         count++;
//       }
//     }
//     return count;
//   }


//   console.log(point(users));
// }



// Find people who are MERN stack developer from the users object

// {
//   const mern = (obj)=>{
//     for(let user of obj){
//       if((user.skills.includes("React")) && (user.skills.includes("Node")) && (user.skills.includes("MongoDB")) && (user.skills.includes("Express"))){
//         console.log(user.email);
//       }
//     }
//   }

//   mern(users)
// }



// print skills and email
// {
//    const printInfo = (obj)=>{
//     let str = "";
//     for(let x of obj){
//       str += `email: ${x.email} and skills: ${x['skills']} \n `
//     }

//     return str;
//    }

//    console.log(printInfo(users));
// }


// print name and skills
{
  const printinfo = (obj)=>{
    for(let x of obj){
      console.log(x);
    }
  }

  printinfo(users)
}








