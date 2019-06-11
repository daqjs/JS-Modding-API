let clicks = 0
JSEngine.setInterval(function() {clicks = 0}, 1000)
Events.on('MOUSE_PRESS', function (ref) {
    if (ref.value == 0) {
        clicks++;
    }
}, EventPriority.NORMAL)
Events.on('GUI_DRAW', function() {
    Draw.drawString('CPS: ' + clicks, 4, 13, 0xffffffff)
}, EventPriority.NORMAL)
