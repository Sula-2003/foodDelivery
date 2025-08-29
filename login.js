let backward=document.querySelector("#backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
forward.addEventListener("click",()=>{
    history.forward();
})