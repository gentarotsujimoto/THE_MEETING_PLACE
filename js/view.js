'use strict';
{
    $(document).ready( function(){
        $('input:visible').eq(0).focus();
    });
    
    $('#input_text_2').keypress( function(e) {
        if (e.which == 13) {
            console.log("OK");
        }
    } );
}