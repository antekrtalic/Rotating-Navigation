const btn = document.querySelector('.trans');
const main = document.getElementById('main');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    
    content.style.transform = 'rotate(-20deg) translate(212px, -240px)';
    content.style.transition = '0.4s ease-in';
    content.classList.add('active');
    btn.style.transform = 'rotate(-180deg)';
    btn.style.transition = '1s linear';
})

