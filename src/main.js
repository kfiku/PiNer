const { app, Tray, Menu, globalShortcut } = require('electron')
const path = require('path')

const shorcuts = require('./shorcuts')
const assetsDirectory = path.join(__dirname, 'assets')
let mainWindow
let tray

function createTray() {
  tray = new Tray(path.join(assetsDirectory, 'logo.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'CtrlOrCmd+super+alt+left : pin to left' },
    { label: 'CtrlOrCmd+super+alt+right : pin to right' },
    { label: 'CtrlOrCmd+super+alt+up : pin to top' },
    { label: 'CtrlOrCmd+super+alt+down : pin to bottom' },
    { label: 'CtrlOrCmd+super+alt+m : maximize window' },
    { label: 'CtrlOrCmd+super+alt+= : increase the width' },
    { label: 'CtrlOrCmd+super+alt+- : decrease the width' },
    { label: 'Close application', click: () => app.quit() }
  ])
  tray.setToolTip('PiNer resizes your windows `Blazing Fast`')
  tray.setContextMenu(contextMenu)

  shorcuts();
}

function createWindow() {
  mainWindow.loadFile(__dirname + '/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.hide()
}

// const toggleWindow = () => {
//   if (mainWindow.isVisible()) {
//     mainWindow.hide()
//   } else {
//     showWindow()
//   }
// }

// const getWindowPosition = () => {
//   const windowBounds = mainWindow.getBounds()
//   const trayBounds = tray.getBounds()
//   console.log(trayBounds);
//   // Center window horizontally below the tray icon
//   const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

//   // Position window 4 pixels vertically below the tray icon
//   const y = Math.round(trayBounds.y + trayBounds.height + 4)

//   return { x: x, y: y }
// }


// const showWindow = () => {
//   // const position = getWindowPosition()
//   // mainWindow.setPosition(position.x, position.y, false)
//   // mainWindow.show()
//   // mainWindow.focus()
// }


app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

app.on('ready', () => {
  createTray()
  // createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    // createWindow()
  }
})
