const cord = document.getElementsByClassName('content-container');

for (i=0; i<cord.length; i++) {
    cord[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}
