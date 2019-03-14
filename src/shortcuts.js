const ioHookShortcuts = require('./ioHookShortcuts')
const electronShortcuts = require('./electronShortcuts')
const getScreens = require('./helpers/getScreens')
const getCurrentWindow = require("./helpers/getCurrentWindow");
const getNextDimensions = require('./helpers/getNextDimensions')
const setWindowDimensions = require('./helpers/setWindowDimensions')

let screens

module.exports = function init() {
  screens = getScreens();
  ioHookShortcuts(updateSize);
  // electronShortcuts(updateSize);
}

function updateSize(direction) {
  const win = getCurrentWindow();
  if (win) {
    const nextDimensions = getNextDimensions(win, screens, direction);
    setWindowDimensions(win, nextDimensions);
  }
}
