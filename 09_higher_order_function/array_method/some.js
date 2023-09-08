// check if any values are even

const num = [3,5,7,9,10];
const isEven = num.some((num)=>{
  return num%2===0;
})

console.log(isEven);