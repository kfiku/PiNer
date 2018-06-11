const getWindowScreen = require('./getWindowScreen')

// #region
const window1 = {
  id: '0x07000019',
  title: 'resize.sh - piNer - Visual Studio Code',
  width: 2560,
  height: 1416,
  x: 5120,
  y: 48
}

const screens = [{
  port: 'DP-2',
  width: 2560, height: 1440,
  x: 0, y: 0
},
{
  port: 'DP-4',
  width: 2560, height: 1440,
  x: 2560, y: 0
},
{
  port: 'DP-0',
  width: 2560, height: 1440,
  x: 5120, y: 0
}]
// #endregion

describe('getWindowScreen should work fine', () => {
  it('simple', () => {
    const result = getWindowScreen(window1, screens)
    expect(result).toEqual({
      port: 'DP-0',
      width: 2560, height: 1440,
      x: 5120, y: 0
    })
  })
})
