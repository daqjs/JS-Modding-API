let clicks = 0
let clickss = 0
JSEngine.setInterval(function() {clickss = clicks = 0}, 1000)
Events.on('MOUSE_PRESS', function(ref) {
    if (ref.value == 0) {
        clickss++;
    } else if (ref.value == 1) {
        clicks++;
    }
}, EventPriority.NORMAL)

Events.on('GUI_DRAW', function(resolution) {
    const width = resolution.getWidthScaled()
    const height = resolution.getHeightScaled()
    Draw.drawRect(width - 50, height - 81, width - 30, height - 101, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_W) ? 'a' : 'c').concat('W'), width - 43, height - 93, 0)

    Draw.drawRect(width - 50, height - 56, width - 30, height - 76, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_S) ? 'a' : 'c').concat('S'), width - 43, height - 69, 0)

    Draw.drawRect(width - 75, height - 56, width - 55, height - 76, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_A) ? 'a' : 'c').concat('A'), width - 68, height - 69, 0)

    Draw.drawRect(width - 25, height - 56, width - 5, height - 76, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_D) ? 'a' : 'c').concat('D'), width - 18, height - 69, 0)

    Draw.drawRect(width - 75, height - 31, width - 5, height - 51, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_SPACE) ? 'a' : 'c').concat('SPACE'), width - 54, height - 44, 0)

    Draw.drawRect(width - 28, height - 79, width - 3, height - 102, 0xCC000000)
    Draw.drawString ('§'.concat(Mouse.isButtonDown(1) ? 'a' : 'c').concat(clicks === 0 ? 'RMB' : clicks) , width - (clicks == 0 ? 24:19), height - 94, 0)
    
    Draw.drawRect(width - 77, height - 79, width - 52, height - 102, 0xCC000000)
    Draw.drawString ('§'.concat(Mouse.isButtonDown(0) ? 'a' : 'c').concat(clickss === 0 ? 'LMB' : clickss), width - (clickss == 0 ? 73:68), height - 94, 0)
}, EventPriority.NORMAL)
