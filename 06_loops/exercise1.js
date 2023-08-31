// Iterate 0 to 10 using for loop, do the same using while and do while loop
{
  console.log("Using for loop");
  for(let i =0;i<11;i++){
    console.log(i);
  }
  console.log("\n");


  console.log("Using do-while loop");
  let i =10;
  do{
    console.log(i);
    i++;
  }while(i<21)


console.log("\n");
  console.log("Using while loop");
  let n = 20;
  while(n<=30){
    console.log(n);
    n++
  }
  console.log("\n");
}

// Iterate 10 to 0 using for loop, do the same using while and do while loop
{
  for(let i=10;i>=0;i--){
    console.log(i);
  }

  console.log("\n");

}

// Iterate 0 to n using for loop
{
  let n = 20;
  for(let i =0;i<=20;i++){
    console.log(i);
  }

  console.log("\n");
}

/*Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######  */

{
  let string = ""
  for(let i=1;i<=5;i++){
    for(let j = 0;j<i;j++){
      string += '*';
    }
    string += "\n";
  }
  console.log(string);
  console.log("\n");
}

/*Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/
{

  for(let i=1;i<=10;i++){
    console.log(` ${i} x ${i} = ${i*i} `);
  }

  console.log("\n");
}



/*Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

 {
  console.log(` i    i**2   i**3`);
  for(let i=0;i<=10;i++){
    console.log(`${i}    ${i**2}    ${i**3}`);
  }
  console.log("\n");
 }



// Use for loop to iterate from 0 to 100 and print only even numbers
{
  for(let i=1;i<=100;i++){
    if(i%2===0){
      console.log(i);
    }
  }
  console.log("\n");
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
{
  for(let i=1;i<=100;i++){
    if(!(i%2===0)){
      console.log(i);
    }
  }
  console.log("\n");
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
{
 
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.[The sum of all numbers from 0 to 100 is 5050.]
{
  let sum =0;
  for(let i=0;i<=100;i++){
      sum += i;
  }
  console.log(sum);
  console.log("\n");
}

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.[The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.]
{
  let evenSum = 0;
  let oddSum = 0;
  for(let i=0; i<=100; i++){
    if(i%2===0){
      evenSum += i;
    }else{
      oddSum += i;
    }
  }
  console.log(`sum of all odd number is ${oddSum} and sum of all even number is ${evenSum}`);
  console.log("\n");
}

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  // [2550, 2500]

{
  let evenSum = 0;
  const array = [];
  let oddSum = 0;
  for(let i=0; i<=100; i++){
    if(i%2===0){
      evenSum += i;
    }else{
      oddSum += i;
    }
  }
  array.push(oddSum);
  array.push(evenSum);
  console.log(array);
  console.log('\n');
}

// Develop a small script which generate array of 5 random numbers
{
  const id =[]
  for(let i = 0;i<5;i++){
    let num = Math.floor(Math.random()*10);
    id.push(num);
  }
  
  console.log(id);
  console.log("\n");
}

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
{
  const id = [];
 
  while(id.length<5){
    let num = Math.floor(Math.random()*10);
    if(!(id.includes(num))){
      id.push(num)
    }
  }

  console.log(id);
  console.log("\n");
  
}

// Develop a small script which generate a six characters random id:

// 5j2khz
{
  const ar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",0,1,2,3,4,5,6,7,8,9];
  
  const id = []
  while(id.length<5){
    let num = Math.floor(Math.random()*ar.length);
    id.push(ar[num]);
  }

  console.log(id.join(""));
  console.log("\n");
}