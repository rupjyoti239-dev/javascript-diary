const ar = [1,2,3,4,5,4];

const result = ar.find((num)=>{
  if(num===4){
     return num
  } 
});

console.log(result);


const users = [
  {name: "user1", userId: 1},
  {name: "user2", userId: 2},
  {name: "user3", userId: 3},
  {name: "user4", userId: 4}
]

const id  = users.find((user)=>{
  return user.userId===4;
})

console.log(id);