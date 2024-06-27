input.onButtonPressed(Button.A, function () {
    modules.ledStrip1.setAll(0x00ff00)
})
input.onButtonPressed(Button.B, function () {
    modules.ledStrip1.setAll(0x000000)
})
modules.ledStrip1.configure(20, jacdac.LedStripLightType.WS2812B_GRB)
modules.ledStrip1.setBrightness(10)
