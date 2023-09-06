// SPREAD IS USED TO CLONE,MARGE AND ADD NEW KEY VALUE PAIR TO AN OBJECT

const obj1 = {
  obj1_name: "rup",
  obj1_age: 23
}

const obj2 = {
  obj2_name: 'jyoti',
  obj2_age: 21
}

const obj3 = {
  obj3_name: "viki",
  obj3_age: 23
}

//📌 IF TWO OBJECT HAS SAME KEY NAME THEN THE SECOND OBJECT WILL OVERRIDE THE FIRST OBJECT, SO SHOLUD GIVE  DIFFERENT NAME TO EVERY OBJECT KEY  📌

//👉 marge all 3 object  
const mainObj = {...obj1, ...obj2, ...obj3};
console.log(mainObj);



console.log("\n");










// 👉 marge all 3 object  and add two new key-vale
const obj4 = {...obj1, ...obj2, ...obj3, obj4_name: "farid", obj4_age: 23}
console.log(obj4);


console.log("\n");


// 👉 clone an object
const cloneObj = {...obj4};
console.log(cloneObj);

