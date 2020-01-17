$(document).ready(function() {
  $("#start").click(function(){
    $("#question1").show();
  });
  $("#q1").click(function(){
    var ageanswer1 =$("input:radio[name=age]:checked").val();
    $("#question2").show();
  });
  $("#q2").click(function(){
    var ageanswer2 =$("input:radio[name=music]:checked").val();
    $("#question3").show();
  });
  $("#q3").click(function(){
    var ageanswer3 =$("input:radio[name=drink]:checked").val();
    $("#question4").show();
  });
  $("#q4").click(function(){
    var foodanswer = $("#food").val();
    $("#question5").show();
  });
  $("#q5").click(function(){
    var vacationanswer = $("#vacation").val();
    alert(ageanswer1);
  });
  
});