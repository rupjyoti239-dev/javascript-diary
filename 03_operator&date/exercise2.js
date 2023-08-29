var readlineSync = require('readline-sync');



// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
{
  let length = Number(readlineSync.question('Enter the length of the triangle: '));
  let base = Number(readlineSync.question('Enter the base of the triangle: '));
  console.log(` Are of the triangle is: ${0.5*length*base}`);
  console.log("\n");
}

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
{
  let 
  sideA = Number(readlineSync.question('Enter side A')), 
  sideB = Number(readlineSync.question('Enter side B')), 
  sideC = Number(readlineSync.question('Enter side c')); 

  console.log(`Perimeter is: ${sideA + sideB + sideC}`);
  console.log("\n");
  
}


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
{
 let 
 length = Number(readlineSync.question("Enter the length")),
 width = Number(readlineSync.question("Enter the width"));

 console.log(`Perimeter is: ${2*(length+width)}`);
 console.log("\n");
}

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
{
  let radius = Number(readlineSync.question("Enter the radius"));
  console.log(`The area of the circle is: ${Math.PI*radius*radius}  and circumference of the circle is: ${2*Math.PI*radius}`);
  console.log("\n");
}




// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
{
  let hour = Number(readlineSync.question("Enter the number of hours: "));
  let rate = Number(readlineSync.question("Enter the rate per hour: "));
  console.log(`Total is: ${hour * rate}`);
  console.log("\n");
}


// If the length of your name is greater than 7 say, your name is long else say your name is short.
{
  let yourName = readlineSync.question("Enter your name");
  if(yourName.length<=7){
    console.log("Your name is short");
  }
  else{
    console.log("Your name is long");
  }

  console.log("\n");
}

/* Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */
{
  let firstName = readlineSync.question("Enter your name");
  let familyName = readlineSync.question("Enter your family name");

  if(firstName.length>familyName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`);
  }

  console.log("\n");

}






//! EXERCISE 3:
/*Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

{
  const now = new Date();
 const result2 = new Date().toLocaleString('en-GB', {
  hour12: true,
});
console.log(result2);

}