$(document).ready(function() {
  var current_position1 = 1;
  var current_position2 = 1;

  $('#ResetGame').click(function() {
        location.reload();
  });
  
  $(document).on('keyup', function(event) {

    var move1 = function(position) {
      $("table tr:nth-child(1) td").removeClass("active")
      $("table tr:nth-child(1) td:nth-child(" + position + ")").addClass("active")
    }

    var move2 = function(position) {
      $("table tr:nth-child(2) td").removeClass("active")
      $("table tr:nth-child(2) td:nth-child(" + position + ")").addClass("active")  
    }

    if (event.keyCode == 32) {
      move1(current_position1 += 1);
    }

    if (event.keyCode == 39) {
      move2(current_position2 += 1);
    }
     
    if (current_position1 === 10) {
      current_position1 += 1
      alert("Player 1 won!");
      $(document).off('keyup');
    }
    else if (current_position2 === 10) {
      current_position2 += 1
      alert("Player 2 won!");
      $(document).off('keyup');
    }
  })
});