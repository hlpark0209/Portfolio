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



// Make home's background to transparent when the windwo scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Make a button that move to the top
const btn = document.querySelector('.gotoTop');
const btn2 = document.querySelector('.fa-chevron-circle-up');

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        btn.style.opacity = 1;
        btn2.style.cursor = 'pointer';
    }else{
        btn.style.opacity = 0;
        btn2.style.cursor = 'default';
    }
});

document.addEventListener('click', ()=> {
    scrollIntoView('#home');
});






// Add function
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}