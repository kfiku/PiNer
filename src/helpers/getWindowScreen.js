function getWindowScreen(window, screens) {
  const middlePoint = window.width / 2 + window.x
  const screen = screens.find(s =>
    // console.log(s.x + ' < ' + middlePoint + ' < ' + (s.x + s.width)) ||
    s.x <= middlePoint &&
    middlePoint <= (s.x + s.width)
  )

  if (!screen) {
    const lastScreen = screens[screens.length - 1]
    if (middlePoint > lastScreens.x + s.width) {
      return lastScreen
    }

    return screens[0]
  }

  return screen
}

module.exports = getWindowScreen;
