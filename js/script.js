// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick= () =>{
    navbarNav.classList.toggle('active');
};

// click diluar side bar untuk hilangkan menu
const hamburger = document.querySelector
('#hamburger-menu')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
})