# Use Temperature Data to Change LED colors

## Introduction @unplugged

Welcome! This tutorial will teach you how to program your LEDs using temperature data.

## Import Extensions

Go to ||basic:on start|| block. 

## Set up the LEDs


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

