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
