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




// intersectionobserver function
// 1. 모든 섹션 요소를 가져온다.
// 2. intersectionobserver로 아이템을 활성화 시킨다.
// 3. 보여지는 섹션에 해당한느 메뉴를 활성화 시킨다.  
const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItems = navItems[0];
function selectNavItem(selected){
    selectedNavItems.classList.remove('active');
    selectedNavItems = selected;
    selectedNavItems.classList.add('active');
}

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    selectNavItem(navItems[sectionIds.index(selector)]);
}


const options = {
    root : null,
    rootMargin : '0px',
    threshold : 0.3,
}

const callback = (entrise, observer) => {
    entrise.forEach( entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0){
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            
            if (entry.boundingClientRect.y < 0){
                selectedNavIndex = index + 1;
            }else{
                selectedNavIndex = index - 1;
            }
        }
    });
}
const observer = new IntersectionObserver(callback, options);
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
    selectNavItem(navItems[selectedNavIndex]);
});







// Make a menu toggle 
const toggle = document.querySelector('.navbar__toggle');
toggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
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

    btn.addEventListener('click', ()=> {
        scrollIntoView('#home');
    });
});


// Filter to contents by category
const filterBtn = document.querySelector('.work__category');
const filterCon = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.work__projects a');

filterBtn.addEventListener( 'click', (e) => {
    const filter = e.target.dataset.filter;
    if (filter == null){
        return;
    }
    filterCon.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((projects) => {
            console.log(projects.dataset.type);
            if(filter === '*' || filter === projects.dataset.type){
                projects.classList.remove('invisible');
            } else{
                projects.classList.add('invisible');
            }
        });
        filterCon.classList.remove('anim-out');
    }, 300);
});


// Maintain the menu & btn's active
// const menuActive = document.querySelector('.work__category__btn.active');
//     menuActive.classList.remove('active');
//     const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
//     target.classList.add('active');





// Add function



