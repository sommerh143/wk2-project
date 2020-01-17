$(document).ready(function() {
  $("#start").click(function(){
    $("#question1").show();
  });
  $("#q1").click(function(){
    answer1 =$("input:radio[name=age]:checked").val();
    $("#question2").show();
  });
  $("#q2").click(function(){
    answer2 =$("input:radio[name=music]:checked").val();
    $("#question3").show();
  });
  $("#q3").click(function(){
    answer3 =$("input:radio[name=drink]:checked").val();
    $("#question4").show();
  });
  $("#q4").click(function(){
    answer4 = $("#food").val();
    $("#question5").show();
  });
  $("#q5").click(function(){
    answer5 = $("#vacation").val();

    if (answer1 === "0-11" || "12-19" && answer2 === "rock" || "rap" && answer3 === "coffee" || "tea" && answer4 === "mexican" || "burgurs" && answer5 === "beach" || "tropical") {
      $("#output").text(answer1 + answer2 + answer3 + answer4 + answer5);
    } else if (answer1 === "20-30" || "12-19" && answer2 === "rock" || "country" && answer3 === "water" || "tea" && answer4 === "mexican" || "veggi" && answer5 === "artic" || "tropical") {
      alert("try again");
    } else {
      alert ("something");
    } 


    
  });
  
});