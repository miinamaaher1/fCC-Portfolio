const cord = document.getElementsByClassName('content-container');

for (i=0; i<cord.length; i++) {
    cord[i].addEventListener('click', function() {
        for (let j = 0; j < cord.length; j++) {
            if (cord[j] != this) {
                cord[j].classList.remove('active');
            }
        }
        this.classList.toggle('active');
    })
}
