$(document).ready(function() {

  // jumbotron current date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));


  // save button click
  $(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save action
    localStorage.setItem(time, value);
  });

   // get saved data
   $("#9AM .description").val(localStorage.getItem("9AM"));
   $("#10AM .description").val(localStorage.getItem("10AM"));
   $("#11AM .description").val(localStorage.getItem("11AM"));
   $("#12PM .description").val(localStorage.getItem("12PM"));
   $("#1PM .description").val(localStorage.getItem("1PM"));
   $("#2PM .description").val(localStorage.getItem("2PM"));
   $("#3PM .description").val(localStorage.getItem("3PM"));
   $("#4PM .description").val(localStorage.getItem("4PM"));
   $("#5PM .description").val(localStorage.getItem("5PM"));
 

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();
  var interval = setInterval(hourUpdater, 2000);

 
  
});
