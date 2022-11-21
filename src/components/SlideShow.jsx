
    var oldimg = 7;
    var cimg = 1;
    var x=0;

    function slide_image(){
        $("#slider"+oldimg).fadeOut("slow", function(){
            $("#slider"+cimg).fadeIn("slow", function() {
                oldimg=cimg;
                cimg++;
                if (cimg>7) { cimg = 1; }
                var x = setTimeout(slide_image, 2000);
            });
        })
    }

    ( function( $ ) {
       $( window ).load(function() {
           slide_image();
           });
    } )( jQuery );

    $( window ).resize(function() {
    });

