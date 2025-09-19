let backward=document.querySelector("#backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
forward.addEventListener("click",()=>{
    history.forward();
})
let email=document.querySelector("#email");
let password=document.querySelector("password");
let data=JSON.parse(sessionStorage.getItem("email"));
let data2=JSON.parse(sessionStorage.getItem("password"));
console.log(data);
console.log(data2);
let login=document.querySelector("#login");
login.addEventListener("click",(e)=>{
    e.preventDefault();
    if(email.value.trim()==data & password.value==data2){
        location.href="./index.html";
    }
})
