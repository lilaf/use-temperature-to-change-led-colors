# Use Temperature Data to Change LED colors

```ghost
dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
dht11_dht22.readData(dataType.temperature)
strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
strip.show()
```

``` package
neopixel=github:microsoft/pxt-neopixel#v0.7.3
pxt-DHT11_DHT22=github:alankrantas/pxt-DHT11_DHT22#v0.0.2
```



## Step 1: Introduction @unplugged

Welcome! This tutorial will teach you how to change your LEDs from one color to another when the temperature of your garden is too high.

## Step 2: Start sensor collecting data

Let's begin by telling the sensor to collect data. 

Grab a ``||DHT11_DHT22:Query||`` block and drag it into the ``||basic:forever||`` block.  Be sure all of the ``||Logic:true/false||`` statemetns say `True`.

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
})
```
## Step 3: Set up variable for C Temperature

Next, let's set up a variable to store the temperature data in Celsius.

First, choose ``||Variables:Make a Variable||`` in the `Variables` drawer and then give your variable a name (such as TempC). 

Grab a ``||variables:set||`` block and place it in the ``||basic:forever||`` loop. Grab a ``||DHT11_DHT22:read||`` block and place it in the ``||variables:set||`` block. Change the drop down to be temperature.

``` blocks
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    true,
    true
    )
    TempC = dht11_dht22.readData(dataType.temperature)
})
```

## Step 4: set up to convert C to Fahrenheit

Since we are more familar with Fahrenheit, let's convert Celsius to Fahrenheit.

First, set up and name (e.g., TempF) another variable by using the ``||variables:Make a Variable||`` button.

Next, grab a ``||variables:set||`` block for your Fahrenheit variable (TempF) and place it in the ``||basic:forever||`` block. Use the ``||math:Math||`` blocks to set up an equation for converting Celsius to Fahrenheit. Use the ``||Variables:TempC||`` block for the Celsius temperature. Check out the hint section if you aren't sure how to setup this equation.

``` blocks
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
})
```
## Step 5: Set up a high temperature value

Since plants do not like too high temperatures, let's set a high limit for the temperature, maybe 72F.

Set up another ``||Variables:variable||`` to be for the high temperature and add it to the ``||basic:on start||`` block. This time ``||variables:set||`` the value to your chosen max temperature (72 in this case).

``` blocks
let HighTemp = 72
```

## Step 6: Set up the LEDs

Now we are ready to set up the neopixels (LEDs).

Grab a ``||neopixel:set strip||`` block and place it in the ``||basic:on start||`` block.

You may need to change the `Neopixel at pin` to `P2` with 30 lights. This is the pin your strand of 30 lights should be physically connected to on your micro:bit. Check out the picture on the LEaFS website (bit.ly/LEaFS-E1) and make sure your setup looks correct!

``` blocks
let HighTemp = 72
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
```

## Step 7: Set up the conditional

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
    TempF = TempC * (9 / 5) + 32
    if (TempF > HighTemp) {
    } else {
    }
})
```

## Step 8: Set up what happens inside the conditional (orange and blue lights)

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
    TempF = TempC * (9 / 5) + 32
    if (TempF > HighTemp) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
```
## Step 9: Turn the lights on

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
    TempF = TempC * (9 / 5) + 32
    if (TempF > 72) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
})
```

## Step 10: Download your program

Now you're ready to download your code! Press the ``|Download|`` button to save the code to your computer.

