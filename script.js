const btn = document.querySelector('.trans');
const main = document.getElementById('main');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    
    content.style.transform = 'rotate(-20deg) translate(212px, -240px)';
    content.style.transition = '0.4s ease-in';
})