const btn = document.querySelector('.trans');
const main = document.getElementById('main');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    
    content.style.transform = 'rotate(-25deg)';
    content.style.transformOrigin = '0 0';
    
    content.style.transition = '2s linear all';
})