let pushData=document.querySelector('#form')

pushData.addEventListener('submit', pushToDB)

async function pushToDB(event){
    event.preventDefault()
    console.log('ghjk')
    let obj={
        userId:document.querySelector('#userid').value,
        title:document.querySelector('#title').value,
        image:document.querySelector('#image').value
    }

    let fetchedData=await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    if(fetchedData.ok){
        console.log('bnjkl')
    }
}