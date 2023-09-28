const start = document.getElementById('start');
const stopbtn = document.getElementById('stop');

const randomColor = ()=>{
  let ar  = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let hex = [];
  while(hex.length<6){
    let num = Math.floor(Math.random()*ar.length);
    hex.push(ar[num]);
  }
  hex = `#${hex.join("")}`
  // console.log(hex);
  document.body.style.backgroundColor = hex;
}

let intervalId ;

const changeBg = function(){
  intervalId = setInterval(randomColor,1000)
}

const clr  = function(){
  clearInterval(intervalId);
  intervalId = null;
}


start.addEventListener('click', changeBg)
stopbtn.addEventListener('click', clr)







