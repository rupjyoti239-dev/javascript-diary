// add new element using function

const addItem = (language)=>{
  const ul = document.querySelector('.lan')
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(language))
  ul.appendChild(li)
}

// addItem('python')

// const language = prompt("enter your language")
// addItem(language)

const btn = document.querySelector('input')
btn.addEventListener('click', ()=>{
  let ln = prompt("enter a language");
 addItem(ln)
})





/************************** edit elemnt  **************************************/
// const language = document.querySelector('li:nth-child(1)')
// console.log(language);

// language.innerText = "process 1 to edit"
// language.innerHTML = "process 2 to edit"
// const newLi = document.createElement('li')
// newLi.textContent = "process 3 to edit"
// language.appendChild(newLi)




// const editItem = (text)=>{
//   const language = document.querySelector('li:nth-child(1)');
//   const newLi = document.createElement('li')
// newLi.textContent = text
// language.appendChild(newLi)
// }


// editItem("rup")




/************************** remove elemnt  **************************************/
const lastEl = document.querySelector('li:last-child')
console.log(lastEl);
lastEl.remove()