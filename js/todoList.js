const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")
const todoContainer = document.querySelector(".todo-container")
let todoArray = []
const TODO_KEy = "todo"

function saveTodo(){
    localStorage.setItem(TODO_KEy,JSON.stringify(todoArray))
}
function btnTodoListDeleteHandler(event){
    const li = event.target.parentElement
    const todoValue = li.querySelector("span").id
    const index = todoArray.findIndex(ele=>ele.id==todoValue)
    todoArray.splice(index,1)
    saveTodo()
    li.remove()
    if(todoArray.length==0){
        todoContainer.classList.add(HIDDEN_CLASS)
    }
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    const input =document.createElement('input')
    input.type = "checkbox"
    input.id = "checkbox"
    button.innerText = "delete"
    button.addEventListener("click",btnTodoListDeleteHandler)
    span.innerText = newTodo.text
    span.id = newTodo.id
    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    todoList.appendChild(li)
    todoContainer.classList.remove(HIDDEN_CLASS)
   
}

function handleTodoSubmit(event){
        event.preventDefault()
      const value = todoInput.value
        todoInput.value = ""
        const newToto = {
            text:value,
            id: Date.now()
        }
        paintTodo(newToto)
        todoArray.push(newToto)
        saveTodo()
}

todoForm.addEventListener("submit",handleTodoSubmit)
const savedTodoItems = localStorage.getItem(TODO_KEy)
if(savedTodoItems){

    const todoItems = JSON.parse(savedTodoItems);
    todoArray = todoItems
    todoItems.forEach(paintTodo)
    if(todoArray.length==0){
        todoContainer.classList.add(HIDDEN_CLASS)
    }
}
