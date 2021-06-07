const btn = document.querySelector('.trans');
const main = document.getElementById('main');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    content.style.transformOrigin = 'top left';
    content.style.transform = 'rotate(-25deg)';
    content.style.transition = '2s linear all';
})