//Mobile Toggle Menu -- header
const menu = document.querySelector('.menu')
const toggleMenu = document.querySelector('.toggle-menu')

menu.addEventListener('click', () => {
    if(!menu.classList.contains('open')) {
        menu.classList.add('open')
        toggleMenu.style.display = 'flex'
    } else {
        menu.classList.remove('open')
        toggleMenu.style.display = 'none'
    }
})
// Shorten link
const input = document.querySelector('.url-input')
const submit = document.querySelector('.submit')
const results = document.querySelector('.results')
const message = document.querySelector('.message')
const update = document.querySelector('.update')

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
const regex = new RegExp(urlRegex);

input.addEventListener('change', e => {
    input.setAttribute('value', e.target.value)
    var originalUrl = input.value
    console.log(originalUrl);
    var url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`

    async function sendRequest() {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } 

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if(originalUrl && originalUrl.match(regex)) {
            results.style.display = 'flex'
            message.style.display = 'none'
            input.style.color = 'hsl(260, 8%, 14%)';
            input.style.borderColor = 'transparent';
            input.style.outlineColor = 'transparent';
             
            sendRequest().then(data => {
                results.innerHTML =
                    `<div class="result" id='r'>
                     <span class="original">${originalUrl}</span>
                     <hr />
                     <span class="update">${data.result.full_short_link}</span>
                     <button class="copy">copy</button>
                     </div>`   
                
                //Copy Link
                results.childNodes.forEach(child => {
                    const copyBtn = child.lastElementChild
                    copyBtn.addEventListener('click', () => {
                        //get link content
                        let urlText = child.childNodes[5].textContent
                        console.log(urlText);
                        navigator.clipboard.writeText(urlText)
                        copyBtn.innerHTML = 'Copied!'
                        copyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)'
                        setTimeout(() => {
                            copyBtn.innerHTML = 'copy'
                            copyBtn.style.backgroundColor = 'hsl(180, 66%, 49%)'
                        }, 1200);
                    })
                    
                });
            })  
        } else {
            if(originalUrl === '') {
                message.innerHTML = 'Please add a link'
            }else {
                message.innerHTML = 'Please input a valid link'
            }
            e.preventDefault()
            results.style.display = 'none'
            message.style.display = 'block'
            input.style.color = 'hsl(0, 87%, 67%)';
            input.style.borderColor = 'hsl(0, 87%, 67%)';
            input.style.outlineColor = 'hsl(0, 87%, 67%)';
        }
        
    })

    
})


     


            
 
  
    


