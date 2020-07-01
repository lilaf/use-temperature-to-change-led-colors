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
    if (TempF > HighTemp) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
})
