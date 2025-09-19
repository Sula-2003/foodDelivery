let fname=document.querySelector("#fname");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let cPassword=document.querySelector("#cPassword");
let fnameError=document.querySelector("#fnameError");
let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError");
let cPasswordError=document.querySelector("#cPasswordError");

let btn=document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let isValid=true;
    if(fname.value.trim().length===""){
        fnameError.innerText="Please enter your first name";
        isValid=false;
        
    }
    if(fname.value.trim().length<=2){
        
        fnameError.innerText="Please enter your first name";
        isValid=false;
    }
    if(email.value.trim().length==""){
        emailError.innerText="Please enter your email";
        isValid=false;
    }
    else{
        let user=JSON.parse(sessionStorage.getItem("email.value")) || [];
        user.push(email.value);
        sessionStorage.setItem("email",JSON.stringify(user));
    }
    if(password.value.length<8 || password.value.length==""){
        passwordError.innerText="password must consists of 8 characters";
        isValid=false;
    }
    else{
        let hasLower=false;
        let hasUpper=false;
        let hasNumber=false;
        let hasSpecial=false;
        let password1=password.value;
        for(let i=0;i<password1.length;i++){
            let char=password1[i];
        
            if(char >= 'A' && char <= 'Z'){
                hasLower=true;
            }
            if(char >= 'a' && char <= 'z'){
                hasUpper=true;
            }
            if(char >= '0' && char <= '9'){
                hasNumber=true;
            }
            else{
                hasSpecial=true;
            }
        }
    
        if(!hasLower || !hasUpper || !hasNumber || !hasSpecial){
            passwordError.innerText="Please enter a valid password";
            isValid=false;
        }
        else{
            let user2=JSON.parse(sessionStorage.getItem("password.value"))||[];
            user2.push(password.value);
            sessionStorage.setItem("password",JSON.stringify(user2));
        }
    }
    
    if(cPassword.value!=password.value){
        cPasswordError.innerText="Password is not matching";
        isValid=false;
    }
    if(isValid){
        alert("Form validation is successful");
        document.querySelector("#signup").reset();
    }
    
})
let login=document.querySelector("#login");
login.addEventListener("click",()=>{
    location.href="./login.html";
})
let backward=document.querySelector("#backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
forward.addEventListener("click",()=>{
    history.forward();
})
let home=document.querySelector("#home");
home.addEventListener("click",()=>{
    location.href="./index.html";
})


