const week = document.querySelector('.parent')
const dayOne = document.querySelector('.day')
let child = week.children;
// console.log(child);

// child = [].slice.call(child)
// child.forEach(element => {
//    console.log(element.innerHTML);
// });

for(let i =0;i<child.length;i++){
  console.log(child[i].textContent);
}



console.log(week.firstElementChild);
console.log(week.firstChild);
console.log(week.lastElementChild);


// console.log(dayOne.parentElement);
console.log(dayOne.parentNode);



console.log(week.childNodes);