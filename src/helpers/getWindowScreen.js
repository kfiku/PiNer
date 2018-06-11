function getWindowScreen(window, screens) {
  const middlePoint = window.width / 2 + window.x
  return screens.find(s =>
    // console.log(s.x + ' < ' + middlePoint + ' < ' + (s.x + s.width)) ||
    s.x < middlePoint &&
    middlePoint < s.x + s.width
  )
}

module.exports = getWindowScreen;
