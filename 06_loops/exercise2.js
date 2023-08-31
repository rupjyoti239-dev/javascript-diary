const prompt = require('prompt-sync')();
/*Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba */

{
  const ar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let idLength = parseInt(prompt("Enter the length of your id: "));

  const id = [];
  while (id.length < idLength) {
    let num = Math.floor(Math.random() * ar.length);
    if (!(id.includes(ar[num]))) {
      id.push(ar[num])
    }
  }
  console.log(id.join(""));
  console.log("\n");
}



/*Write a script which generates a random hexadecimal number.

'#ee33df'*/

{
  const ar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const id = [];
  while (id.length < 6) {
    let num = Math.floor(Math.random() * ar.length);
    id.push(ar[num]);
  }
  console.log(`#${id.join("")}`);
  console.log("\n");
}






/*Write a script which generates a random rgb color number.

rgb(240,180,80)*/
{
  let string = "";
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 254 + 1);
    string += `${num},`
  }
  let string2 = string.slice(0, string.length - 1);
  console.log(`rgb(${string2})`);
  console.log("\n");
}




/*Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/
{
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const newAr = [];
  for (let country of countries) {
    newAr.push(country.toLocaleUpperCase());
  }

  console.log(newAr);
  console.log("\n");
}


/*Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]*/
{
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newAr = [];
  for (let country of countries) {
    newAr.push(country.length)
  }
  console.log(newAr);
  console.log("\n");
}


/*
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]*/

{
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let mainArray = [];
  for(let country of countries){
    let ar = [];
    ar.push(country);
    ar.push(country.slice(0,3));
    ar.push(country.length);
    mainArray.push(ar);
  }

  console.log(mainArray);
  console.log("\n");
}





/*In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']*/
{
 const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let ar = [];

for(let country of countries){
  if(country.includes('land')){
      ar.push(country);
  }
}

if(ar.length>0){
  console.log(ar);
}else{
  console.log('all countries are without land');
}

console.log("\n");

}





/* In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']*/
{
   const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const ar = [];

for(let country of countries){
  if(country.includes('ia')){
    ar.push(country)
  }
}
if(ar.length>0){
  console.log(ar);
}else{
  console.log('These are countries ends without ia');
}

console.log("\n");

}



/*Using the above countries array, find the country containing the biggest number of characters.

Ethiopia*/
{
  const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenyaaaaaaaaaa'
]
 
let cn = countries[0];
for(let i = 0;i<countries.length;i++){
    if(countries[i].length>cn.length){
      cn = countries[i];
    }
}
console.log(cn);
console.log("\n");
}


/*Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']*/
{
  const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
  let ar = [];
  for(let country in countries){
    if(countries[country].length === 5){
      ar.push(countries[country]);
    }
  }
  console.log(ar);
  console.log("\n");
}


/*Find the longest word in the webTechs array */
{
  const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let web = webTechs[0];
for(let stack of webTechs){
  if(stack.length>web.length){
    web = stack
  }
}
console.log(web);
console.log("\n");
}




/*Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]*/

{
  const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let mainArray = [];
for(let stack of webTechs){
  let ar = [];
  ar.push(stack);
  ar.push(stack.length);
  mainArray.push(ar);
}

console.log(mainArray);
console.log("\n");

}



/*An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack */
{

}



// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
{
  const ar = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

  for(let x of ar){
    console.log(x);
  }
}




// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

{
  const ar = ['banana', 'orange', 'mango', 'lemon'];

  const newAr = [];
  for(let i =ar.length-1;i>=0;i--){
      newAr.push(ar[i]);
  }

  console.log(newAr);
  console.log("\n");

}



/*Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB*/
  {
    const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  const [frontEnd, backEnd] = fullStack;
  console.log(frontEnd);
  console.log(backEnd);
  let fullStack2 = [...frontEnd,...backEnd];
  console.log(fullStack2);
  }