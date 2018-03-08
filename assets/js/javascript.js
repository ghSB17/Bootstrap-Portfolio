$(document).ready(function() {

        $(".imgPortfolio").on( "mouseenter", function(event){
            
        //$(this).children(".classInfo").animate({height:'toggle'});

        $(this).children(".classInfo").show(3000);
            
        });

        $(".imgPortfolio").mouseleave(function hoverFunction(event){
            
            // $(this).children(".classInfo").animate({
            //     height:'toggle'
            // });
            $(this).children(".classInfo").hide(3000);
            //$(this, ".classInfo").hide();
        });

});