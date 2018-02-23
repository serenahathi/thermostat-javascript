$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature);

  $('.increase').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('.decrease').on('click', function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });
  // })

// $(document).ready(function() {
  // var thermostat = new Thermostat();
  $('.switch').on('click', function() {
    // PSM is on by default. Clicking on this turns it off
    thermostat.switchPowerSavingMode();
    $('#temperature').text(thermostat.currentTemperature);
  })
})
