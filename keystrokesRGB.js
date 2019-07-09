(function () {
    let clicks = 0
    let clickss = 0
    JSEngine.setInterval(function () { clickss = clicks = 0 }, 1000)
    Events.on('MOUSE_PRESS', function (ref) {
        if (ref.value == 0) {
            clickss++;
        } else if (ref.value == 1) {
            clicks++;
        }
    }, EventPriority.NORMAL)

    const colors = []
    // Да да, можно это делать самому, но мне лень
    for (var r = 0; r < 100; r++) colors.push(JSEngine.colorFromInts(r * 255 / 100, 255, 0).darker().getRGB());
    for (var g = 100; g > 0; g--) colors.push(JSEngine.colorFromInts(255, g * 255 / 100, 0).darker().getRGB());
    for (var b = 0; b < 100; b++) colors.push(JSEngine.colorFromInts(255, 0, b * 255 / 100).darker().getRGB());
    for (var r = 100; r > 0; r--) colors.push(JSEngine.colorFromInts(r * 255 / 100, 0, 255).darker().getRGB());
    for (var g = 0; g < 100; g++) colors.push(JSEngine.colorFromInts(0, g * 255 / 100, 255).darker().getRGB());
    for (var b = 100; b > 0; b--) colors.push(JSEngine.colorFromInts(0, 255, b * 255 / 100).darker().getRGB());
    colors.push(JSEngine.colorFromInts(0, 255, 0).darker().getRGB());
    let index = 0

    Events.on('GUI_DRAW', function (resolution) {
        let nextPos = index++
        if (nextPos >= colors.length) {
            nextPos = index = 0
        }
        const color = colors[nextPos]
        const width = resolution.getWidthScaled()
        const height = resolution.getHeightScaled()
        let pressed = Keyboard.isKeyDown(Keyboard.KEY_W)
        Draw.drawRect(width - 50, height - 105, width - 30, height - 125, 0xCC000000);
        Draw.drawString('W', width - 43, height - 118, Keyboard.isKeyDown(Keyboard.KEY_W) ? 0xFF404040 : color)

        Draw.drawRect(width - 50, height - 80, width - 30, height - 100, 0xCC000000)
        Draw.drawString('S', width - 43, height - 93, Keyboard.isKeyDown(Keyboard.KEY_S) ? 0xFF404040 : color)

        Draw.drawRect(width - 75, height - 80, width - 55, height - 100, 0xCC000000)
        Draw.drawString('A', width - 68, height - 93, Keyboard.isKeyDown(Keyboard.KEY_A) ? 0xFF404040 : color)

        Draw.drawRect(width - 25, height - 80, width - 5, height - 100, 0xCC000000)
        Draw.drawString('D', width - 18, height - 93, Keyboard.isKeyDown(Keyboard.KEY_D) ? 0xFF404040 : color)

        Draw.drawRect(width - 75, height - 55, width - 5, height - 75, 0xCC000000)
        Draw.drawString('SPACE', width - 54, height - 69, Keyboard.isKeyDown(Keyboard.KEY_SPACE) ? 0xFF404040 : color)

        Draw.drawRect(width - 37, height - 30, width - 5, height - 52, 0xCC000000)
        Draw.drawString(clicks === 0 ? 'RMB' : clicks, width - (clicks === 0 ? 30 : 23), height - 45, Mouse.isButtonDown(1) ? 0xFF404040 : color)

        Draw.drawRect(width - 75, height - 30, width - 42, height - 52, 0xCC000000)
        Draw.drawString(clickss === 0 ? 'LMB' : clickss, width - (clickss === 0 ? 68 : 62), height - 45, Mouse.isButtonDown(0) ? 0xFF404040 : color)
    }, EventPriority.NORMAL)
})()