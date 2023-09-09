
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
{
  const printArray = (ar)=>{
    for(let x of ar){
      console.log(x);
    }
  }

  printArray([1,15,2,4,6,8,9,2])
}




console.log("\n\n");


/*Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08*/
{
  const now = new Date();

  const date = ()=>{
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    return `${day}/${month+1}/${year} ${hour}:${minute}`
  }

  console.log(date());
}




console.log("\n\n\n");



/**Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4 */
{
  const swapValues = (num1, num2)=>{
    let temp = num1;
    num1 = num2;
    num2=temp;

    return `${num1} ${num2}`
  }
  console.log(swapValues(5,50));
}




console.log("\n\n\n");

/**Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A'] */

{
  const reverseArray = (ar)=>{
    let newAr = [];
    for(let i=ar.length-1;i>=0;i--){
        newAr.push(ar[i]);
    }
    return newAr;
  }

  console.log(reverseArray([1,2,3,4,5,6]));
}



console.log("\n\n\n");



// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
{
  const capitalizeArray = (ar)=>{
    let newAr = []
    for(let x of ar){
      
      newAr.push(x.toUpperCase());
    }
    return newAr;
  }
    
  

  console.log(capitalizeArray(['rup','jyoti','sarma']));
}



console.log("\n\n\n");




// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
{
  const addItem = (item)=>{
    const ar = [];
    ar.push(item);
    return ar;
  }

  console.log(addItem('meat'));
}




console.log("\n\n\n");

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
{

  const ar = ["meat","fish","suger","tea","honey","rice"]
  const removeItem = (index)=>{
      ar.splice(index,1);

      return ar;
  }


  console.log(removeItem(3));
}



console.log("\n\n\n");





// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
{
  const sumOfNumbers = (num)=>{
       sum = 0;
      for(i=0;i<=num;i++){
        sum +=i;
      }

      return sum;
  }


  console.log(sumOfNumbers(10));
}




console.log("\n\n\n");






// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
{
  const sumOfOdd = (num)=>{
    sum = 0;
    for(i=0;i<=num;i++){
      if(!(i%2===0)){
        sum += i;
      }
    }
    return sum;
  }


  console.log(sumOfOdd(10));
}



console.log("\n\n\n");





// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
{
  const sumOfEven = (num)=>{
    sum = 0;
    for(i=0;i<=num;i++){
      if(i%2===0){
        sum += i;
      }
    }
    return sum;
  }


  console.log(sumOfEven(10));
}



console.log("\n\n\n");


/**Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 50.*/
{
  const evensAndOdds = (num)=>{
    let even = 0;
    let odd = 0;

    for(i=1;i<=num;i++){
      if(i%2===0){
        even++;
      }else{
        odd++;
      }
    }

    return `The number of evens are ${even} and The number of odds are ${odd}.`
  }

  console.log(evensAndOdds(100));
}




console.log("\n\n\n");





/* Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10  */
{
  const sum = (...num)=>{
    let sum = 0;
    for( let x of num){
      sum +=x;
    }
    return sum;
  }

  console.log(sum(1,2,3,4,5));
}

console.log("\n\n\n");




// Writ a function which generates a randomUserIp.
{
  const generateIp = ()=>{
    let str = "";
    for(i=0;i<4;i++){
      let num = Math.floor(Math.random()*255);
      str = str + num + ":";
    }
     
    return str.slice(0,str.length-1);
  }

  console.log(generateIp());
}

console.log("\n\n\n");






/* Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'*/
{
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function randomHex(){
    let ar = [];
    while(ar.length<6){
      let num = Math.floor(Math.random()*array.length-1);
      ar.push(array[num]);
    }
    // ar.join("");
    return ar.join('')
  }

  console.log(`#${randomHex()}`);

}
console.log("\n\n\n");

/*Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE*/

{
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  function randomId(){
    let ar = [];
    while(ar.length<7){
      let num = Math.floor(Math.random()*array.length-1);
      ar.push(array[num]);
    }
    // ar.join("");
    return ar.join('')
  }

  console.log(`${randomId()}`);

}