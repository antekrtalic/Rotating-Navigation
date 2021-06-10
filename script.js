const btn = document.querySelector('.trans');
const main = document.getElementById('main');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    
    content.style.transform = 'rotate(-25deg) translate(160px, -90px)';
    content.style.transition = '0.4s ease-in';
})