$(document).ready(function () {
  $(".datepicker").datepicker();

  $("#submit-button").on("click", function () {
    // Create API variables
    var userDate = $("#user-date").val();
    console.log(userDate);

    if (userDate != "") {
      $.ajax({
        url: "http://api.eventful.com/json/events/search?app_key=B3cccB54Cfm7csbL&category=music&date=past" +
          userDate,
        type: "GET",
        dataType: "jsonp",
        dateFormat: "yyyy/mm/dd",

        success: function (response) {
          console.log(response);

          var display = displayEventInfo(response);
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $("#current-day").val("");
        },
      });
    } else {
      $("#error").html("Field cannot be blank");
    }
  });
});

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
// });}
