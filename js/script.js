
var jsver = "1.0";

$(document).ready(function() {
  console.log("script version: " + jsver);
  /*if(window.screen.availWidth < 1200){
    var body = document.getElementsByTagName("body");
    body[0].style.width = window.screen.availWidth + "px";
  }*/
})

function menuaction(){
  var nav = document.getElementById("navbar");
  if(nav.className === "") {
    nav.className = "hide";
    console.log("close nav");
  } else {
    nav.className= "";
    console.log("open nav");
  }
}

$(".slides").responsiveSlides({
  speed:2000,
  timeout:5000,
  pause:false,
  random:false,
});

$(".ownslide").responsiveSlides({
  speed: 2000,
  timeout: 5000,
  pause: false,
  random: false,
});
