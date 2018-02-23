$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature);
})

$('.increase').on('click', function() {
  var thermostat = new Thermostat();
  thermostat.increaseTemperature();
  $('#temperature').text(thermostat.currentTemperature);
})
