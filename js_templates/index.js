import finalView from "./leftView.js"

document.getElementById("left-view").innerHTML = finalView;

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);