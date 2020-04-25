$(document).ready(function () {
  $(".datepicker").datepicker();

  $("#search-button").on("click", function () {
    var userDate = $("#date").val()

    var formattedDate = moment(userDate).format("YYYY-MM-DD");

    console.log(formattedDate);


    $.ajax({
      url: "http://api.eventful.com/json/events/search?app_key=B3cccB54Cfm7csbL&category=music&location=United+States&page_size=4&date=" + formattedDate,
      type: "GET",
      dataType: "jsonp",

      success: function (response) {
        console.log(response);

      var display = displayEventInfo(response);
      $(".collection").html(display);

      },
    });

    function displayEventInfo(response) {

    var artist = $("#artist").html(response.events.event.title);
    $("#location").html("Venue: " + response.events.event.venue_name);
    $("#venue").html("Location: " + response.events.event.city_name + response.events.event.region_name);

    console.log(artist);
    console.log("Location: " + response.events.event.city_name + response.events.event.region_name);
    console.log("Venue: " + response.events.event.venue_name);
 
    }

  });

    WebFont.load({
      google: {
        families: ["shadowsIntoLight"],
      },
    });
    
    WebFontConfig = {
      google: {
        families: ["shadowsIntoLight"],
      },
      timeout: 2000, // Set the timeout to two seconds
    };

});

