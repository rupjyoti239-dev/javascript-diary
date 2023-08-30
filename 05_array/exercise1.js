let readlineSync = require('readline-sync');



// Declare an empty array;
{
  const array = new Array();
}



// Declare an array with more than 5 number of elements
{
  const cars = ['maruti 800', 'alto', 'dzire', 'nexa', 'swift'];
}
// Find the length of your array
{
  const cars = ['maruti 800', 'alto', 'dzire', 'nexa', 'swift'];
  console.log(cars.length);
  console.log("\n");
}
// Get the first item, the middle item and the last item of the array
{
  const cars = ['maruti 800', 'alto', 'dzire', 'nexa', 'swift'];
  console.log(cars[0]);
  console.log(cars[2]);
  console.log(cars[4]);
  console.log("\n");
}
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
{
  const mixDataTypes = [1, 'two', true, 5, [1, 20]];
  console.log(mixDataTypes);
  console.log("\n");
}
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

}
// Print the array using console.log()
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies);
  console.log("\n");

}
// Print the number of companies in the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.length);
  console.log("\n");

}
// Print the first company, middle and last company
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies[2]);
  console.log(itCompanies[4]);
  console.log("\n");

}
// Print out each company
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies[0]);
  console.log(itCompanies[1]);
  console.log(itCompanies[2]);
  console.log(itCompanies[3]);
  console.log(itCompanies[4]);
  console.log(itCompanies[5]);
  console.log(itCompanies[6]);
  console.log("\n");
}
// Change each company name to uppercase one by one and print them out
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  let one = itCompanies[0].toLocaleUpperCase();
  let two = itCompanies[1].toLocaleUpperCase()
  let three = itCompanies[2].toLocaleUpperCase();
  let four = itCompanies[3].toLocaleUpperCase();
  let five = itCompanies[4].toLocaleUpperCase();



  console.table([one, two, three, four, five]);
  console.log("\n");
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.toString());
  console.log("\n");
}
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  let company = readlineSync.question("Enter company name: ");

  if(itCompanies.includes(company)){
    console.log(company);
  }else{
    console.log(`${company} is not found`);
  }

  console.log("\n");
}
// Filter out companies which have more than one 'o' without the filter method
{

}
// Sort the array using sort() method
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.sort());
  console.log("\n");
}
// Reverse the array using reverse() method
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.reverse());
  console.log("\n");
}
// Slice out the first 3 companies from the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.slice(0,3));
  console.log("\n");
}
// Slice out the last 3 companies from the array
{
 const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
 console.log(itCompanies.slice(-3));
}
// Slice out the middle IT company or companies from the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.slice(3,4));
  console.log("\n");
}
// Remove the first IT company from the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.shift());
  console.log(itCompanies);
  console.log("\n");
}
// Remove the middle IT company or companies from the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.splice(2,2));
  console.log(itCompanies);
  console.log("\n");
}
// Remove the last IT company from the array
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.pop());
  console.log(itCompanies);
  console.log("\n");

}
// Remove all IT companies
{
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.splice(0));
  console.log( itCompanies);
}