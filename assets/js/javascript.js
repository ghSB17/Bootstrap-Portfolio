$(document).ready(function() {

        $(".imgPortfolio").on( "mouseenter", function(event){
            
                // $(this).children(".classInfo").show(3000);
        $(this).children(".classInfo").slideDown(500);
        });

        $(".imgPortfolio").mouseleave(function hoverFunction(event){
            
               //$(this).children(".classInfo").hide(3000);
            $(this).children(".classInfo").slideUp(300);
        });

        $(".imgSocial").on("click", function(event){
                var imgAlt = $(this).attr("alt");
                
                switch(imgAlt){
                        case "GitHub":
                                        window.open("https://github.com/ghSB17?tab=repositories")
                                        break;
                        case "LinkedIn":
                                        window.open("https://www.linkedin.com/in/sumathiganjam/")
                                        break;
                }
        })
});