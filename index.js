const menu = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

menu.addEventListener('click', function() {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach(item => {
  item.addEventListener("click", function() {
    document.body.classList.remove('nav-open')
  })
})