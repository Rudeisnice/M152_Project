var nav = document.getElementById("nav");
var jsver = "1.0";

console.log(jsver);

function menuaction() {
  if(nav.className == "hide") {
    nav.className = "open";
  } else {
    nav.className = "hide";
  }
}
