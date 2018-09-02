const { globalShortcut } = require('electron')
const ioHook = require('iohook')

const getScreens = require('./helpers/getScreens')
const getCurrentWindow = require("./helpers/getCurrentWindow");
const getNextDimensions = require('./helpers/getNextDimensions')
const setWindowDimensions = require('./helpers/setWindowDimensions')

let screens

module.exports = function init() {
  screens = getScreens();

  ioHook.on('keyup', event => {
    const { altKey, ctrlKey, metaKey, keycode } = event;
    if (altKey && ctrlKey && metaKey) {
      // console.log(keycode);
      switch (keycode) {
        case 72: // NUM8
        case 57416: // KEY-UP
          up()
          return

        case 73: // NUM9
          upRight()
          return

        case 77: // NUM6
        case 57421: // KEY-LEFT
          right()
          return

        case 81: // NUM3
          downRight()
          return

        case 80: // NUM2
        case 57424: // KEY-DOWN
          down()
          return

        case 79: // NUM1
          downLeft()
          return

        case 75: // NUM4
        case 57419: // KEY-RIGHT
          left()
          return

        case 71: // NUM7
          upLeft()
          return


        case 76: // NUM5
        case 50: // m
          max()
          return

        case 78: // NUM+
        case 13: // +
          plusSize()
          return

        case 74: // NUM-
        case 12: // -
          minusSize()
          return

        default:
          return
      }
    }
  });

  ioHook.start();
}

function left() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'left');
  setWindowDimensions(win, nextDimensions);
}

function right() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'right');
  setWindowDimensions(win, nextDimensions);
}

function up() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'up');
  setWindowDimensions(win, nextDimensions);
}

function down() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'down');
  setWindowDimensions(win, nextDimensions);
}

function upRight() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'upRight');
  setWindowDimensions(win, nextDimensions);
}

function upLeft() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'upLeft');
  setWindowDimensions(win, nextDimensions);
}

function downRight() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'downRight');
  setWindowDimensions(win, nextDimensions);
}

function downLeft() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'downLeft');
  setWindowDimensions(win, nextDimensions);
}

function plusSize() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, '+');
  setWindowDimensions(win, nextDimensions);
}

function minusSize() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, '-');
  setWindowDimensions(win, nextDimensions);
}

function max() {
  const win = getCurrentWindow();
  const nextDimensions = getNextDimensions(win, screens, 'max');
  setWindowDimensions(win, nextDimensions);
}
