let opnbtn = document.querySelector('#open');
let mdl = document.querySelector('.container');
let clsbtn = document.querySelector('#close');

opnbtn.addEventListener('click', function() {
    mdl.style.display = 'block';
});
clsbtn.addEventListener('click', function() {
    mdl.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target === mdl) {
        mdl.style.display = 'none';
    }
});