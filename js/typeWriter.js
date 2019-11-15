const TypeWrite = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.index = 0;  // first word in the array
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// add a method to the fucntion
TypeWrite.prototype.type = function(){
    // current index of word
    const current = this.index % this.words.length;

    // get the full text of the current word
    const fullText = this.words[current];

    if(this.isDeleting){
        // remove the letter of the word
        this.txt = fullText.substring(0, this.txt.length - 1);
    }
    else{
        // add the letter of the word
        this.txt = fullText.substring(0, this.txt.length + 1);
    }

    // insert the text into span element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // update the client every .5 second
    setTimeout(() => this.type(), 500)
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