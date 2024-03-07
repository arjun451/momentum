 const loginForm = document.querySelector("#login-form");
 const loginInput = document.querySelector("#login-form input");
 const greeting = document.querySelector("h1")
 const HIDDEN_CLASS = "hidden"
 const USER_NAME_KEY = "userName"
function handleFormSubmit(event){
    const userName = loginInput.value
    localStorage.setItem(USER_NAME_KEY,userName)
    event.preventDefault()
    console.log(loginInput.value)
   paintGreeting(userName)
    loginForm.classList.add(HIDDEN_CLASS)
}
function paintGreeting(userName){
    greeting.innerText = `Hi ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS)
}

 loginForm.addEventListener('submit',handleFormSubmit)

 const userName = localStorage.getItem(USER_NAME_KEY)
console.log(userName)
 if(userName==null){
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS)
    
}else{
    paintGreeting(userName)
    loginForm.classList.add(HIDDEN_CLASS);
 }