// const readlineSync = require('readline-sync');
// const countries = require('./countries')    old import method
import { countries } from './countries.js';
import { webTechs } from './webTechs.js';


// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file




/*First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13 */

{
  let string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  let array = string.split(" ");
  console.log(array);
  console.log(array.length);
}




/*In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
1>add 'Meat' in the beginning of your shopping cart if it has not been already added
2>add Sugar at the end of you shopping cart if it has not been already added
3>remove 'Honey' if you are allergic to honey
4>modify Tea to 'Green Tea' */
{
  // const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
  // if(!(shoppingCart.includes('meat'))){
  //   shoppingCart.unshift("meat");
  // }
  // if(!(shoppingCart.includes('suger'))){
  //   shoppingCart.push('suger');
  // }
  // let allergic = readlineSync.question("are you allergic to honey? ");
  // if(allergic == 'yes'){
  //   shoppingCart.splice(4,1)
  // }
  // shoppingCart[3]='green tea';
  // console.log(shoppingCart);
}

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
{
  
  if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
  }
  else{
    countries.push('Ethiopia')
  }

}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
{
    if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
  }
  else{
    webTechs.push('Sass');
    console.log(webTechs);
  }
}

/*Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] */
{
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB'];

  const fullStack = [...frontEnd, ...backEnd];
  console.log(fullStack);
}