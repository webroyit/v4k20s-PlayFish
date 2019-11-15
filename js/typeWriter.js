const TypeWrite = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.word = 0;  // first word in the array
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// excute the function when the page load
document.addEventListener('DOMContentLoaded', init);

// init
function init(){
    // access the html element and attribute
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));    // JSON.parse convert the string into array
    const wait = txtElement.getAttribute('data-wait');

    // init typewriter
    new TypeWrite(txtElement, words, wait);
}