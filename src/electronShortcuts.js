const { globalShortcut } = require('electron')

module.exports = function init(updateSize) {
  globalShortcut.register('CommandOrControl+Super+Alt+Up', () => {
    updateSize('up')
  })
  globalShortcut.register('CommandOrControl+Super+Alt+Right', () => {
    updateSize('right')
  })
  globalShortcut.register('CommandOrControl+Super+Alt+Down', () => {
    updateSize('down')
  })
  globalShortcut.register('CommandOrControl+Super+Alt+Left', () => {
    updateSize('left')
  })

  globalShortcut.register('CommandOrControl+Super+Alt+m', () => {
    updateSize('max')
  })
  globalShortcut.register('CommandOrControl+Super+Alt+=', () => {
    updateSize('+')
  })
  globalShortcut.register('CommandOrControl+Super+Alt+-', () => {
    updateSize('-')
  })

  // case 76: // NUM5
  // case 50: // m
  //   updateSize('max')
  //   return

  // case 78: // NUM+
  // case 13: // +
  //   updateSize('+')
  //   return

  // case 74: // NUM-
  // case 12: // -
  //   updateSize('-')
  //   return

}
