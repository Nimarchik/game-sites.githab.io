const lang = document.querySelector('.lang-item');
const drop = document.getElementById("drops");
const menu = document.querySelector(".btn-menu");
const list = document.querySelector(".nav__list");

menu.addEventListener('click', function(){
    list.classList.toggle('nav__list--active');
})

lang.addEventListener("click", function () {

    if (drop.style.display === 'none') {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
})

let line = document.getElementById("line");
let section = document.getElementById("btn-id");

section.addEventListener("mouseover", function () {
    line.style.backgroundColor = 'white';
})
section.addEventListener("mouseout", function () {
    line.style.backgroundColor = '#1A1917'
    line.style.transition = 'background-color 0.5s ease';
})