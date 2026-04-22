let name = document.getElementById("name")
let password = document.getElementById("password")
let main = document.querySelector(".main")

let users =JSON.parse(localStorage.getItem("@users"))


function login() {
    event.preventDefault()
    let loginUser = false

    
    loginUser =  users.find((item) =>{
        if (item.name == name.value && item.password == password.value) {
            main.innerHTML = ""
            loginSuces()
        }
    })


    event.preventDefault()
}

function loginSuces() {
    let title = document.createElement("h2")
    let button = document.createElement("button")
    title.className = "titu"
    let buttonText = "ok"
    let titleText = "Logado com sucesso"
    title.textContent = titleText
    button.textContent = buttonText
    main.appendChild(title)
    main.appendChild(button)


}
