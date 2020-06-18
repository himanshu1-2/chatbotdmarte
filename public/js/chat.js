
const $messages = document.querySelector('#messages')
const messageTemplate = document.querySelector('#message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML
//location of search giver after string from baseurl


const html = Mustache.render(messageTemplate, {
    message: HI
   
})
$messages.insertAdjacentHTML('beforeend', html)


document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()


    const message = e.target.elements.message.value

  //  3rd argument message acknowlegment 2 arg actual message

  fetch('/sendtext',{
    method: 'post',
    body: message
  }).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
          console.log(data)
          
        }
    })
})



})





