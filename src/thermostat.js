var Thermostat = function(){
  this.currentTemperature = 20;
  this.powerSavingMode = true;
};

const MINIMUMTEMPERATURE = 10;
const MAXIMUMTEMPERATURE = 25;
const DEFAULTTEMPERATURE = 20;

Thermostat.prototype = {

  currentTemperature: function() {
    return this.currentTemperature;
  },

  increaseTemperature: function() {
    if (this.powerSavingMode === false && (this.currentTemperature === 32)) {
      throw("Maximum temperature reached")}

    if (this.powerSavingMode === false && (this.currentTemperature < 32)) {
      this.currentTemperature += 1;}

    if (!this.maximumTemperatureCheck()) {
       this.currentTemperature += 1;
     }
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
  },

  maximumTemperatureCheck: function() {
    if (this.currentTemperature === MAXIMUMTEMPERATURE){
      throw("Maximum temperature reached")
    }
  }
};
