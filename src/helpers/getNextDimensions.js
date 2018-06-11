const getWindowScreen = require("./getWindowScreen");

function getNextScreen(screen, screens, direction = 1) {
  const screenId = screens.reduce((acc, current, id) => current.port === screen.port ? id + direction: acc, -1)
  return screens[screenId] ? screens[screenId] : screen
}

function isWindowInRightCorner(window, screen) {
  const diff = (window.x + window.width) - (screen.x + screen.width)
  const isCorner = Math.abs(diff) < 3
  return isCorner
}

function isWindowInLeftCorner(window, screen) {
  const diff = window.x - screen.x
  const diffW = window.width - screen.width
  const isCorner = Math.abs(diff) < 3 && Math.abs(diffW) > 10
  return isCorner
}

function getNextDimensions(window, screens, direction) {
  let winScreen = getWindowScreen(window, screens)

  switch (direction) {
    case 'right':
      if (!winScreen.last && isWindowInRightCorner(window, winScreen)) {
        winScreen = getNextScreen(winScreen, screens)
        direction = 'left'
      }
      break;
    case 'left':
      if (!winScreen.first && isWindowInLeftCorner(window, winScreen)) {
        winScreen = getNextScreen(winScreen, screens, -1)
        direction = 'right'
      }
      break;

    default:
      break;
  }

  const sizeToAdd = 100
  const widthFixer = 2
  const heightFixer = 0

  switch (direction) {
    case '+':
      if (isWindowInRightCorner(window, winScreen)) {
        return next = {
          x: window.x - sizeToAdd,
          y: winScreen.y,
          width: window.width + sizeToAdd,
          height: winScreen.height - heightFixer,
          vertical: true
        }
      }
      if (isWindowInLeftCorner(window, winScreen)) {
        return next = {
          x: winScreen.x,
          y: winScreen.y,
          width: window.width + sizeToAdd,
          height: winScreen.height - heightFixer,
          vertical: true
        }
      }
      break;

    case '-':
      if (isWindowInRightCorner(window, winScreen)) {
        return next = {
          x: window.x + sizeToAdd,
          y: winScreen.y,
          width: window.width - sizeToAdd,
          height: winScreen.height - heightFixer,
          vertical: true
        }
      }
      if (isWindowInLeftCorner(window, winScreen)) {
        return next = {
          x: winScreen.x,
          y: winScreen.y,
          width: window.width - sizeToAdd,
          height: winScreen.height - heightFixer,
          vertical: true
        }
      }
      break;

    case 'left':
      return next = {
        x: winScreen.x,
        y: winScreen.y,
        width: winScreen.width / 2 - widthFixer,
        height: winScreen.height - heightFixer,
        vertical: true
      }
    case 'right':
      return next = {
        x: winScreen.x + winScreen.width / 2,
        y: winScreen.y,
        width: winScreen.width / 2 - widthFixer,
        height: winScreen.height - heightFixer,
        vertical: true
      }
    case 'up':
      return next = {
        x: winScreen.x,
        y: winScreen.y,
        width: winScreen.width - widthFixer,
        height: winScreen.height / 2 - heightFixer,
        horizontal: true
      }
    case 'down':
      return next = {
        x: winScreen.x,
        y: winScreen.y + winScreen.height / 2,
        width: winScreen.width - widthFixer,
        height: winScreen.height / 2 - heightFixer,
        horizontal: true
      }

    default:
      break;
  }

  return undefined
}

module.exports = getNextDimensions;
