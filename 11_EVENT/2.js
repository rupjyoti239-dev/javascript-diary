const list = document.querySelector('#list')

list.addEventListener('click', (e)=>{
  // console.log(e.target.parentNode);
  // const removeIt = e.target.parentNode;
  // removeIt.remove()


  console.log(e.target.tagName);
  console.log(e.target.id);
  if(e.target.tagName === 'IMG')
  {
    const removeIt = e.target.parentNode;
    removeIt.remove()
  }
})