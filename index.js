// script for #banner2 on index page.

let employees = document.querySelector("#btn-employees");
let customer = document.querySelector("#btn-customer");
let market = document.querySelector("#btn-market");
let other = document.querySelector("#btn-other");

employees.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/2-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-5.png" alt="">
            </div>
        `
})

customer.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/3-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-5.png" alt="">
            </div>
        `
})

market.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/4-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-5.png" alt="">
            </div>`
})

other.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/5-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-5.png" alt="">
            </div>`
})