const ioHook = require('iohook')

module.exports = function init(updateSize) {
  ioHook.on('keyup', event => {
    const { altKey, ctrlKey, metaKey, keycode } = event;
    if (altKey && ctrlKey && metaKey) {
      // console.log(keycode);
      switch (keycode) {
        case 72: // NUM8
        case 57416: // KEY-UP
          updateSize('up')
          return

        case 73: // NUM9
          updateSize('upRight')
          return

        case 77: // NUM6
        case 57421: // KEY-LEFT
          updateSize('right')
          return

        case 81: // NUM3
          updateSize('downRight')
          return

        case 80: // NUM2
        case 57424: // KEY-DOWN
          updateSize('down')
          return

        case 79: // NUM1
          updateSize('downLeft')
          return

        case 75: // NUM4
        case 57419: // KEY-RIGHT
          updateSize('left')
          return

        case 71: // NUM7
          updateSize('upLeft')
          return


        case 76: // NUM5
        case 50: // m
          updateSize('max')
          return

        case 78: // NUM+
        case 13: // +
          updateSize('+')
          return

        case 74: // NUM-
        case 12: // -
          updateSize('-')
          return

        default:
          return
      }
    }
  });

  ioHook.start();
}
