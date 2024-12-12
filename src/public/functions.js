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
