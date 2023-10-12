// error handling with xhr

const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();

xhr.open("GET", URL)

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const result = xhr.response;
    const data = JSON.parse(result);
    console.log(data);
  }
  else{
    console.log("Something went wrong!!");
  }
}

xhr.onerror = ()=>{
  console.log("internet connection lost");
}

xhr.send()