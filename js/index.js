

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})


 


$('#slids h3').click(function(){
    $(this).next().slideToggle(500);
    $('.inner').not($(this).next()).slideUp(500);
});




$('textarea').keyup(function() {
  let mylength = $(this).val().length;
  let residual = 100-mylength;
  if(residual<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
                $("#chars").text(residual);
            }
});


