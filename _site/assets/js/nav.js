

const main = document.querySelector('.main-content');
const nav = document.querySelector('header');
const header = document.querySelector('.main-content h2');

console.log(header.getBoundingClientRect().top);
window.onscroll = function() {
    navFunction();
}


function navFunction(top) {
    top = header.getBoundingClientRect().top;
    if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
       nav.classList.add('hide-me');
    } else{
        nav.classList.remove('hide-me');
    }
}