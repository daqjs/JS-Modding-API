let clicks = 0
JSEngine.setInterval(function() {clicks = 1}, 1000)
Events.on('MOUSE_PRESS', function(ref) {
    if (ref.value == 1) {
        clicks++;
    }
}, EventPriority.NORMAL)

let clickss = 0
JSEngine.setInterval(function() {clickss = 0}, 1000)
Events.on('MOUSE_PRESS', function(ref) {
    if (ref.value == 0) {
        clickss++;
    }
}, EventPriority.NORMAL)

Events.on('GUI_DRAW', function(resolution) {
    const width = resolution.getWidthScaled()
    const height = resolution.getHeightScaled()
    Draw.drawRect(width - 50, height - 105, width - 30, height - 125, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_W) ? 'a' : 'c').concat('W'), width - 43, height - 118, 0)

    Draw.drawRect(width - 50, height - 80, width - 30, height - 100, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_S) ? 'a' : 'c').concat('A'), width - 43, height - 93, 0)

    Draw.drawRect(width - 75, height - 80, width - 55, height - 100, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_A) ? 'a' : 'c').concat('S'), width - 68, height - 93, 0)

    Draw.drawRect(width - 25, height - 80, width - 5, height - 100, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_D) ? 'a' : 'c').concat('D'), width - 18, height - 93, 0)

    Draw.drawRect(width - 75, height - 55, width - 5, height - 75, 0xCC000000)
    Draw.drawString('§'.concat(Keyboard.isKeyDown(Keyboard.KEY_SPACE) ? 'a' : 'c').concat('SPACE'), width - 54, height - 67, 0)

    Draw.drawRect(width - 37, height - 30, width - 5, height - 52, 0xCC000000)
    Draw.drawString ('§'.concat(Mouse.isButtonDown(1) ? 'a' : 'c').concat(clicks === 1 ? 'RMB' : clicks) , width - 30, height - 45, 0)
    
    Draw.drawRect(width - 75, height - 30, width - 42, height - 52, 0xCC000000)
    Draw.drawString ('§'.concat(Mouse.isButtonDown(0) ? 'a' : 'c').concat(clickss === 0 ? 'LMB' : clickss) , width - 68, height - 45, 0)
}, EventPriority.NORMAL)
