// querySelectorAll returns a nodeList. to access the elemnts of nodeList we can use forEach loop but nodeList doesnot support  map filter reduce , so we can convert it into array

const list2 = document.querySelectorAll('.hello .list-2 li');
list2.forEach((el)=>{
  return `${el.style.color = "blue"}
  ${el.style.backgroundColor = "yellow"}
  ${el.style.listStyle = "none"}` 
})
