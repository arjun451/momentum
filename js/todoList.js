const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")

function btnTodoListDeleteHandler(event){
    const li = event.target.parentElement
    li.remove()
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "✖️"
    button.addEventListener("click",btnTodoListDeleteHandler)
    span.innerText = newTodo
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
   
}

function handleTodoSubmit(event){
        event.preventDefault()
      const todo = todoInput.value
        todoInput.value = ""
        paintTodo(todo)
}


todoForm.addEventListener("submit",handleTodoSubmit)