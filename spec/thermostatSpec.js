/* eslint-disable */

var thermostat = new Thermostat();

describe("thermostat", function() {
  it("starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature).toEqual(20);
  });

describe("changing temperature", function() {
  it("increases temperature by 1 degrees", function(){
    thermostat.increaseTemperature()
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it("decreases temperature by 1 degrees", function() {
    thermostat.decreaseTemperature()
    expect(thermostat.currentTemperature).toEqual(20);
  });

});

});
