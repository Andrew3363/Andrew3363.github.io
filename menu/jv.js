function append(url) {
  var nw = window.open();
  var source = url;
  var page = document.createElement('iframe');
  page.width = window.innerWidth;
  page.height = window.innerHeight;
  page.src = source;
  nw.document.body.appendChild(page);
}
var i = 1;
function openMenu() {
  if (i === 1) {
    function wb(text, url) {
      var b = document.createElement("BUTTON");
      var t = document.createTextNode(text);
      b.appendChild(t);
      b.onclick = function(){window.open(url);}
      b.title = "Mark wants an ICBM";
      document.body.appendChild(b);
      b.className = "buton button3";
    }
    wb("rsm", "http://homework.russianschool.com");
    wb("wulfram", "https://www.wolframalpha.com");
    wb("repl", "https://repl.it");
    wb("spootify", "https://open.spotify.com");
    wb("xkcd", "https://www.xkcd.com");
    i = 2;
  }
}

function url(){
  var browserFrame = document.getElementById("frame");
  browserFrame.src = "h ";
}