$(document).ready(function() {

        $(".imgPortfolio").on( "mouseenter", function(event){
            
                // $(this).children(".classInfo").show(3000);
        $(this).children(".classInfo").slideDown(1500);
        });

        $(".imgPortfolio").mouseleave(function hoverFunction(event){
            
               //$(this).children(".classInfo").hide(3000);
            $(this).children(".classInfo").slideUp(300);
        });

});