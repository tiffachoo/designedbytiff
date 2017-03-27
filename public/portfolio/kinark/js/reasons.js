// **INIT CALLED BY DOCUMENT BOOTSTRAP**
function initReasons () {

    $(".leftNoPad").map(function(){
        $(this).outerHeight( $(this).next(".columns").outerHeight() );
    });

    $(".rightNoPad").map(function(){
        $(this).outerHeight( $(this).prev(".columns").outerHeight() );
    });

};

// **DOCUMENT BOOTSTRAP**
$(document).ready(initReasons);