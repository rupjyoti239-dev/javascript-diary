// Write a single line comment which says, comments can make code readable
{
  // comments can make code readable
}



// Write another single comment which says, Welcome to 30DaysOfJavaScript
{
  // Welcome to 30DaysOfJavaScript
}




// Write a multiline comment which says, comments can make code readable, easy to reuse and informative
{
  /*
  comments can make code readable,
   easy to reuse and informative
   */
}



// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
{
  let name = "Rupjyoti";
  let canDrive = true;
  let age;
  let job = null;
}





// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
{
  let name = "Rupjyoti";
  let canDrive = true;
  let age;
  let job = null;

  console.table([typeof (name), typeof (canDrive), typeof (age), typeof (job)]);

  console.log("\n");
}







// Declare four variables without assigning values
{
  let name;
  let canDrive;
  let age;
  let job;
}

// Declare four variables with assigned values
{
  let name = "Rupjyoti";
  let canDrive = true;
  let age;
  let job = null;
}

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
{

  let firstName = "Rupjyoti";
  let lastName = "sarma";
  let maritalStatus = false;
  let country = "India";
  let age = 23;
  
  console.table([firstName,lastName,maritalStatus,country,age]);
  console.log("\n");
}

// Declare variables to store your first name, last name, marital status, country and age in a single line
{
  
  let 
  firstName = "rupjyoti",
  lastName = "sarma",
  maritalStatus = false,
  country = "India",
  age =23;
  console.table([firstName,lastName,maritalStatus,country,age]);   //this works exactly same as the above one


  console.log("\n");
}

// Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
{
  const myAge = 23;
  const yourAge = 20;
  console.log(`my age is ${myAge} and your age is ${yourAge}`);
}
