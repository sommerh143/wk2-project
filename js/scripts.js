$(document).ready(function() {
  $("#start").click(function(){
    $("#question1").show();
  });
  var answer1, answer2,answer3, answer4, answer5 = "";
  $("#q1").click(function(){
    answer1 = $("input:radio[name=age]:checked").val();
    if (answer1 === "1") {
      $("#babypic").show();
      $("#question2").show();
    } else if (answer1 === "2") {
      $("#teenpic").show();
      $("#question2").show();
    } else if (answer1 === "3") {
      $("#adultpic").show();
      $("#question2").show();
    } else {
      $("#oldpic").show();
      $("#question2").show();
    }    
  });
  $("#q2").click(function(){
    answer2 = $("input:radio[name=music]:checked").val();
    $("#question3").show();
   
   if (answer2 === "1"){
     $("#rockpic").show();
   } else if (answer2 === "2"){
    $("#rappic").show();
   } else if (answer2 === "3"){ 
    $("#countrypic").show();
   } else {
    $("#edmpic").show();
   }
  });
  $("#q3").click(function(){
    answer3 = $("input:radio[name=drink]:checked").val();
    $("#question4").show();
    if (answer3 === "1"){
     $("#cofeepic").show();
    } else if (answer3 === "2"){ 
     $("#teapic").show();
    } else if (answer3 === "3") {
     $("#smoothiepic").show();
    } else {
      $("#waterpic").show();
    }
  });
  $("#q4").click(function(){
    answer4 = $("input:radio[name=food]:checked").val();
    $("#question5").show();
    if (answer4 === "1"){
      $("#mexicanpic").show();
     } else if (answer4 === "3"){ 
      $("#veggipic").show();
     } else if (answer4 === "2") {
      $("#italianpic").show();
     } else {
       $("#burgerpic").show();
     }
  });
  $("#q5").click(function(){
    answer5 = $("input:radio[name=vacation]:checked").val();
    if (answer5=== "1"){
      $("#beachpic").show();
     } else if (answer5 === "2"){ 
      $("#tropicalpic").show();
     } else if (answer5 === "3") {
      $("#articpic").show();
     }
    if (answer1 === "1" && answer2 === "1" && answer3 === "1" && answer4 === "1" && answer5 === "1") {
      $("#csharp").show();
      $("#java").hide();
      $("#cplus").hide();
      $("#ruby").hide();
      $("#info2").show();
    } else if (answer1 === "2" && answer2 === "2" && answer3 === "2" && answer4 === "2" && answer5 === "2") {
      $("#java").show();
      $("#csharp").hide();
      $("#cplus").hide();
      $("#ruby").hide();
      $("#info3").show();
    } else if (answer1 === "3" && answer2 === "3" && answer3 === "3" && answer4 === "3" && answer5 === "3") {
      $("#java").hide();
      $("#csharp").hide();
      $("#cplus").show();
      $("#ruby").hide();
      $("#info4").show();
    } else  {
      $("#java").hide();
      $("#csharp").hide();
      $("#cplus").hide();
      $("#ruby").show();
      $("#info5").show();
    } 
  });
});