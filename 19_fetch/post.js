fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((res)=>{
      if(res.ok){
        return res.json();
      }else{
        throw new Error("error!!!!!!!!!!!!")
      }

    })
    .then((data)=>{
      console.log(data);
    })
    .catch((er)=>{
      console.log(er);
    })