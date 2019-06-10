const directoryDateFormat = new DateFormat('yyyy-MM-dd')
const fileDateFormat = new DateFormat('HH-mm-ss')

Events.on('SCREENSHOT_PATH', function (ref) {
    const time = Application.currentTimeMillis()
    ref.value = ref.value.resolve(directoryDateFormat.format(time))
        .resolve(fileDateFormat.format(time).concat('.png'))
}, EventPriority.NORMAL)