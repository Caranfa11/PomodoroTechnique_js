import finalView from "./leftView.js"
import rightView from "./rightView.js"
import {changeViewMode} from "../js/darkMode.js"

document.getElementById("left-view").innerHTML = finalView;
document.getElementById("right-view").innerHTML = rightView

document.getElementById("darkMode").addEventListener("click", changeViewMode)

function load() {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode || darkmode == null || darkmode == 'false' ) {
        console.log("falsea")
        store('false');
    } else if (darkmode == 'true') {
        console.log("is true?");
        document.querySelector('body').classList.add('dark');
    }
    console.log("bitch")
}

function store(value) {
    localStorage.setItem('darkmode', value);
    console.log('Dark', localStorage.getItem('darkmode'));
}

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);

load();
// var dark = document.createElement('script');
// dark.src = "../js/darkMode.js"
// document.body.append(dark);
