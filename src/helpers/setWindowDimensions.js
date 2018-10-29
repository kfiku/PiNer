const { execSync } = require('child_process');
const getCurrentWindow = require("./getCurrentWindow");

/**
 * @param {*} window
 * @param {*} dimensions
 */
function setWindowDimensions(window, dimensions) {
  if (!window || !dimensions) {
    return
  }
  const { id } = window
  const { x, y, width, height, vertical, horizontal } = dimensions
  console.log('# WMCTRL', `${id} ${x} ${y} ${width}x${height}`)

  if (!vertical) {
    execSync(`wmctrl -ir ${id} -b remove,maximized_vert`)
  }
  if (!horizontal) {
    execSync(`wmctrl -ir ${id} -b remove,maximized_horz`)
  }
  // execSync(`wmctrl -ir ${id} -b remove,maximized_vert,maximized_horz`)
  const cmd = `wmctrl -ir ${id} -e 0,${x},${y},${width},${height}`
  execSync(cmd)

  setTimeout(() => {
    const updatedWin = getCurrentWindow();

    const xDif = updatedWin.x - x
    const yDif = updatedWin.y - y
    // const newX = updatedWin.x
    // const newY = updatedWin.y
    const newWidth = width - xDif
    const newHeight = height - yDif

    const updatedCmd = `wmctrl -ir ${id} -e 0,${x},${y},${newWidth},${newHeight}`
    // console.log('# WMCTRL update', `${id} ${x} ${y} ${newWidth}x${newHeight}`)
    execSync(updatedCmd)

    if (vertical) {
      execSync(`wmctrl -ir ${id} -b add,maximized_vert`)
    }

    if (horizontal) {
      execSync(`wmctrl -ir ${id} -b add,maximized_horz`)
    }
  }, 20);
}

module.exports = setWindowDimensions;
