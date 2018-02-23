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

  isPowerSavingModeOn: function() {
    return this.powerSavingMode;
  },

  // switchPowerSavingModeOff: function() {
  //   this.powerSavingMode = false;
  // },
  //
  // switchPowerSavingModeOn: function() {
  //   this.powerSavingMode = true;
  // },

  switchPowerSavingMode: function() {
    return this.powerSavingMode = !this.powerSavingMode
  },

  increaseTemperature: function() {
      if (this.powerSavingMode === false && this.currentTemperature === 32) {
          throw("PM OFF Maximum temperature reached");

      } else if (this.powerSavingMode === false && this.currentTemperature < 32) {
          this.currentTemperature += 1

       } else if (!this.maximumTemperatureCheck()) {
          this.currentTemperature += 1}
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
  },

  resetTemperature: function() {
    this.currentTemperature = 20;
  },

  energyUsage: function() {
    if (this.currentTemperature <= 18) {
       return "Low-usage";
    } else if (this.currentTemperature >= 18 && this.currentTemperature < 25) {
       return "Medium-usage";
    } else if (this.currentTemperature >= 25) {
       return "High-usage";
  }
}


};
