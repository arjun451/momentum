const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")


function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    li.appendChild(span)
    todoList.appendChild(li)
   
}

function handleTodoSubmit(event){
        event.preventDefault()
      const todo = todoInput.value
        todoInput.value = ""
        paintTodo(todo)
}


todoForm.addEventListener("submit",handleTodoSubmit)