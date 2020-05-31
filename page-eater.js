if (window.location.href.startsWith("https://en.wikipedia.org")) {
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
  }
}

if (window.location.href.startsWith("https://stackoverflow.com")) {
  var index_count = document.getElementsByClassName("question-summary").length;
  var i = 0;
  var delete_elems = setInterval(function () {
    if (i >= index_count) {
      clearInterval(delete_elems);
    }

    var elem = document.getElementsByClassName("question-summary")[i];
    elem.style["opacity"] = 0;
    i += 1;
  }, 1000);
}
