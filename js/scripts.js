$(document).ready(function() {
  $("form#codequiz").submit(function(event) {
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    if (q1, q2, q3, q4, q5 === "none") {
      alert("Please complete the form");
    } else if (q3 === "hate") {
      $("#other").show();
    } else if (q1 === "corp" && q2 === "back") {
      $("#phpnet").show();
    }  else if (q1 === "corp" && q2 === "front") {
      $("#design").show();
    } else if (q1 !== "corp" && q2 === "front" || q1 !== "corp" && q2 === "back") {
      $("#rubyreact").show();
    } else if (q1 === "ind" && q2 === "front") {
      $("#designruby").show();
    } else if (q1 === "ind" && q2 === "back") {
      $("#javaphp").show();
    };
    alert("Test");

    event.preventDefault();
  });
});
