/*
Open a new tab, and load "my-page.html" into it.
// */
// function openMyPage() {
//   console.log("injecting");
//    browser.tabs.create({
//      "url": "/my-page.html"
//    });
//    browser.alarms.create("my-periodic-alarm", {
//   delayInMinutes,
//   periodInMinutes
// });
// }
//
// const delayInMinutes = 0.2;
// const periodInMinutes = 2;
//
// browser.alarms.create("my-periodic-alarm", {
//   delayInMinutes,
//   periodInMinutes
// });
// console.log("Alarm Created");
//
// /*
// Add openMyPage() as a listener to clicks on the browser action.
// */
// browser.alarms.onAlarm.addListener(openMyPage);

good = ["facebook", "youtube"];
// function handleActivated(tabInfo) {
//   console.log(browser.tabs.get(tabInfo));
// }

async function handleActivated(info) {
  try {
    let tabInfo = await browser.tabs.get(info.tabId);
    console.log(tabInfo);
    action_url(tabInfo.url)
  } catch (error) {
    console.error(error);
  }
}

// browser.tabs.onCreated.addListener(handleCreated);


function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log("Tab: " + tabId +
                " URL changed to " + changeInfo.url);
    // if(changeInfo.url.startsWith("https://www.facebook")){
    //   browser.browserAction.setBadgeBackgroundColor({color: "green"});
    //   browser.browserAction.setBadgeText({text: "✓"});
    // url = changeInfo.url.split("/")[2].split(".")[1];
    // console.log(url);
    action_url(changeInfo.url);



    }
  }

function action_url(url_init){
  url = url_init.split("/")[2].split(".")[1];
  if (good.includes(url)) {
      browser.browserAction.setBadgeBackgroundColor({color: "green"});
      browser.browserAction.setBadgeText({text: "✓"});
  }else {
    browser.browserAction.setBadgeBackgroundColor({color: "red"});
    browser.browserAction.setBadgeText({text: "🗙"});
    browser.notifications.create("blah", {
    "type": "basic",
    "title": "Uh oh!",
    "message": "Someone's not procrastinating!"
  });
  }

}




browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleActivated);
