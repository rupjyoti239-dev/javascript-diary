// normal function calling
/**
 
function fun1(){
  console.log("function is doing task 1");
}
function fun2(){
  console.log("function is doing task 2");
}

fun1();
fun2();

*/



/*  synchronous callback

function fun1(callback){
  console.log("function is doing task 1");
  callback();
}

function fun2(){
  console.log("function is doing task 2, this is a callback");
}

fun1(fun2)
fun1(()=>{
  console.log("function is doing task 3");
}) 
*/

/*
function getTwoNumberAndAdd(num1,num2, callback){
  if(typeof num1 === "number" && typeof num2 === "number"){
    callback(num1,num2);
  }else{
    console.log("ERROR!! Wrong Data Type");
  }
}

function addTwoNum(num1,num2){
  console.log(num1+num2);
}

getTwoNumberAndAdd(4,3,(num1,num2)=>{
  console.log(num1+num2);
})
*/




function getTwoNumberAndAdd(num1,num2,onsuccess,onfailure){
  if(typeof num1 === "number" && typeof num2 === "number"){
    onsuccess(num1,num2)
  }else{
    onfailure();
  }

}




getTwoNumberAndAdd(4,5,(num1,num2)=>{
  console.log(num1+num2);
},()=>{
  console.log("error");
})