const form=document.getElementById("form")
const input=document.getElementById("input")
const todos=document.getElementById("todos")
const small=document.getElementById("small")


form.addEventListener("submit",function(e){
    e.preventDefault()
    
    addTodo()
    updateLS()
})
function addTodo(){
    const todoText=input.value 

    if(todoText){
        let todoEl=document.createElement("li")
        todoEl.innerText=todoText
        todos.appendChild(todoEl)
        input.value=""
        todoEl.addEventListener("click",function(e){
            e.preventDefault()
            todoEl.remove()
        })
    }
    
}
function updateLS(){
    const todosEl=document.querySelectorAll('li')
    const todos=[]
    todosEl.forEach(todosEl=>{
        todos.push({
            text:todosEl.innerText,
            completed:todosEl.classList.contains('completed')
        })
    })
    localStorage.setItem("todos",JSON.stringify(todos))
}




