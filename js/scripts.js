$(document).ready(function() {
  $("#start").click(function(){
    $("#question1").show();
  });
  $("#q1").click(function(){
    answer1 =$("input:radio[name=age]:checked").val();
    
    if (answer1 === "0-11") {
      $("#babypic").show();
      $("#question2").show();
    } else if (answer1 === "12-19") {
      $("#teenpic").show();
      $("#question2").show();
    } else if (answer1 === "20-30") {
      $("#adultpic").show();
      $("#question2").show();
    } else {
      $("#oldpic").show();
      $("#question2").show();
    }

    
    
  });
  $("#q2").click(function(){
    answer2 =$("input:radio[name=music]:checked").val();
    $("#question3").show();
   
   if (answer2 === "rock"){
     $("#rockpic").show();
   } else if (answer2 === "rap"){
    $("#rappic").show();
   } else if (answer2 === "country"){ 
    $("#countrypic").show();
   } else {
    $("#edmpic").show();
   }


  });
  $("#q3").click(function(){
    answer3 =$("input:radio[name=drink]:checked").val();
    $("#question4").show();

    if (answer3 === "coffee"){
     $("#cofeepic").show();
    } else if (answer3 === "tea"){ 
     $("#teapic").show();
    } else if (answer3 === "smoothie") {
     $("#smoothiepic").show();
    } else {
      $("#waterpic").show();
    }
  });
  $("#q4").click(function(){
    answer4 = $("#food").val();
    $("#question5").show();
    if (answer4 === "mexican"){
      $("#mexicanpic").show();
     } else if (answer4 === "veggi"){ 
      $("#veggipic").show();
     } else if (answer4 === "italian") {
      $("#italianpic").show();
     } else {
       $("#burgurspic").show();
     }
  });
  $("#q5").click(function(){
    answer5 = $("#vacation").val();

    if (answer5=== "beach"){
      $("#beachpic").show();
     } else if (answer5 === "tropical"){ 
      $("#tropicalpic").show();
     } else if (answer5 === "artic") {
      $("#articpic").show();
     }

    if (answer1 === "0-11" && answer2 === "rock" && answer3 === "coffee" && answer4 === "mexican" && answer5 === "beach") {
      $("#csharp").show();
      $("#java").hide;
      $("#cplus").hide;
      $("#ruby").hide;
      $("#info2").show();
    } else if (answer1 === "12-19" && answer2 === "rap" && answer3 === "tea" && answer4 === "burgurs" && answer5 === "tropical") {
      $("#java").show();
      $("#csharp").hide();
      $("#cplus").hide();
      $("#ruby").hide();
      $("#info3").show();
    } else if (answer1 === "20-30" && answer2 === "country" && answer3 === "smoothie" && answer4 === "italian" && answer5 === "artic") {
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
      $("#info4").show();
    } 
  });
});