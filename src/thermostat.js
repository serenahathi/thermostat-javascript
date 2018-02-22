var Thermostat = function(){
  this.defaultTemperature = 20;
  this.currentTemperature = 20;
};

Thermostat.prototype = {

  currentTemperature: function() {
    return this.currentTemperature;
  },

  increaseTemperature: function() {
    this.currentTemperature += 1
  },

  decreaseTemperature: function() {
    this.currentTemperature -= 1
  }
}
