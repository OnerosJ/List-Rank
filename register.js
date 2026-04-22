let name = document.getElementById("name")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password")


let getUsers = JSON.parse(localStorage.getItem("@users"))

let users = []

if (!(getUsers == undefined)) {
    getUsers.map((contas) => users.push(contas))
}


function register() {
    event.preventDefault()

    let userNameCheck = ""

    let userRegister = {
    name:"",
    password:"",
    tasks:{
        task: [],
        check: []
    },
    taskCount:0
    }

    if (name.value == "" || password.value == "" || confirmPassword.value == ""){
        alert("Os campos tem que ser preencidos")
        return
    }

    if (!(password.value == confirmPassword.value) ) {
        alert("nao")
        return
    }

    userNameCheck = users.find((valor)=> {
        
        if(valor.name == name.value){
            return userNameCheck = true
        }else{
            return userNameCheck = false
        }

    })

    if (userNameCheck) {
        alert("usuario")
        return
    }

    userRegister.name = name.value
    userRegister.password = password.value
    users.push(userRegister)

    name.value = ''
    password.value = ""
    confirmPassword.value = ""


    console.log(users);
    
    localStorage.setItem("@users", JSON.stringify(users))
}



