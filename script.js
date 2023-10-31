const qrImg = document.querySelector('img');

const linkInput = document.querySelector('.input');

const generateBtn = document.querySelectorAll('button')


// let data =  {
//     content: 'hello world',
//     size: '100*100'

// }

generateBtn[0].addEventListener('click',()=>{
    generateQr()
})




function generateQr(){
    let linkValue = linkInput.value
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${linkValue}&size=150x150`,{
        method: "POST",
        
    }).then((res)=>{
        return res
    }).then((result)=>{
        let imageLink = result.url
        qrImg.src = imageLink
    })
}

