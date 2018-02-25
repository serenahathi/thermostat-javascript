$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
    });

  // var default_value = $(this).prop("defaultValue");
 

  $('#increase').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').on('click', function() {
    $('#psm-on-alert').show();
    thermostat.switchPowerSavingModeOn();
    updateTemperature();
  });

  $('#psm-off').on('click', function() {
    $('#psm-on-alert').hide();
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
  });

//   displayWeather('London');
//   $('#select-city').submit(function(event)) 
//   {event.preventDefault()};
//   var city = $('#current-city').val();
//   displayWeather(city);
// });

  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }


});



