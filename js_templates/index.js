import finalView from "./leftView.js"
// import darkMode from "../js/darkMode.js"

document.getElementById("left-view").innerHTML = finalView;

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);

// var dark = document.createElement('script');
// dark.src = "../js/darkMode.js"
// document.body.append(dark);
