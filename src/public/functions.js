window.addEventListener('DOMContentLoaded', checkUser, false)

document.getElementById('loginForm').addEventListener('submit', async function(event){ 
    event.preventDefault()

    let userInput = {
        username: document.querySelector("input[name='username']").value,
        password: document.querySelector("input[name='password']").value
    }
    
    try {
        const response = await fetch('/login', {
            method: "POST",
            body: JSON.stringify(userInput),
            headers: {
              "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const user = await response.json()

        sessionStorage.setItem('username', user.username)
        window.location.replace('/list')

    } catch (error) {
        console.error(error.message)
    }
})

function checkUser(){
    if("username" in sessionStorage) { //user is logged in
        document.getElementById('accountNav').innerHTML = '<a href="#" class="active" onclick="logOut()">Logga ut</a>'
    } else { //user is not logged in
        document.getElementById('accountNav').innerHTML = '<a href="/login" class="active">Logga in</a><a href="/register">Registrera</a>'
    }
}

function logOut(){
    sessionStorage.removeItem('username')
    window.location.replace('/login')
}

function fillUser(){
    let username = sessionStorage.getItem('username')
    document.getElementById('loggedInUser').value = username
}

async function getAnimals(){
    let username = sessionStorage.getItem('username')
    try {
        const response = await fetch('/list/'+username)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const animals = await response.json()

        let str = ``
        animals.forEach(animal => {

            const pros = animal.pros.split(',')
            const cons = animal.cons.split(',')

            str += `<div class="card">`
            str += `<h3>${animal.breed}</h3>`
            str += `<div class="flexrow">`
            str += `<h6>Typ: ${animal.type}</h6>`
            str += `<div>`
            str += `<button class="btn btn-sm">Redigera</button>`
            str += `<button class="btn btn-sm">Ta bort</button>`
            str += `</div>`
            str += `</div>`
            str += `<div class="points">`
            str += `<div class="pros">`
            str += `<ul>`
            pros.forEach(point =>{
                str += `<li>${point}</li>`
            })
            str += `</ul>`
            str += `</div>`
            str += `<div class="cons">`
            str += `<ul>`
            cons.forEach(point =>{
                str += `<li>${point}</li>`
            })
            str += `</ul>`
            str += `</div>`
            str += `</div>`
            str += `</div>`
        });
        document.getElementById('listContent'). innerHTML = str;
    } catch (error) {
        console.error(error.message)
    }
}
