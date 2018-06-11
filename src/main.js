const { app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron')
const path = require('path')

const getCurrentWindow = require("./helpers/getCurrentWindow");
const getScreens = require('./helpers/getScreens')
const getNextDimensions = require('./helpers/getNextDimensions')
const setWindowDimensions = require('./helpers/setWindowDimensions')

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
    { label: 'CtrlOrCmd+super+alt+= : increase the width' },
    { label: 'CtrlOrCmd+super+alt+- : decrease the width' },
    { label: 'Close application', click: () => app.quit() }
  ])
  tray.setToolTip('PiNer resize your windows `Blazing Fast`')
  tray.setContextMenu(contextMenu)
  // tray.on('right-click', toggleWindow)
  // tray.on('double-click', toggleWindow)
  // tray.on('click', function (event, a, b) {
  //   toggleWindow()
  // })

  const screens = getScreens();

  globalShortcut.register('CommandOrControl+Alt+Super+Left', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, 'left');
    setWindowDimensions(win, nextDimensions);
  })

  globalShortcut.register('CommandOrControl+Alt+Super+Right', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, 'right');
    setWindowDimensions(win, nextDimensions);
  })

  globalShortcut.register('CommandOrControl+Alt+Super+Up', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, 'up');
    setWindowDimensions(win, nextDimensions);
  })

  globalShortcut.register('CommandOrControl+Alt+Super+Down', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, 'down');
    setWindowDimensions(win, nextDimensions);
  })

  // UP SIZE
  globalShortcut.register('CommandOrControl+Alt+Super+=', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, '+');
    setWindowDimensions(win, nextDimensions);
  })

  // DOWN SIZE
  globalShortcut.register('CommandOrControl+Alt+Super+-', () => {
    const win = getCurrentWindow();
    const nextDimensions = getNextDimensions(win, screens, '-');
    setWindowDimensions(win, nextDimensions);
  })


  // STATS
  globalShortcut.register('CommandOrControl+Alt+Super+s', () => {
    const win = getCurrentWindow();
    console.log(win);
  })
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
