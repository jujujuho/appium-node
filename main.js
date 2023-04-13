
const wdio = require("webdriverio");



const opts = {

  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: 'R3CM80YMLGT' ,
    bundleId: 'com.manababa.BeggarKing'
  }
};

async function main() {
  const client = await wdio.remote(opts);





  await client.deleteSession();
}

main();
