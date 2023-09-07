// sum of all element
const ar = [1,2,3,4,5]
const sum = ar.reduce((acc,num)=>{
  return acc+num
},0)

console.log(sum);




// shopping cart
const shoppingCart = [
  {name: 'shirt', price: 500},
  {name: 'jeans', price: 1500},
  {name: 'tshirt', price: 300},
  {name: 'short', price: 700},
  {name: 'frock', price: 800}
]


const totalBill = shoppingCart.reduce((acc,item)=>{
  acc = acc+item.price;
  return acc;
},0)

console.log(totalBill);