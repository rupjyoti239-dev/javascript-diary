const countries = [
  'Kenya',
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan'
  
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
{
  let newAr = [...countries];
  let sortedCountries =  newAr.sort();
  console.log(sortedCountries);
  console.log("\n\n");
}


// Sort the webTechs array and mernStack array
{
  const sortedWeb = webTechs.sort();
}



// Extract all the countries contain the word 'land' from the countries array and print it as array
{
  let land = [];
  for(let country of countries){
      if(country.includes('land')){
        land.push(country);
      }
  }
  console.log(land);
  console.log("\n");
}
// Extract all the countries containing only four characters from the countries array and print it as array
{
  let newAr = [];
  for(let country of countries){
    newAr.push(country.slice(0,4));
  }
  console.log(newAr);
  console.log("\n\n");
}

// Reverse the countries array and capitalize each country and stored it as an array
{
  let newAr = [];
  for(let i = countries.length-1;i>=0;i--){
    newAr.push(countries[i].toLocaleUpperCase());
  }
  console.log(newAr);
  console.log(newAr.sort());  


}