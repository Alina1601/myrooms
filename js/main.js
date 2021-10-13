$(function(){
    $('.button').click( function() {
        $('.gallery').fadeIn();
    });
    
    // Закрытие окна на крестик
    $('.close-button').click( function() {
        $('.gallery').fadeOut();
    });
    
    // Закрытие окна на поле
    $(document).mouseup( function (e) { 
        var popup = $('.fotorama');
        if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.gallery').fadeOut();
        }
    });
  });