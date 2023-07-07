import finalView from "./leftView.js"

document.getElementById("left-view").innerHTML = finalView;

var pomodoroArray = [...document.getElementsByClassName("pomodoro__count")];

pomodoroArray.forEach(pomodoro => {
    pomodoro.addEventListener("click", () => {
        if (pomodoro.classList.contains("on")){
            pomodoro.classList.remove("on")
            pomodoro.classList.add("off")
        }else{
            pomodoro.classList.remove("off")
            pomodoro.classList.add("on")
        }
    })
});

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);