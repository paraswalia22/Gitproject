$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });


    $("h3").dblclick(function () {
        $(this).hide();
    });


    $("#p1").mouseenter(function () {
        alert("You entered in Mouse Enter Event!");
    });



    $("#p2").mouseleave(function () {
        alert("Bye! You now leave!");
    });

    $("#ser").click(() => {
       $(".toggle").toggle(1000);  
    });

 $('div').on('click', function(){
     let element = $(this)
      element.width(element.width() + 10 + "px")
      element.height(element.height() + 10 + "px")
 });

});