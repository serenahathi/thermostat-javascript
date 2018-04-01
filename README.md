# Thermostat App (Week 5)

# Summary

A thermostat app built using JavaScript, jQuery, the [OpenWeatherMap API](https://openweathermap.org/api), HTML, CSS and tested using Jasmine.

Demo:

<img src="https://media.giphy.com/media/kiJhWqXMzHCBAZnIKi/giphy.gif">

# Specification

Basic functionality:
- The thermostat's default temperature is 20 degrees and its minimum temperature is 10 degrees
- The temperature of the thermostat can be increased and decreased with an up and down function
- The temperature can be reset back to 20 degrees with a reset function

Power saving mode:
- Power saving mode is on by default
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees

Energy usage:
- A temperature less than 18 degrees is deemed low-usage, a temperature between 18 and 25 degrees is deemed medium-usage whilst anything else is considered high-usage
- Low energy usage will be indicated when the temperature turns green, medium usage is indicated when the temperature turns amber and high-usage will be indicated when the temperatue text turns red

# Installing

Run the following command in the terminal:
``` 
$ git clone https://github.com/serenahathi/thermostat-javascript.git
```
```
Open thermostat.html in your browser of choice
```

# Running tests

``` 
Open SpecRunner.html in your browser of choice
```

# Ideas for extension
- Implement dynamic styling based on temperature of city entered

