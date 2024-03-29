 const loginForm = document.querySelector("#login-form");
 const loginInput = document.querySelector("#login-form input");
 const greeting = document.querySelector("h1")
 const HIDDEN_CLASS = "hidden"
 const USER_NAME_KEY = "userName"
function handleFormSubmit(event){
    const userName = loginInput.value
    localStorage.setItem(USER_NAME_KEY,userName)
    event.preventDefault()
    
   paintGreeting(userName)
    loginForm.classList.add(HIDDEN_CLASS)
}
function paintGreeting(userName){
    const date = new Date()
    const hours = date.getHours()
     let greet = "";
     if(hours>=18 ||hours<6){
        greet="Night"
     }else if(hours>=6 && hours<=12){
       greet = "Morning"
     }else if(hours>12 && hours<16){
        greet="After Noon"
     }else if(hours>=16 && hours<18)
     {
        greet ="Evening"
     } 
    greeting.innerText = `Hi, Good ${greet} ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS)
}

 loginForm.addEventListener('submit',handleFormSubmit)

 const userName = localStorage.getItem(USER_NAME_KEY)
 
 if(userName==null){
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS)
    
}else{
    paintGreeting(userName)
    loginForm.classList.add(HIDDEN_CLASS);
 }