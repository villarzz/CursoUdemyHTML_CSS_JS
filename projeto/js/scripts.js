//Selecão de elementos
const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

// Funções
function smoothScrol(e){
    e.preventDefault();
    const href = this.getAttribute("href");
    console.log(href);
}

// Eventos
[menuBtn,closeMenuBtn].forEach((btn)=>{
    btn.addEventListener("click", (e)=> {
        menu.classList.toggle("menu-active");
    });
});

allLinks.forEach((link)=>{
    link.addEventListener("click",smoothScrol() )
})