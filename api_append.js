
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

for(let select of a){
    select.addEventListener('click', function(event){
        document.querySelector('#left-container>div:nth-child(2)>input').value=null;
        
        console.log(event)
        let clicked=event.target.defaultValue
        let renderto= document.querySelector('#right-container');
        renderto.innerHTML=null

        let filteredData=data.filter((elem)=>{
            return elem.category==clicked
        })
        renderData(filteredData)
        // renderto.innerHTML=filteredData.join('');

        show_all_templates=filteredData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    })
}

document.querySelector('#left-container>div:nth-child(2)>input').addEventListener('input',search);

function search(){

    let input=document.querySelector('#left-container>div:nth-child(2)>input').value;
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









