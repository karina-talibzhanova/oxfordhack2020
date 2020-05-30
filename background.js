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
    action_url(tabInfo.url, info.tabId);
  } catch (error) {
    console.error(error);
  }
}

// browser.tabs.onCreated.addListener(handleCreated);

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log("Tab: " + tabId + " URL changed to " + changeInfo.url);
    // if(changeInfo.url.startsWith("https://www.facebook")){
    //   browser.browserAction.setBadgeBackgroundColor({color: "green"});
    //   browser.browserAction.setBadgeText({text: "✓"});
    // url = changeInfo.url.split("/")[2].split(".")[1];
    // console.log(url);
    action_url(changeInfo.url, tabID);
  }
}

function action_url(url_init, tabID) {
  url = url_init.split("/")[2].split(".")[1];
  if (good.includes(url)) {
    browser.browserAction.setBadgeBackgroundColor({ color: "green" });
    browser.browserAction.setBadgeText({ text: "✓" });
  } else {
    browser.browserAction.setBadgeBackgroundColor({ color: "red" });
    browser.browserAction.setBadgeText({ text: "🗙" });
    // create_notification();
    // make_ugly(tabID);
    time_notification();
  }
}

function create_notification() {
  browser.notifications.create("blah", {
    type: "basic",
    title: "Uh oh!",
    message: "Someone's not procrastinating!",
  });
}

function close_tab(tabID) {
  browser.tabs.create({ url: "https://www.facebook.com" });
  browser.tabs.remove(tabID);
}

function time_notification() {
  var seconds = 60;
  browser.notifications.create("reee", {
    type: "basic",
    title: "Timer",
    message: "You have " + String(seconds) + " seconds to get back to procrastinating."
  });
  setInterval(function(){
    if (seconds <= 0) {
      clearInterval();
    } else {
      seconds -= 1;
      console.log(seconds);
      browser.browserAction.setBadgeText({ text: String(seconds) });
    }
  }, 1000);
}

// const CSS = "body { background-color: red; }";

// function make_ugly(tabID){
//   console.log("Doing things");
//  browser.tabs.insertCSS({code: CSS});
//   // document.body.style.background = "red";
// }

browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleActivated);
