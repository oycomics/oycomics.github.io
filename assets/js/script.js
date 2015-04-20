$( document ).ready(function() {

$("body").scrollspy({ target: "#bs-example-navbar-collapse-1" });

$("#bs-example-navbar-collapse-1 ul li a[href^='#'],a.large-section-link[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

});
