const wdio = require("webdriverio");



// javascript
const opts = {
  // hostname: '175.126.172.231',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: 'R3CM80YMLGT'
  }
};

async function main() {
  const client = await wdio.remote(opts);

  const BASIC_CLICK = [460, 900]
  const LEVELUP_CLICK = [870, 1600]


  while (1) {
    try {
      await client.touchAction([
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },
        { action: 'tap', x: BASIC_CLICK[0], y: BASIC_CLICK[1] },])
    } catch (error) {
      console.log(error)
    }
  }


  await client.deleteSession();
}

main();
