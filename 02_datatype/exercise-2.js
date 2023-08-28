/* Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.  */
{
  console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
  console.log("\n");
}


/* Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */
{
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
console.log("\n");
}


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
{
  let x = '10';
  let y = 10;
  console.log(x === y);
  console.log(typeof x);
  console.log(typeof y);
  
  x = Number(x);
  console.log(x === y);

  console.log("\n");
}

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
{
  // let num = 9.81
  // let numInt = parseInt(num)
  // console.log(numInt);
  // console.log("\n");
}

// Check if 'on' is found in both python and jargon
{
  let text1 = 'python';
  let text2 = 'jargon';
  console.log(text1.includes('on') || text2.includes('on'));
  console.log("\n");
}

// I hope this course is not full of jargon. Check if jargon is in the sentence.
{
  let text = 'I hope this course is not full of jargon.';
  console.log(text.includes('jargon'));
  console.log("\n");
}

// Generate a random number between 0 and 100 inclusively.
{
  let num = Math.random();
  let numBet0_10 = Math.floor(num*11)
  console.log(numBet0_10);
  console.log("\n");
}

// Generate a random number between 50 and 100 inclusively.
{
   let num = Math.random();
  let numBet50_10 = Math.floor(num*50)+50
  console.log(numBet50_10);
  console.log("\n");
}

// Generate a random number between 0 and 255 inclusively.
{
   let num = Math.random();
  let numBet0_225 = Math.floor(num*255)
  console.log(numBet0_225);
  console.log("\n");
}

// Access the 'JavaScript' string characters using a random number.
{
  let string = 'Javascript';
  let len = string.length;
  let num = Math.random()*(len-1);
  console.log(string.charAt(num));
  console.log("\n");
}


// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
{
  let string = 'You cannot end a sentence with because because because is a conjunction';
  let first = string.indexOf('because');
  let last = string.lastIndexOf(' is');
  console.log(first);
  console.log(last);
  let text2 = string.slice(first,last);
  console.log(text2);
}
