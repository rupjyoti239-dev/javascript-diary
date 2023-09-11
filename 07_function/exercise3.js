var readlineSync = require('readline-sync');
/*Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'*/
// {
  

//   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//    let len = parseInt(readlineSync.question("Enter the id length:"));
//    let numOfId = parseInt(readlineSync.question("enter the number of id: "));
   
   
//    const generateId = ()=>{
//        let id = [];
//        while(id.length<len){
//          num = Math.floor(Math.random()*array.length);
//          id.push(array[num]);
//        }
//          return id.join("");
//      }


//      const idGenerator = ()=>{
//         let ar = [];
//         while(ar.length<numOfId){
//              ar.push(generateId())
//         }
//         return ar.toString();
//      }
    
   
  
// console.log(idGenerator());


// }










/**
 Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
 */

// {

//   const rgbColorGenerator = ()=>{
//       let rgb = [];
//       while(rgb.length<3){
//         let num = Math.floor(Math.random()*255);
//         rgb.push(num)
//       }
//       rgb = rgb.toString()
//       return `rgb(${rgb})`
//   }
//   console.log(rgbColorGenerator());
// }










/**
 Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

 */

// {
//   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
//   let name = readlineSync.question("Enter the color name: ");
//   let unit = parseInt(readlineSync.question("Enter the quantity: "));
//   const generateColors = (name,unit)=>{

//       let numOfColor = [];
//       if(name === 'hexa'){   
//         while(numOfColor.length<unit){
//         let hex = [];
//         while(hex.length<6){
//           let num = Math.floor(Math.random()*array.length);
//           hex.push(array[num]);
//         }
//         numOfColor.push(`#${hex.join("")}`);
//         }

//       }
//       else if(name === 'rgb'){
//         while(numOfColor.length<unit){
//         let rgb = [];
//         while(rgb.length<3){
//           let num = Math.floor(Math.random()*255);
//           rgb.push(num);
//         }
//          numOfColor.push(`rgb(${rgb})`);
//       }
//       }
//       else{
//         return `enter a valid color betwwn rgb and hexa`
//       }

//       return numOfColor
//   }
//   console.log(generateColors(name,unit));
// }




// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// {
//    const shuffleArray = (ar)=>{
//     let newAr = [];
//     while(newAr.length<ar.length){
//       let num = Math.floor(Math.random()*ar.length);
//       if(!(newAr.includes(ar[num]))){
//         newAr.push(ar[num]);
//       }
      
//     }
//     return newAr;
//    }

//    console.log(shuffleArray([1,23,4,5,6]));
// }




// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// {
//   const factorial = (num)=>{
//     let result = 1;
//     for(let i=num;i>0;i--){
//       result *=i;
//     }
//     return result;
//   }

//   console.log(factorial(4));
// }




// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// {
//   const sumOfArrayItems = (ar)=>{
   
//   const res = ar.every((num)=>{
//     return typeof num === 'number';
//   });

//   if(res){
//     let sum = 0;
//     for(let x of ar){
//       sum += x;
//     }
//     return sum;
//   }
//   else{
//     return `all elements are not number`
//   }
   
   
//   }

//   console.log(sumOfArrayItems([1,2,'s',3]));
// }


// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// {
//   const average = (ar)=>{

//     const res = ar.every((num)=>{
//       return typeof num === 'number'
//     })
    
//     let sum =0;
//     let  avg = 0;
//     if(res){
//       for(let x of ar){
//         sum = sum + x;
//       }
//     }
//     avg = sum/ar.length;
//    return avg
   
//   }

//   console.log(average([1,2,3,4,5])); 
// }



// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
{
  const isValidVariable = (variable)=>{
     let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const res =  format.test(variable);
    if(res){
      return `invalid variable name`
    }else{
      return `valid variable`
    }
  }
  console.log(isValidVariable("iubvsiu"));
}