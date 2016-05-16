$(document).ready(function() {

$(document).ready(function(){
$(this).scrollTop(0);
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


$('.gallery').modaal({
		type: 'image'
});


});