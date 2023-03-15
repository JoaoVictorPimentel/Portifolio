/* Abrir e fechar o menu no mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list"); 
    body.classList.toggle("menu-nav-ativar")   
})

/* Fechar menu quando selecionar a section */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-ativar")) {
            body.classList.remove("menu-nav-ativar")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

/* Animações */
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
    const windowTopo = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach((Element) => {
        if (windowTopo > Element.offsetTop){
            Element.classList.add('animar');
        } else {
            Element.classList.remove('animar');
        }
    })
}

window.addEventListener("scroll", ()=> {
    animeScroll();
})