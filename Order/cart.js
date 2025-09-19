let data=JSON.parse(sessionStorage.getItem("foodItem"))
console.log(data);
let cartItemsDiv = document.getElementById("cartItems");
let itemsadded=document.getElementById("items-added");
let btn=document.getElementById("btn");

if (data.length === 0) {
    cartItemsDiv.textContent = "Cart is empty!";
} else {
    data.forEach(item => {
        let div = document.createElement("div");
        div.textContent = item;
        div.classList.add("foodcart");
        // div.style.color = "red";
        // div.style.padding="8px 12px";
        // div.style.margin="5px";
        // div.style.background="#f9f9f9";
        // div.style.border="1px solid #ddd";
        // div.style.borderRadius="6px";
        // div.style.fontSize="16px";
        // div.style.cursor="pointer";
        //div.style.transition="background 0.3s";
        
        /*padding: 8px 12px;
            margin: 5px;
            background: #f9f9f9; 
            border: 1px solid #ddd;
            border-radius: 6px;       
            font-size: 16px;          
            cursor: pointer;        
            transition: background 0.3s;
        */
        let btn =document.createElement("button");
        btn.textContent="Remove";
        btn.style.backgroundColor="green";
        btn.style.width="100px";
        btn.style.height="30px";
        btn.style.marginLeft="10px";
        btn.style.borderRadius="30px";
        btn.style.cursor="pointer";
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