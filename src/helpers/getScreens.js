const { execSync } = require('child_process');

function getScreens(xrandrString) {
  if (!xrandrString) {
    xrandrString = execSync('xrandr').toString();
  }

  const screens = xrandrString.split('\n')
    .filter(s => s) // remove empty lines
    .filter(s => s.indexOf(' connected ') > 0) // remove disconnected screens and other trash
    .map(s => {
      const portMatched = s.match(/^[a-zA-Z-0-9]+/)
      const dimensionsMatched = s.match(/[\0-9]+x[0-9]+\+[0-9]+\+[0-9]+/)

      if (!portMatched || !dimensionsMatched) {
        return undefined
      }

      const port = portMatched[0]
      const dimensions = dimensionsMatched[0]
      const dimensionsSplit = dimensions.split('+')
      const resolutionArray = dimensionsSplit[0].split('x').map(res => Number(res))
      const resolution = { width: resolutionArray[0], height: resolutionArray[1] }
      const position = { x: Number(dimensionsSplit[1]), y: Number(dimensionsSplit[2]) }

      return {
        port,
        ...resolution,
        ...position
      }
    })
    .filter(s => s) // remove empty records
    .sort((a, b) => a.x > b.x) // remove empty records

  return screens.map((s, id) => {
    if (id === 0) {
      s.first = true
    }
    if (id === screens.length - 1) {
      s.last = true
    }

    return s
  });
}

module.exports = getScreens
