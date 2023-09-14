
const para = document.querySelector('.hello :first-child');
console.log(para.textContent);  //it returns all text including hidden text also
console.log(para.innerHTML);    //it returns all text and html tags
console.log(para.innerText);    //it return only visible text

/**  
 1.js:4 Lorem ipsum dolor sit amet consectetur adipisicing elit. HELLO  Sunt voluptatem labore rem aspernatur beatae ut aut similique dolore iusto illo.
 heloo rup
 
 1.js:5 Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style="display: none;">HELLO</span>  Sunt voluptatem labore rem aspernatur beatae ut aut similique dolore iusto illo.
      <p>heloo rup</p>
      
      1.js:6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem labore rem aspernatur beatae ut aut similique dolore iusto illo.
      
      heloo rup */
      
      
      
      
      
/************************************************** QUERYSELECTOR *********************************************************** */

const list_item3 = document.querySelector('.hello ul li:nth-child(2)');
list_item3.style.backgroundColor = "red";

const mini = document.querySelector('.hello p.mini');
mini.style.backgroundColor = "blue"
mini.style.color = "white"









