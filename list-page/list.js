let input = document.querySelector("input")
let divTask = document.getElementById("tarefas")
let users = JSON.parse(localStorage.getItem("@users"))
let user = localStorage.getItem("@user")

let userNow = users.find((nome) => {
    return nome.name == user
})


function renderTask() {
    userNow.tasks.task.map((item,i)=>{
    let taskP = document.createElement("p")
    let newDivTask = document.createElement("div")
    newDivTask.className = "div-style"
    let risktask = document.createElement("a")

    if (userNow.tasks.check[i]) {
        taskP.className = "listCheck"
    }
    
    if (userNow.tasks.check[i]) {
    risktask.textContent = "Apagar"
    risktask.className = "apagar"
    risktask.addEventListener("click" , ()=>{
    deleteTask(i)
    })
    taskP.textContent = item       
    }else{
    risktask.textContent = "Concluir"
    risktask.className = "concluir"
    risktask.addEventListener("click" , ()=>{
    markT(i)
    })
    taskP.textContent = item
    }
    divTask.appendChild(newDivTask)
    newDivTask.appendChild(taskP)
    newDivTask.appendChild(risktask)
    input.value = ""
    })
    console.log(userNow.tasks.check);
}


function addTask() {
    event.preventDefault()  
    divTask.innerHTML = ""
    userNow.tasks.task.push(input.value)
    userNow.tasks.check.push(false)
    localStorage.setItem("@users", JSON.stringify(users))
    renderTask()
}
    
    function markT(i) {
        divTask.innerHTML = ""  
        userNow.tasks.check[i] = true
        localStorage.setItem("@users", JSON.stringify(users))
        renderTask()
}

function deleteTask(i) {

    divTask.innerHTML = ""

    userNow.tasks.task.splice(i,1)
    userNow.tasks.check.splice(i,1)
    localStorage.setItem("@users", JSON.stringify(users))
    renderTask()
}
renderTask()