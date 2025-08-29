let data=JSON.parse(sessionStorage.getItem("foodItem"))
console.log(data);
let cartItemsDiv = document.getElementById("cartItems");
if (data.length === 0) {
    cartItemsDiv.textContent = "Cart is empty!";
} else {
    data.forEach(item => {
        let div = document.createElement("div");
        div.textContent = item;
        
        let btn =document.createElement("button");
        btn.textContent="Remove";

        btn.addEventListener("click",()=>{
            div.remove();
        })
        div.appendChild(btn);
        cartItemsDiv.appendChild(div);
    })
}
let backward=document.querySelector("#backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
backward.addEventListener("click",()=>{
    history.forward();
})