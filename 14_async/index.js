setTimeout(() => {
  console.log("rupjyoti");
}, 2000);


const heading  = document.querySelector('h1');
const btn  = document.querySelector('#btn');

const chnageHeading  = ()=>{
  heading.textContent = "Learn async";
}


const chamgeText =  setTimeout(chnageHeading,5000)


btn.addEventListener('click', ()=>{
  clearTimeout(chamgeText);
  console.log("stopppppp");
})


