const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => {
    // console.log(response);
    if(response.ok){
      return response.json();
    }else{
      throw new Error("Something went wrong")
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((er)=>{
    console.log(er);
  })
  