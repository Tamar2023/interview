
const div = document.getElementById("container");

const h1 = document.createElement('h1');

h1.innerText = "hello world from js";

div.appendChild(h1);


const res= fetch("https://www.hebcal.com/converter?cfg=json&date=2023-06-28&g2h=1&strict=1", { method: "GET" });
console.log(res);


let myPromise = new Promise(function(myResolve, myReject) {
   setTimeout(()=>{
    alert("fetch data");
    if(1){
        myResolve(alert("s"))
  }
  else{
    myReject(alert("e"))
  }
}, 5000)
  });
  alert("do somthing meenwhile")

let books

console.log(books.s)

console.log("hello")