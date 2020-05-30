// alert(document.getElementById("span"));

// This works for MDN
// var elem = document.getElementsByClassName("highlight-span")[0];
// elem.lastChild.data = "Sup nerds";
//
// var elem = document.getElementsByClassName("firstHeading")[0];
// elem.firstChild.data = "Facebook is really fun";
//
// var i;
// for (i = 0; i < document.getElementsByClassName("mw-headline").length; i++) {
//   var elem = document.getElementsByClassName("mw-headline")[i];
//   elem.firstChild.data = "Facebook is really fun";
// }

// var elem = document.getElementsByTagName("body")[0];
// elem.style["background-color"] = "blue";
// alert(window.location.href);
if (window.location.href.startsWith("https://en.wikipedia.org"))
  for (let j = 0; j < document.getElementsByTagName("*").length; j++) {
    var elem = document.getElementsByTagName("*")[j];
    elem.style["background-color"] =
      "rgb(" +
      String(Math.floor(Math.random() * 255)) +
      "," +
      String(Math.floor(Math.random() * 255)) +
      "," +
      String(Math.floor(Math.random() * 255)) +
      ")";
    console.log(elem);
  }
// var elem = document.getElementsByClassName("mw-parser-output")[0];
// elem.style["background-color"] = "orange";
// for (item in document.getElementsByClassName("mw-headline")) {
//   item.firstChild.data = "Facebook";
// }
