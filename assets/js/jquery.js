$(document).ready(function() {


$('#button-card-1').click(function() {
    $('#par-1').toggle("slow");
  });
  
  $('#button-card-2').click(function() {
    $('#par-2').toggle('medium');
  });
  
  $('#button-card-3').click(function() {
    $('#par-3').toggle('fast');
  });
  $('#button-card-4').click(function() {
    $("#par-4").toggleClass("change");
  });
  
 /* $(".bg-color-name-title").css("background", "url", "../images/code.jpg").attr("images/code.jpg");
  I try to change the picture when but not working  */
 $(".bg-color-name-title").mouseenter(function() {
   $(this).attr("src", "images/code.jpg");
 })

}); // end document.ready