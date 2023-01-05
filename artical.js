import Artical from "./Components/Artical.js";
import Navbar from "./Components/ResourceNavbar.js"
import Resourcesfooter from "./Components/Resourcesfooter.js"

let articalnavbar=document.getElementById("artical_navbar");
articalnavbar.innerHTML=Navbar();

// console.log(navbar());
document.getElementById("logo").onclick=()=>{
    window.location.href="resources.html" 
}
// 

let artical=document.getElementById("Artical");
artical.innerHTML=Artical();

let articalfooter= document.getElementById("artical_footer");
articalfooter.innerHTML=Resourcesfooter();



const dataArr=[
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//Industry-Tracking-Demo-RC.png", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//basic-half-card-1.png", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//B2B-Guide-as-v1-1536x575.png", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//Elephant-Banner-1.jpg", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//13-vanguard.jpg", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//MRX-Q1-HealthandWellness-RC-01-1536x575.jpg", 
    },
    {
       titel:"CASE STUDIES",
       heading:"Get the most out of SurveyMonkey <br>Enterprise:10 tips from our product",
       image_Url:"https://prod.smassets.net/assets/cms/sm/uploads//social-impact-report-cover.jpg", 
    },
]

function appenNewData(dataArr){

    let containerdiv=document.getElementById("sectionfifth_container");
 dataArr.forEach((el)=>{
    let card = document.createElement("div");
    
    let p1 =document.createElement("p");
    p1.innerHTML=el.titel;
 
    let heading = document.createElement("h4")
    heading.innerHTML=el.heading;
 
    let image = document.createElement("img"); 
    image.src=el.image_Url;
 
    card.append(p1,heading,image);
    containerdiv.append(card);
 })
 }
 
 
 let appendnewdatabtn=document.getElementById("sectionfifth_button");
 
 appendnewdatabtn.addEventListener("click",()=>{
    appenNewData(dataArr);
 })

