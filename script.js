const menu2 = document.querySelector('.menu1')
const navitems = document.querySelector('.navitems')

const toggleNavbar = () => {
  navitems.classList.toggle('active')
}

menu2.addEventListener('click', () => toggleNavbar())

const scriptURL =
  'https://script.google.com/macros/s/AKfycby8rKRJR0ALHqzPeSBp5TVdAV6SnDMsRAorxB8P9Fe3Jfryn6R5iVdO7802FKvpqN_U/exec'
const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('Thank you! your form is submitted successfully.'))
    .then(() => {
      window.location.reload()
    })
    .catch(error => console.error('Error!', error.message))
})

let mybutton = document.getElementById('backtotop')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}
