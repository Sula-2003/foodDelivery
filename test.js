let input=document.getElementById("searchbar");
let food=document.getElementsByClassName("food");
function search_food(){
    let val=input.value.toLowerCase();
    
    for(let i=0;i<food.length;i++){
        if (val === "") {
            food[i].style.display = "none";
        }
        else if(!food[i].innerHTML.toLowerCase().includes(val)){
            food[i].style.display="none";
        }
        else{
            food[i].style.display="list-item";
        }
    }
}
window.onload = function() {
    
    for (let i = 0; i < food.length; i++) {
        food[i].style.display = "none";
    }
    input.addEventListener("keyup",search_food);
}