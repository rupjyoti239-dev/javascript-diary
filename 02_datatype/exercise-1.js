// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
{
  let challenge = '30 Days Of JavaScript';
  console.log("\n")
}
// Print the string on the browser console using console.log()
{
 let challenge = '30 Days Of JavaScript';
 console.log(challenge);
 console.log("\n");
}


// Print the length of the string on the browser console using console.log()
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.length);
  console.log(("\n"));
}


// Change all the string characters to capital letters using toUpperCase() method
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.toLocaleUpperCase());
  console.log("\n");
}


// Change all the string characters to lowercase letters using toLowerCase() method
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.toLocaleLowerCase());
  console.log("\n");
}



// Cut (slice) out the first word of the string using substr() or substring() method
{
  let challenge = '30 Days Of JavaScript';
  let text = challenge.substring(0,2);
  let text2 = challenge.substr(0,7);
  console.table([text,text2]);
  console.log("\n");
}


// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
{
  let challenge = '30 Days Of JavaScript';
  let text = challenge.slice(3);
  console.log(text);
  console.log("\n");
}


// Check if the string contains a word Script using includes() method
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.includes("Script"));
  console.log("\n");
}


// Split the string into an array using split() method
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.split(""));
  console.log("\n");
}



// Split the string 30 Days Of JavaScript at the space using split() method
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.split(""));
  console.log("\n");
}


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
{
  let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
  let ar = companies.split(",");
  console.log(ar);
  console.log("\n");
}



// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
{
  let challenge = '30 Days Of JavaScript';
  // let replace = challenge.replace("JavaScript", "Python");
  let replace = challenge.replace(/javascript/ig, "Python");   /*   case insensitive */
  console.log(replace);
  console.log("\n");
}



// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.charAt(15));
  // console.log(challenge.charCodeAt(15));   chatCodeAt method will return the ascii value of the letter present in index 15
  console.log("\n");
}


// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.charCodeAt(11));
  console.log("\n");
}


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.indexOf('a'));
  console.log("\n");
}







// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
{
  let challenge = '30 Days Of JavaScript';
  console.log(challenge.lastIndexOf('a'));
  console.log("\n");
}



// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
{
   let text = 'You cannot end a sentence with because because becausee is a conjunction';
   console.log(text.indexOf('becausee'));
   console.log("\n");
}



// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
{
 let text = 'You cannot end a sentence with because because because is a conjunction'
 console.log(text.lastIndexOf('because'));
 console.log("\n");
}






// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
{
 let text = 'You cannot end a sentence with becausee becauseee because is a conjunction'
 console.log(text.search('because'));
 console.log("\n");
}


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
{
  let string = ' 30 Days Of JavaScript ';
  console.log(string.trim());
  console.log("\n");
}
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
{
   let string = '30 Days Of JavaScript';
   console.log(string.startsWith('3'));
   console.log("\n");
}
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
{
   let string = '30 Days Of JavaScript';
   console.log(string.endsWith("t"));
   console.log("\n");
}
// Use match() method to find all the a’s in 30 Days Of JavaScript
{
   let string = '30 Days Of JavaScript';
   let a = string.match(/a/gi);  /* gi is for global case insensitive */
   console.log(a);
   console.log("\n");
}
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
{
  let text1 = '30 Days of';
  let text2 = 'JavaScript';
  console.log(text1 + text2);
  console.log("\n");
}
// Use repeat() method to print 30 Days Of JavaScript 2 times
{
   let string = '30 Days Of JavaScript'
   console.log(string.repeat(2));
}