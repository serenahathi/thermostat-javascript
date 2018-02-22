var thermostat = new Thermostat();

describe("thermostat", function() {

  it("starts at 20 degrees", function() {
    expect(DEFAULTTEMPERATURE).toEqual(20);
  });

describe("changing temperature", function() {

    beforeEach(function() {
        thermostat = new Thermostat();
    });

  it("increases temperature by 1 degrees", function(){
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it("decreases temperature by 1 degrees", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature).toEqual(19);
  });

  it("throws an error if user tries to decrease temperature below 10", function() {
    for (i = 1; i <= 10; i++) {
        thermostat.decreaseTemperature();
    }
    expect(thermostat.currentTemperature).toBe(10);
    expect(function(){thermostat.decreaseTemperature()}).toThrow("Minimum temperature reached");
  });

  it("throws an error if user tries to increase temperature above 25", function(){
    for (i = 1; i <= 5; i++) {
        thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature).toBe(25);
    expect(function(){thermostat.increaseTemperature()}).toThrow("Maximum temperature reached");
  })
});

describe("power saving mode off", function(){

  beforeEach(function() {
      thermostat = new Thermostat();
      thermostat.powerSavingMode = false;
  });

  it("temperature can be increased to a maximum of 32 degrees", function(){
    for (i = 1; i <= 12; i++) {
        thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature).toBe(32);
    expect(function(){thermostat.increaseTemperature()}).toThrow("PM OFF Maximum temperature reached");
  });
})


});
