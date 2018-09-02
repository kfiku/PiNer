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
