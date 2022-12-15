// let signup = document.querySelector(".next");

// let Bag = JSON.parse(localStorage.getItem("next")) || [];
// signup.addEventListener("click", function (event) {
//   event.preventDefault();
//   let obj = {
//     email: email.value,
//     pass: password.value,
//   };
//   Bag.push(obj);
//   localStorage.setItem("next", JSON.stringify(Bag));
// });

// let inputemail=document.getElementById("email").value;
// let inputpass=document.getElementById("password").value;

// if(inputemail=="" && inputpass==""){
//     window.location="login.html"
// }
// else{
//     alert("det")

// }



// let form = document.querySelector("form"); 
// let email = document.querySelector("#email"); 
// let pass = document.querySelector("#password"); 
 
// let Bag = JSON.parse(localStorage.getItem("masai")) || [] 
 
// form.addEventListener("submit", function (event) { 
//     event.preventDefault(); 
//     let obj = { 
       
//         email: form.email.value, 
//         pass: form.password.value 
//     } 
 
//     if (email.value == "" || pass.value == "") { 
//         alert("Please fill the details"); 
//         return; 
//     } else { 
//         alert("Your Account has been Successfully Created") 
//         window.location.href = "login.html" 
//         Bag.push(obj) 
//         localStorage.setItem("masai", JSON.stringify(Bag)) 
//     } 
// })


let form=document.querySelector("form");
 let Bag=JSON.parse(localStorage.getItem("masai"))||[]
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
let obj = {
        email: form.email.value,
       
        pass: form.password.value
    }
    Bag.push(obj)
    if (obj.email == "" ||  obj.password == "") {
        alert("please fill the details")
    } else {
        
        localStorage.setItem("masai", JSON.stringify(Bag))
        alert("Registerd successfuly")
        window.location.href = "login.html";
}
})
