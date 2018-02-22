var Thermostat = function(){
  this.currentTemperature = 20;
};

const MINIMUMTEMPERATURE = 10;
const DEFAULTTEMPERATURE = 20;

Thermostat.prototype = {

  currentTemperature: function() {
    return this.currentTemperature;
  },

  increaseTemperature: function() {
    this.currentTemperature += 1;
  },

  decreaseTemperature: function() {
    if (!this.minimumTemperatureCheck()){
      this.currentTemperature -= 1;
    }
  },

  minimumTemperatureCheck: function() {
    if (this.currentTemperature === MINIMUMTEMPERATURE){
      throw("Minimum temperature reached")
    }
  }

};