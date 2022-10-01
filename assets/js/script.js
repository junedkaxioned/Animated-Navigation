var toggle = document.querySelector('.toggle');
var navbar = document.querySelector('.nav');

toggle.addEventListener('click', function () {
  navbar.classList.toggle("active");
})