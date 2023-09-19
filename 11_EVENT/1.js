// clicked event
// document.getElementById('bike').addEventListener('click', (event)=>{
//   console.log(event);
// },false)




// event propagation or bubbling  (inner element to outer)
// document.getElementById('list').addEventListener('click', (event)=>{
//   console.log('clicked inside list');
// },false)


// document.getElementById('bike').addEventListener('click', (event)=>{
//   console.log("bike clicked");
// },false)






// event capturing(outer to inner)
// document.getElementById('list').addEventListener('click', (event)=>{
//   console.log('clicked inside list');
// },true)


// document.getElementById('bike').addEventListener('click', (event)=>{
//   console.log("bike clicked");
// },true)





// stop propagation
document.getElementById('list').addEventListener('click', (event)=>{
  console.log('clicked inside list');
},false)


document.getElementById('bike').addEventListener('click', (event)=>{
  console.log("bike clicked");
  event.stopPropagation()
},false)






// preventDefault  
document.getElementById('google').addEventListener('click', (event)=>{
  console.log('google click');
  event.preventDefault()

})


