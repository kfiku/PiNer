const { execSync } = require('child_process');

function getCurrentWindow(currentWindowString) {
  if (!currentWindowString) {
    const cmdXprop = `xprop -root | grep _NET_ACTIVE_WINDOW | head -1 | awk '{ print $5 }' | sed 's/,//' | sed 's/^0x/0x0/'`;
    const currentWindowId = execSync(cmdXprop).toString().split('\n')[0];
    const cmdWmctrl = `wmctrl -lGp`;
    const allWindows = execSync(cmdWmctrl).toString().split('\n')
      .filter(s => s);

    currentWindowString = allWindows.find(w => w.indexOf(currentWindowId) > -1);
  }

  const split = currentWindowString.split(/ +/)
  const id = split[0]
  const x = Number(split[3])
  const y = Number(split[4])
  const width = Number(split[5])
  const height = Number(split[6])
  const title = split.splice(8).join(' ')

  const currentWindow = {
    id, x, y, width, height, title
  }

  return currentWindow;
}

module.exports = getCurrentWindow;
