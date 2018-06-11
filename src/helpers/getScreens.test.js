const getScreens = require('./getScreens')

// #region

const xrandr = `
Screen 0: minimum 8 x 8, current 7680 x 2156, maximum 32767 x 32767
DVI-D-0 disconnected (normal left inverted right x axis y axis)
HDMI-0 disconnected (normal left inverted right x axis y axis)
DP-0 connected 2560x1440+5120+459 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-1 disconnected (normal left inverted right x axis y axis)
DP-2 connected 2560x1440+0+716 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-3 disconnected (normal left inverted right x axis y axis)
DP-4 connected 2560x1440+2560+0 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-5 disconnected (normal left inverted right x axis y axis)
`
const xrandr2 = `
Screen 0: minimum 8 x 8, current 7680 x 1440, maximum 32767 x 32767
DVI-D-0 disconnected (normal left inverted right x axis y axis)
HDMI-0 disconnected (normal left inverted right x axis y axis)
DP-0 connected 2560x1440+5120+0 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-1 disconnected (normal left inverted right x axis y axis)
DP-2 connected 2560x1440+0+0 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-3 disconnected (normal left inverted right x axis y axis)
DP-4 connected 2560x1440+2560+0 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-5 disconnected (normal left inverted right x axis y axis)
`
const xrandr3 = `
Screen 0: minimum 8 x 8, current 7680 x 2880, maximum 32767 x 32767
DVI-D-0 disconnected (normal left inverted right x axis y axis)
HDMI-0 disconnected (normal left inverted right x axis y axis)
DP-0 connected 2560x1440+5120+1440 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-1 disconnected (normal left inverted right x axis y axis)
DP-2 connected 2560x1440+0+630 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-3 disconnected (normal left inverted right x axis y axis)
DP-4 connected 2560x1440+2560+0 (normal left inverted right x axis y axis) 597mm x 336mm
   2560x1440     59.95*+
   2048x1152     60.00
   1920x1200     59.88
   1920x1080     60.00    59.94    50.00    29.97    25.00    23.97    60.05    60.00    50.04
   1680x1050     59.95
   1600x1200     60.00
   1280x1024     75.02    60.02
   1280x720      60.00    59.94    50.00
   1200x960      59.90
   1152x864      75.00
   1024x768      75.03    60.00
   800x600       75.00    60.32
   720x576       50.00
   720x480       59.94
   640x480       75.00    59.94    59.93
DP-5 disconnected (normal left inverted right x axis y axis)
`
const xrandrSimple = `
Screen 0: minimum 320 x 200, current 3200 x 1080, maximum 8192 x 8192
VGA-1 disconnected (normal left inverted right x axis y axis)
HDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 531mm x 299mm
   1920x1080     59.93 +  60.00*   50.00    59.94
   1920x1080i    60.00    50.00    59.94
   1680x1050     59.88
`
// #endregion

describe('getScreens should work fine', () => {
  it('simple', () => {
    const result = getScreens(xrandrSimple)
    expect(result).toMatchSnapshot()
  })
  it('more advanced', () => {
    const result = getScreens(xrandr)
    // console.log(result);
    expect(result).toMatchSnapshot()
  })
  it('more advanced 2', () => {
    const result = getScreens(xrandr2)
    expect(result).toMatchSnapshot()
  })
  it('more advanced 3', () => {
    const result = getScreens(xrandr3)
    // console.log(result);
    expect(result).toMatchSnapshot()
  })
})
