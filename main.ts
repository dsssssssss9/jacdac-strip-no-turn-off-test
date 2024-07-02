input.onButtonPressed(Button.A, function () {
    modules.ledStrip1.setAll(0x00ff00)
})
input.onButtonPressed(Button.AB, function () {
    modules.ledStrip1.setPixel(6, 0xff0000)
})
input.onButtonPressed(Button.B, function () {
    modules.ledStrip1.setAll(0x000000)
})
basic.showIcon(IconNames.Heart)
modules.ledStrip1.configure(12, jacdac.LedStripLightType.WS2812B_GRB)
modules.ledStrip1.setBrightness(10)
basic.pause(500)
modules.ledStrip1.setAll(0x000000)
