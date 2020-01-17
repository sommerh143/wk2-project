$(document).ready(function() {
  $("#start").click(function(){
    $("#question1").show();
  });
  $("#q1").click(function(){
    var ageanswer =$("input:radio[name=age]:checked").val();

  });
});