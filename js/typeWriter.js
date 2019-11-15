const TypeWrite = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";

    // first word in the array
    this.word = 0;

    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}