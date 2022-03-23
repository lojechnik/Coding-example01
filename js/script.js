// window.onscroll = function showHeader(){
//     let header = document.querySelector(".header");
//     if(window.pageYOffset > 200){
//         header.classList.add('header-fixed');
//     }

// }
const headermenu = document.querySelector(".header-menu__ul");
const hamburger = document.querySelector(".header-hamburger");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headermenu.classList.toggle("active");
})
document.querySelectorAll(".header-menu__link").forEach(n=> n. addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    headermenu.classList.remove("active");
}))