const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



// Use forEach to console.log each country in the countries array.
{
  const printCountry = countries.forEach((el)=>{
    console.log(el);
  })

  printCountry;
}




// Use forEach to console.log each name in the names array.
{
   names.forEach(el=>{
    console.log(el);
  })

 
}




// Use forEach to console.log each number in the numbers array.
{
  numbers.forEach(num=>{
    console.log(num);
  })
}



// Use map to create a new array by changing each country to uppercase in the countries array.
{
  const newAr = countries.map(el=>{
    return el.toUpperCase();
  })

  console.log(newAr);
}





// Use map to create an array of countries length from countries array.
{
  const countryLen = countries.map(el=>{
    return el.length;
  })

  console.log(countryLen);
}



// Use map to create a new array by changing each number to square in the numbers array
{
  const square = numbers.map(el=>{
    return el*el;
  })
  console.log(square);
}



// Use map to change to each name to uppercase in the names array
{
  const prinName = names.map(el=>{
    return el.toUpperCase();
  })

  console.log(prinName);
}






// Use map to map the products array to its corresponding prices.
{
  const price = products.map(el=>{
    return `${el.price} ${el.product}`;
  })

  console.log(price);
}



// Use filter to filter out countries containing land.
{
  const land = countries.filter(el=>{
    return el.includes('land');
  })

  console.log(land);
}



// Use filter to filter out countries having six character.
// {
//   const country6 = countries.filter(el=>{
//     return el.length===6
//   })

//   console.log(country6);
// }



// Use filter to filter out countries containing six letters and more in the country array.
{
 const country6OrMore = countries.filter(el=>{
  return el.length>=6;
 })
 console.log(country6OrMore);
}




// Use filter to filter out country start with 'E';
{
  const startWithE = countries.filter(el=>{
    return el.startsWith('E')
  })
  console.log(startWithE);
}



// Use filter to filter out only prices with values.
{
  const onlyPrice = products.filter(el=>{
    return el.price !== "" ;
  })
  console.log(onlyPrice);
}


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
{
  const getStringLists = (ar)=>{
      return ar.filter((el)=>{
        return typeof el === 'string'
      })
  }

  console.log(getStringLists([1,2,3,'four',5,'six']));
}


// Use reduce to sum all the numbers in the numbers array.
{
  const sum = (ar)=>{
    return ar.reduce((acc,el)=>{
      return acc += el;
    },0)
  }

  console.log(sum([1,2,3]));
}




// Use some to check if some names' length greater than seven in names array
{
 const len = names.some((el)=>{
    return el.length>7
  })
console.log(len);
}



// Use every to check if all the countries contain the word land
{
  const land  = (ar)=>{
    return ar.every(el=>{
      return el.includes("land");
    })
  }
 console.log(land(countries));
}




// Use find to find the first country containing only six letters in the countries array
{
  const findCountry = (ar)=>{
    return ar.find(el => el.length===6)
  }

  console.log(findCountry(countries));
}




// Use findIndex to find the position of the first country containing only six letters in the countries array
{
  const findCn = (ar)=>{
    return ar.findIndex(el=> el.length===6)
  }

  console.log(findCn(countries));
}




// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
{
  // const findInd = countries.findIndex(el => el ==='Norway');
  // console.log(findInd);


  const findInd = (ar,country)=>{
    return ar.findIndex(el => el === 'Norway');
  }

  console.log(findInd(countries,'Norway'));
}




// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
{
  const findCn = (ar,cn)=>{
    return ar.findIndex(el=> el==='Russia');
  }
  console.log(findCn(countries,'Russia'));
}




