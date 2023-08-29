// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
{
  let firstName = "Rupjyoti";
  let lastName = "sarma";
  let country = "India";
  let city = "Guwahati";
  let age = 23;
  let isMarried = false;
  let year = 2023;


  console.table([typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year]);
  console.log("\n");
}

// Check if type of '10' is equal to 10
{
 console.log('10' === 10 );
 console.log("\n");
}

// Check if parseInt('9.8') is equal to 10
{
  console.log(parseInt('9.8') === 10);
  console.log("\n");
}



// Write three JavaScript statement which provide truthy value.
{
  console.log(10>5);
  console.log(5>3);
  console.log(8>3);
  console.log("\n");
}
// Write three JavaScript statement which provide falsy value.
{
  console.log(10<5);
  console.log(5<3);
  console.log(8<3);
  console.log("\n");
}
/* 
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3  true
4 >= 3  true
4 < 3  false
4 <= 3  false
4 == 4  true
4 === 4  true
4 != 4   false
4 !== 4   false
4 != '4'    false
4 == '4'  true
4 === '4'   false
*/
{
  console.table([4 > 3,
                 4 >= 3,
                 4 < 3,
                 4 <= 3,
                 4 == 4,
                 4 === 4,
                 4 != 4,
                 4 !== 4,
                 4 != '4',
                 4 == '4',
                 4 === '4'
                ])
                console.log("\n");
}

// Find the length of python and jargon and make a falsy comparison statement.
{
  let py = 'python';
  let jar = 'jargon';
  console.log(py.length !== jar.length);
  console.log("\n");
}

/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12   true
4 > 3 && 10 > 12   false
4 > 3 || 10 < 12   true
4 > 3 || 10 > 12   true
!(4 > 3)   false
!(4 < 3)   true
!(false)   true
!(4 > 3 && 10 < 12)  false
!(4 > 3 && 10 > 12)  true
!(4 === '4')         true
There is no 'on' in both dragon and python  */
{
    console.table([
      4 > 3 && 10 < 12,
      4 > 3 && 10 > 12,
      4 > 3 || 10 < 12,
      4 > 3 || 10 > 12,
      !(4 > 3),
      !(4 < 3),
      !(false),
      !(4 > 3 && 10 < 12),
      !(4 > 3 && 10 > 12),
      !(4 === '4')
    ])

    console.log("\n");
}

/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
{
  const now = new Date();
  console.table([
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getDay(),
    now.getHours(),
    now.getMinutes(),
    now.getTime()
  ])
}