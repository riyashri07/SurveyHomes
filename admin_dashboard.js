let pushData=document.querySelector('#add_Survey')

pushData.addEventListener('click', pushToDB)

async function pushToDB(){

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
        alert('Survey added in database!')
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
        renderData(res)
        // console.log(res)

        show_all_templates=res.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`

    }
})

function renderData(data){
    let renderto= document.querySelector('.right-container-main');

    let newData=data.map((elem)=>{
        return `
        <div id="right-container-cards">
            <div><p>${elem.title}</p></div>
            <div><p>${elem.category}</p></div>
            <div><button id="delete" data-id=${elem.id}>Delete</button></div>            
        </div>
        `
    })
    renderto.innerHTML=newData.join('');

    let deleteRow=document.querySelectorAll('#delete')
    for(let del of deleteRow){
        del.addEventListener('click', (e)=>{
            let ids=e['target']['attributes']['data-id']['nodeValue'];
            // console.log(ids)
            DeleteData(ids)
        })
    }
}

async function DeleteData(id){
    try {
        let deleteFetched=await fetch(`https://636a23c5b10125b78fd19a2e.mockapi.io/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(deleteFetched.ok){
            console.log('Deleted')
            window.location.reload()
      }
        
    } catch (error) {
        console.log('ERROR!')
    }
}


let a=document.querySelectorAll('.checkbox')
for(let select of a){
    select.addEventListener('click', function(event){

        document.querySelector('#show-details>input').value=null;

        let clicked=event.target.defaultValue
        let renderto= document.querySelector('.right-container-main');
        renderto.innerHTML=null

        let filteredData=data.filter((elem)=>{
            return elem.category==clicked
        })
        renderData(filteredData)

        show_all_templates=filteredData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`

    })
}

document.querySelector('#show-details>input').addEventListener('input',search);

function search(){
    test()
    let input=document.querySelector('#show-details>input').value;
    let newData=data.filter((element)=>{
        let entrered=element.title.toLowerCase().includes(input.toLowerCase());
        if(input){
            return entrered;
        }
        else{
            console.log('Nothing to search')
        }
    })
    if(newData.length==0){
        renderData(data)
        show_all_templates=data.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    }
    else{
        renderData(newData)
        show_all_templates=newData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    }
}


document.querySelector('#show-all').addEventListener('click', function(){
    renderData(data)
    show_all_templates=data.length
    document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
})


function test(){
    let a=document.querySelectorAll('#left-container-labels');
    let n=a[0].children.length

    for(let i=0;i<n;i++){
        a[0].children[i].children[0].checked=false
    }
}







