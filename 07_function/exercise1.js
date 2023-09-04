// Declare a function fullName and it print out your full name.
{
  function printMyName(){
    console.log("Rupjyoti sarma");
  }

  printMyName();
  console.log("\n");
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
{
  const fullName = (firstName,lastName)=>{
    return `${firstName} ${lastName}`
  }

  console.log(fullName("Rupjyoti", "sarma"));
  console.log("\n");
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
{
  const sum = (num1,num2)=>{
    return `sum of ${num1} and ${num2} is ${num1+num2}`;
  }

  const add = sum(2,10);
  console.log(add);
  console.log("\n");
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
{
  const areaOfRectangle = (length,width)=>{
    let area = length * width;
    return area;
  }

  console.log(`area of a rectangle is ${areaOfRectangle(2,3)}`);
  console.log("\n");
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
{
  const perimeter = (length, width) =>{
    return 2*(length+width);
  }

  console.log(`perimeter of a ractangle is ${perimeter(2,4)}`);
  console.log("\n");
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
{
  const volumeOfRectPrism = (length , width, height)=>{
    let volume = length * width * height;
    return volume;
  }

  console.log(`volume of a prism is ${volumeOfRectPrism(2,3,1)}`);
  console.log("\n");
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
{
  const areaOfCircle = (radius)=>{
    let area = Math.PI*radius*radius;
    return area;
  }

  console.log(`area of a circle is ${areaOfCircle(4)}`);
}

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
{
  const circumference = (r)=>{
    return 2*Math.PI*r;
  }

  console.log(`circumference of a circle is ${circumference(4)}`);
  console.log("\n");
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
{
  const density = (mass,volume)=>{
    return mass/volume;
  }

  console.log(`density is : ${density(10/4)}`);
  console.log("\n");
}

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
{
  const speed = (distance,time)=>{
    return distance/time;
  }

  console.log(`speed is ${speed(80,1.5)} km/h`);
  console.log("\n");
}

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
{
  const weight = (mass,gravity)=>{
    return mass*gravity;
  }

  console.log(`weight is ${weight(100,9.8)}kg`);
  console.log("\n");
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
{
  const convertCelsiusToFahrenheit = (celsius)=>{
      return celsius*9/5+32;
  }
  console.log(convertCelsiusToFahrenheit(37));
}

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

{
  const bmi = (height,weight) =>{
    let bmi =  (weight/(height*height)).toFixed(2);
    if(bmi<18.5){
      return `your bmi score is ${bmi}, remark: underweight`;
    }
    else if(bmi>=18.5 && bmi<=24.9){
      return `your bmi score is ${bmi}, remark: Normal weight`
    }
    else if(bmi>=25 && bmi<=29.9){
      return `your bmi score is ${bmi}, remark: Overweight`;
    }
    else{
      return `your bmi score is ${bmi}, remark: obese`;
    }
  }
  
 console.log(bmi(1.63,44));
 console.log("\n");
}


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
{
  const checkSeason = (month)=>{
    if(month === 'march' || month === 'april' || month === 'may' ){
        return `spring`;
    }
    else if(month === 'june' || month === 'july' || month === 'august' ){
        return `summer`;
    }
    else if(month === 'september' || month === 'november' || month === 'october' ){
          return `autumn`;
    }
    else{
          return winter
    }

  }

  console.log(checkSeason('october'));
  console.log("\n");
}

/*Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/
{
  const findMax = (num1,num2,num3)=>{
    if(num1 > num2  && num1>num3){
      return `max is ${num1}`
    }
    else if(num2>num1 && num2>num3){
      return `max is ${num2}`
    }
    else{
      `max is ${num3}`
    }
  }


  console.log(findMax(10,-50,8));

}
