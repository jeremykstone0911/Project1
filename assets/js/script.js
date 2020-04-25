$(document).ready(function () {
  $(".datepicker").datepicker();

  $("#search-button").on("click", function () {
    var userDate = $("#date").val()

    var formattedDate = moment(userDate).format("YYYY-MM-DD");

    console.log(formattedDate);


    $.ajax({
      url: "http://api.eventful.com/json/events/search?app_key=B3cccB54Cfm7csbL&category=music&location=United+States&page_size=1&date=" + formattedDate,
      type: "GET",
      dataType: "jsonp",

      success: function (response) {
        console.log(response);

      var display = displayEventInfo(response);
      $(".collection").html(display);

        console.log(response.events.event[0].title);
        console.log(response.events.event[0].city_name);
        console.log(response.events.event[0].venue_name);

      },
    });

    function displayEventInfo(response) {

    $("#artist").html("Artist/Event Title: " + response.events.event[0].title);
    $("#venue").html("Venue: " + response.events.event[0].venue_name);
    $("#location").html("Location: " + response.events.event[0].city_name);
 
    }

  });
});