$(function() {
	menu = $('nav ul');

    $('#openup').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });
  
    $(window).resize(function(){
        var w = $(this).width(); if(w > 625 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
  
    $('nav li').on('click', function(e) {                
        var w = $(window).width(); if(w < 625 ) {
            menu.slideToggle(); 
        }
    });

    $('.open-menu').height($(window).height());
});

// For smooth scrolling
// add onClicked on all "a" tag
$('.cf a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        // add animation
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            // speed of the scoll
            600,
            function() {
                window.location.hash = hash;
            }
        );
    }
});