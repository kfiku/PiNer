const getCurrentWindow = require('./getCurrentWindow')

// #region
const currentWindow1 = `0x07000019  0 11187  5120 48   2560 1416 DEV-006-GK-LIN resize.sh - piNer - Visual Studio Code`
// #endregion

describe('getCurrentWindow should work fine', () => {
  it('simple', () => {
    const result = getCurrentWindow(currentWindow1)
    expect(result).toEqual({
      id: '0x07000019',
      title: 'resize.sh - piNer - Visual Studio Code',
      width: 2560,
      height: 1416,
      x: 5120,
      y: 48
    })
  })
})
