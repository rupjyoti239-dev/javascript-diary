// getElementsByClassName returns a HTMLCollection[], we cannot use any loop (forEch,for) and map function on HTMLCollection so we have to convert it into array
let list3 = document.getElementsByClassName('list-item')


// conversion
 list3 = [].slice.call(list3);
// console.log(list3);
list3.forEach(element => {
  return `${element.style.backgroundColor = "red"}
  ${element.style.marginBottom = '10px' }`
});




