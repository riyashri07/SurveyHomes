
function appendLoginData(){
    let loginBox=document.querySelector('#box');
    loginBox.innerHTML= `
    <h2>Admin Login</h2>
    <form id="form">
        <label for="email">Email Address/Username</label>
        <input required type="text" placeholder="Enter email address or username" id="username">
        <label for="password">Password</label>
        <input required type="password" placeholder="Enter password" id="password">
        <input type="submit" value="Sign In" id="submit">
        <label for="password"><a href="#"> Forgot Password?</a></label>
    </form>
    `
}
appendLoginData()

let url='https://636a23c5b10125b78fd19a2e.mockapi.io/admin'

let data=[]

window.addEventListener('load', async ()=>{
    let fetched= await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(fetched.ok){
        let res=await fetched.json()
        data=[...res]
        console.log(res)
    }

})

let loginForm=document.querySelector('#form');

loginForm.addEventListener('submit', checkCredentials)

function checkCredentials(event){
    event.preventDefault()

    let username=document.querySelector('#username').value
    let password=document.querySelector('#password').value
    // let obj={
    //     username,
    //     password
    // }
    // sessionStorage.setItem('username', username)
    // sessionStorage.setItem('password', password)

    let ans='Invalid Credentials! You are not authorized to login'
    for(let i=0;i<data.length;i++){
        if((data[i].username==username || data[i].email==username)&& data[i].password==password){
            ans= 'login successfull'
        }
    }
    if(ans=='login successfull'){
        alert(ans)
        window.location.href='admin_dashboard.js'
    }
    else{
        alert(ans)
    }
}

