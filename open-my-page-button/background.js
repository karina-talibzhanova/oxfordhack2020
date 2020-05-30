/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "/my-page.html"
   });
   browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes
});
}

const delayInMinutes = 0.2;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes
});
console.log("Alarm Created");

/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.alarms.onAlarm.addListener(openMyPage); 
