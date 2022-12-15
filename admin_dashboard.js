let pushData=document.querySelector('#add_Survey')

pushData.addEventListener('click', pushToDB)

async function pushToDB(){
    // event.preventDefault()
    // console.log('ghjk')
    let obj={
        title:document.querySelector('#survey-title').value,
        image:document.querySelector('#survey-image').value,
        category:document.querySelector('#survey-select').value
    }

    let fetchedData=await fetch('https://636a23c5b10125b78fd19a2e.mockapi.io/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    if(fetchedData.ok){
        // console.log('bnjkl')
        window.location.reload()
    }
}

let data=[]
let show_all_templates=0;

window.addEventListener('load',async ()=>{
    let fetchedProducts=await fetch('https://636a23c5b10125b78fd19a2e.mockapi.io/products', {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        }
    })
    if(fetchedProducts.ok){
        let res=await fetchedProducts.json()
        data=[...res]
        // console.log(res)
        // console.log(res.length)
        renderData(data)

        show_all_templates=res.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`

        
    }
})

function renderData(data){
    let renderto= document.querySelector('#right-container');

    let newData=data.map((elem)=>{
        return `
        <div style="background-image: url(${elem.image});" class="child-box">
        <p>${elem.title}</p>
        </div>
        `
    })

    renderto.innerHTML=newData.join('');
}


let a=document.querySelectorAll('.checkbox')
let count=0;
for(let select of a){
    select.addEventListener('click', function(event){
        count++
        console.log(event)
        let clicked=event.target.defaultValue
        console.log(clicked)
        let renderto= document.querySelector('#right-container');
        renderto.innerHTML=null

        let filteredData=data.filter((elem)=>{
            return elem.category==clicked
        })
        renderData(filteredData)
        // console.log(filteredData)
        console.log(filteredData.length)
        // renderto.innerHTML=filteredData.join('');

        show_all_templates=filteredData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
        console.log(count)

    })
}

// let selectTag=document.querySelector('#select')
// selectTag.addEventListener('change', function(){
//     let selected=selectTag.value
//     console.log(selected)
// })

document.querySelector('#show-all').addEventListener('click', function(){
    renderData(data)
    show_all_templates=data.length
    document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`

})




