const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');




// callback hell
// setTimeout(()=>{
//   heading1.textContent = "hello rupjyoti";
//   setTimeout(()=>{
//     heading2.textContent = "Two";
//     setTimeout(()=>{
//       heading3.textContent = "Three";
//       setTimeout(()=>{
//        heading4.textContent = "four";
//        setTimeout(()=>{
//         heading5.textContent = "five";
//         setTimeout(()=>{
//           heading6.textContent = "six"
//           setTimeout(()=>{
//             heading7.textContent = "seven"
//           },1000)
//         },3000)
//        },2000)
//       },1000)
//     },2000)
//   },2000)
// },1000)


// function changeText(element,text,color,time){
//    setTimeout(function(){
//       element.textContent = text;
//       element.style.color = color;
//    },time )
// }

// changeText(heading1,"one","red",2000)
// changeText(heading4,"one","green",2000)



function changeText(element,text,color,time,onsuccess,onfailure){
 setTimeout(function(){
  if(element){
     element.textContent = text;
     element.style.color= color
     if(onsuccess){
      onsuccess()
     }
  }else{
    if(onfailure){
      onfailure()
    }
  }
 },time)
}




changeText(heading1,"one","red",4000,()=>{
  changeText(heading2,"two","yellow",2000,()=>{
    changeText(heading3,"three","violet",4000,()=>{
      changeText(heading4,"four","green",1000,()=>{
        changeText(heading5,"five","blue",5000,()=>{
          changeText(heading6,"six","orange",4000,()=>{
            changeText(heading7,"seven","purple",6000,()=>{
              console.log("task complete");
            },()=>{console.log("error 7");})
          },()=>{console.log("error 6");})
        },()=>{console.log("error 5");})
      },()=>{console.log("error 4");})
    },()=>{console.log("Error 3");})
  },()=>{console.log("Error 2");})
},()=>{console.log("ERROR 1");})