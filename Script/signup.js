


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
