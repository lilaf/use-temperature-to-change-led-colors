# Use Temperature Data to Change LED colors

## Introduction @unplugged

Welcome! This tutorial will teach you how to program your LEDs using temperature data.

## Import Extensions

Click on the `Advanced` and then the `Extensions` drawers. Search for and download the Neopixel and DHT11_DHT22 packages. 

## Set up the LEDs

First let's set up the LED strip.

Grab a ``||neopixel:set strip||`` block and place it in the ``||basic:on start||`` block.

Notice the `Pin` is set to P2. This is the pin your lights should be physically connected to on your micro:bit.

``` blocks
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
```

## Set up variables for Temperature

Sensor reads in Celsius, need to convert for Fahrenheit.
Set high temp for plants (72)

``` blocks
let TempF = 0
let TempC = 0
let HighTemp = 72
```

## Start sensor collecting data

``` blocks
dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )

```

## Read the Temperature

Read the temp and store it as a variable

``` blocks
TempC = dht11_dht22.readData(dataType.temperature)
```

## Convert C to Fahrenheit

``` blocks
TempF = TempC * (9 / 5) + 32
```

## Set up the conditional

``` blocks
    if (TempF > 72) {
    } else {
    }
```

## Set up what happens inside the conditional (orange and blue lights)

``` blocks
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
```


``` blocks
let TempF = 0
let TempC = 0
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
let HighTemp = 72
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
    TempF = TempC * (9 / 5) + 32
    if (TempF > 72) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
})
```

``` package
neopixel=github:microsoft/pxt-neopixel#v0.7.3
pxt-DHT11_DHT22=github:alankrantas/pxt-DHT11_DHT22#v0.0.2
```

