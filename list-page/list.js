let input = document.querySelector("input")
let divTask = document.getElementById("tarefas")
let users = JSON.parse(localStorage.getItem("@users"))

let user = localStorage.getItem("@user")

let userNow = users.find((nome) => {
    return nome.name == user
})

let tasks = []


function addTask() {
    event.preventDefault()  
    divTask.innerHTML = ""
    
    userNow.tasks.task.push(input.value)
    userNow.tasks.check.push(false)
    userNow.tasks.task.map((item, i)=>{;
    
    let taskP = document.createElement("p")
    let newDivTask = document.createElement("div")
    let risktask = document.createElement("a")

    if (userNow.tasks.check[i]) {
        taskP.className = "listCheck"
    }
    
    newDivTask.className = "taskDiv"
    risktask.textContent = "Concluir"
    taskP.textContent = item

    
    divTask.appendChild(newDivTask)
    newDivTask.appendChild(taskP)
    newDivTask.appendChild(risktask)
    input.value = ""
    risktask.addEventListener("click" , ()=>{
        markT(i)
    })
    
    
    function markT(i) {
        

        divTask.innerHTML = "" 
        
        userNow.tasks.check[i] = true


        userNow.tasks.task.map((item,i)=>{
            let taskP = document.createElement("p")
            let newDivTask = document.createElement("div")
            let risktask = document.createElement("a")

            if (userNow.tasks.check[i]) {
            taskP.className = "listCheck"
                
            }
             
            newDivTask.className = "taskDiv"

            if (userNow.tasks.check[i]) {
            risktask.textContent = "Apagar"
            risktask.addEventListener("click" , ()=>{
                deleteTask(i)
            })
            taskP.textContent = item
                
            }else{
            risktask.textContent = "Concluir"
            risktask.addEventListener("click" , ()=>{
                markT(i)
            })
            taskP.textContent = item
            }



            divTask.appendChild(newDivTask)
            newDivTask.appendChild(taskP)
            newDivTask.appendChild(risktask)


        })
}

    function deleteTask(i) {

    divTask.innerHTML = ""

        userNow.tasks.task.splice(i,1)
        userNow.tasks.check.splice(i,1)


        userNow.tasks.task.map((item, i)=>{
    
    let taskP = document.createElement("p")
    let newDivTask = document.createElement("div")
    let risktask = document.createElement("a")

    if (userNow.tasks.check[i]) {
        taskP.className = "listCheck"
    }
    
    newDivTask.className = "taskDiv"
    risktask.textContent = "Concluir"
    taskP.textContent = item

    
    divTask.appendChild(newDivTask)
    newDivTask.appendChild(taskP)
    newDivTask.appendChild(risktask)
    input.value = ""
    risktask.addEventListener("click" , ()=>{
        markT(i)
    })})
        
    }
})
console.log(userNow.tasks.check)
    
}





