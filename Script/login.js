let form=document.querySelector("form");

let signupData = JSON.parse(localStorage.getItem("masai")) || [];
form.addEventListener("submit", myFun ) 
function myFun(event) {
    event.preventDefault()

    let x = document.querySelector("#email").value      
    let y=document.querySelector("#password").value
      let flag=false
    function login(data) {
        for (let i = 0; i <= data.length - 1; i++){
            if (data[i].email === x && data[i].pass === y) {
           flag=true
                break;
            } 
}
          if (x == "" ||  y == "") {
           alert("please fill the details")
          }else{
            if (flag == true) {
                alert("Welcome To Survey Homes")
                window.location.href="index.html"
               
            }else{
                alert("wrong credentials")
            }
          }

      
         
          
        
    }
    login(signupData)
}
