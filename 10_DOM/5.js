// create new element
const div = document.createElement('div')
console.log(div);


// add class name  and id  to new div
div.className = "main"
div.id = "myId"



// add attribite
div.setAttribute("title", "this is title")


// style
div.style.backgroundColor = "yellow"
div.style.color = "blue"
div.style.padding = "10px"




// add text node 
const text = document.createTextNode("hello rupjyoti")

div.appendChild(text)



// to make this new text visble on the page
document.body.appendChild(div)


















/****************** new element   **************************/
const list = document.querySelector('ul')
// console.log(list);

const newItem = document.createElement('li');
const tx = document.createTextNode("five")
newItem.appendChild(tx);
list.appendChild(newItem);


