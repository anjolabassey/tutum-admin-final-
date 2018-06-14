$(document).ready(function(){
    $(".accordion").on('click', function(event) {
        if ($(this).next('.panel').is(":visible")) {
            $(".panel").slideUp("slow");
        } else {
            $(".panel").slideUp("slow");
            $(this).next(".panel").slideDown('slow');
        }
    });
});