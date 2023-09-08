// filter out only which are 18+

const age = [12,15,45,62,32,14,15,21,34]
const result = age.filter((user)=>{
  return user>18
})

console.log(result);





// filter out those who have scored more than 60

const student = [
  {name: "rupjyoti", marks:71},
  {name: "jyoti", marks:75},
  {name: "abhi", marks:41},
  {name: "nil", marks:49},
  {name: "deep", marks:65},
  {name: "sham", marks:81},
]

const passed = student.filter((std)=>{
     return std.marks>50
})

console.log(passed);