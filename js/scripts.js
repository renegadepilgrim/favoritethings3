$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var blanks =["question1", "question2", "question3", "question4"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("#unordered").append("<li>" + userInput + "</li>")
    });

    $('#list').show();

    event.preventDefault();
  });
});
