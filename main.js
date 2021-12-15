'use strict';

// Make navbar fixed
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-white');
    }else{
        navbar.classList.remove('navbar-white');
    }
});

// Make scroll to section
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    
    // link가 없는 경우는 클릭이 제한됨 
    const target = e.target;
    const link = target.dataset.link;
    if ( link == null ){
        return;
    } 
    scrollIntoView(link);
    
});

// Move to contact section
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// Add function
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
