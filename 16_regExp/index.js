let reg = /rup/g;
input = "hello rup. iondsn ionacs iohnoiasc ioii "

// reg.test()  this function check that the regExp is present or not if present then return true else return false

if(reg.test(input)){
  console.log("input carry that expression");
}
else{
  console.log("input doesnot carry");
}