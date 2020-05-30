// alert(document.getElementById("span"));

// This works for MDN
// var elem = document.getElementsByClassName("highlight-span")[0];
// elem.lastChild.data = "Sup nerds";

var elem = document.getElementsByClassName("firstHeading")[0];
elem.firstChild.data = "Facebook is really fun";

var i;
for (i = 0; i < document.getElementsByClassName("mw-headline").length; i++) {
  var elem = document.getElementsByClassName("mw-headline")[i];
  elem.firstChild.data = "Facebook is really fun";
}

// for (item in document.getElementsByClassName("mw-headline")) {
//   item.firstChild.data = "Facebook";
// }
