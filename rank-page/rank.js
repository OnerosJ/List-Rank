let rankDiv = document.getElementById("rank-div")

let users = JSON.parse(localStorage.getItem("@users"))

console.log(users);

function renderRank() {

    let quantiaUser = []
    let usersWeeb = []

    users.map((item) =>{
        
        let rankUser = item.name
        let quantia = item.tasks.task
        
        quantiaUser.push(quantia.length)
        usersWeeb.push(rankUser)

    })

    let qtemp = 0

    let qordem = []
    let nordem = []




        while(quantiaUser.length > 0 ){
            let maior = quantiaUser[0]
            let indexMaior = 0
            for (let i = 0; i < quantiaUser.length; i++) {
                if (quantiaUser[i] > maior) {
                    maior = quantiaUser[i]
                    indexMaior = i
                }
                
            }
            qordem.push(maior)
            nordem.push(usersWeeb[indexMaior])

            quantiaUser.splice(indexMaior,1)
            usersWeeb.splice(indexMaior,1)
        }


    qordem.map((item,i)=>{
        let p = document.createElement("p")
        let pText = (i+1)+ " Lugar: " + nordem[i] + " com " + item + " tarefas"
        p.textContent = pText
        rankDiv.append(p)
    })
    





}

renderRank()


