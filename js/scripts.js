$(document).ready(function() {

/*
  I do not think this function is doing what it is supposed to.  If I had to guess, this function should
  close the hamburger menu on small screens? At any rate, see my comment in the HTML; this should be
  handled by the bootstrap component.
*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


$('.gallery').modaal({
		type: 'image'
});


});