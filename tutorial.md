# Use Temperature Data to Change LED colors

## Step 1: Introduction @unplugged

Welcome! Now that you know how to check the temperature and convert it from Celsius to Fahrenheit you are ready to start using that data to change the color of you LEDs! This tutorial will teach you how to change your LEDs from one color to another when the temperature of your garden is too high.

## Step 2: Check template code

Let's start from what you learned last time. Check out the code provided below. This code will collect temperature data and converts it from Celsius to Fahrenheit. Once you have looked this over, move on to the next step!

``` template
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
    TempF = ((TempC * 9) / 5) + 32
})
```

## Step 3: Set up a high temperature value

Since plants do not like too high temperatures, let's set a high limit for the temperature, maybe 72F.

Set up a ``||Variables:variable||`` for the high temperature and add it to the ``||basic:on start||`` block. ``||variables:Set||`` the value to your chosen max temperature (72 in this case).

``` blocks
let HighTemp = 72
```

## Step 4: Set up the LEDs

Now we are ready to set up the neopixels (LEDs).

Grab a ``||neopixel:set strip||`` block and place it in the ``||basic:on start||`` block.

You may need to change the `Neopixel at pin` to `P2` with 30 lights. This is the pin your strand of 30 lights should be physically connected to on your micro:bit. Check out the picture on the LEaFS website (bit.ly/LEaFS-E1) and make sure your setup looks correct!

``` blocks
let HighTemp = 72
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
```

## Step 5: Set up the conditional

We can use an if-then-else statement to change the color when the temperature is above or below our high temperature.

Grab an ``||Logic:if-then-else||`` statement and add it to the ``||basic:forever||`` block. Add a ``||Logic:less than||`` block and add it to the ``||Logic:if||`` statement. Change the ``||Logic:less than||`` to read ``||Variables:TempF||`` > ``||Variables:HighTemp||``.

``` blocks
let HighTemp = 72
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)

basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
    TempF = ((TempC * 9) / 5) + 32
    if (TempF > HighTemp) {
    } else {
    }
})
```

## Step 6: Set up what happens inside the conditional (orange and blue lights)

Now choose your colors for above and below the high temperature value!

Grab a ``||neopixel:show color||`` block and add it to the ``||Logic:if||`` statement. Repeat this for the ``||Logic:else||`` part of the statement. Choose two colors from the dropdown menu.

``` blocks
let HighTemp = 72
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)

basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
    TempF = ((TempC * 9) / 5) + 32
    if (TempF > HighTemp) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
```
## Step 7: Turn the lights on

The final step is to turn the lights.

Drag a ``||neopixel:show||`` block to after the ``||Logic:if-then-else||`` statement.

``` blocks
let HighTemp = 72
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)

basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
    TempF = (TempC * 9)) / 5) + 32
    if (TempF > 72) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
})
```

## Step 8: Download your program

Now you're ready to download your code! Press the ``|Download|`` button to save the code to your computer.


``` package
neopixel=github:microsoft/pxt-neopixel#v0.7.3
pxt-DHT11_DHT22=github:alankrantas/pxt-DHT11_DHT22#v0.0.2
```
