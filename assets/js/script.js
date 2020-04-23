$(document).ready(function () {
  $(".datepicker").datepicker();

  $("#submit-button").on("click", function () {
    // Create API variables
    var userDate = $("#user-date").val();
//    var userDate = new Date();
    var formattedDate = moment(userDate).format('YYYY-MM-DD');
//    var startDate = response.events.event.start_time;

//    if (formattedDate === startDate) {

//    }

    console.log(formattedDate);

    if (formattedDate != "") {
      $.ajax({
        url: "http://api.eventful.com/json/events/search?app_key=B3cccB54Cfm7csbL&category=music&location=United+States&page_size=4&date=" + formattedDate,
        type: "GET",
        dataType: "jsonp",
//        dateFormat: "yyyy/mm/dd",
//        startDate = response.events.event.start_time

//      if statement saying if user date = start date and country name in api then respond
//        if (userDate == events.event.start_time) {

        success: function (response) {
          console.log(response);
        
          var display = displayEventInfo(response);
          $(".title-one").html("Artist: " + response.events.event.title);
          $("#location-one").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-one").html("Venue: " + response.events.event.venue_name);

          $(".title-two").html("Artist: " + response.events.event.title);
          $("#location-two").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-two").html("Venue: " + response.events.event.venue_name);

          $(".title-three").html("Artist: " + response.events.event.title);
          $("#location-three").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-three").html("Venue: " + response.events.event.venue_name);

          $(".title-four").html("Artist: " + response.events.event.title);
          $("#location-four").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-four").html("Venue: " + response.events.event.venue_name);
        },
      });
    } else {
      $("#error").html("Field cannot be blank");
    }
  })})


//function show_alert() {
//  var oArgs = {
//    app_key: "YOUR APP KEY",

//    id: "20218701",

//    page_size: 25,
//  };

//  EVDB.API.call("/events/get", oArgs, function (oData) {
// Note: this relies on the custom toString() methods below
//  });
//}

//function show_alert2() {
//  var oArgs = {
//    app_key: "YOUR APP KEY",

//    q: "music",

//    where: "San Diego",

//    date: "2013061000-2015062000",

//  page_size: 5,

//    sort_order: "popularity",
//  };

//  EVDB.API.call("/events/search", oArgs, function (oData) {
// Note: this relies on the custom toString() methods below
