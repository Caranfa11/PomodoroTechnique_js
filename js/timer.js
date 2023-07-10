// ************ | Variables & Functions Declaration | ************
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const minutesTimer= [4000, 2000]
var timerStatus = false;
var switchTime = true;
let timerInterval;
var pomodoroArray = [...document.querySelectorAll(".pomodoro__count")];

pomodoroArray.forEach(pomodoro => {
    pomodoro.addEventListener("click", () => {
            pomodoro.classList.toggle("on")
            pomodoro.classList.toggle("off")
    })
});

const outputFormatted = (number) => String(number).padStart(2, "0");

const pauseTimer = () => {
  timerStatus = true;
  playBtn.classList.toggle("hide");
  pauseBtn.classList.toggle("hide");
};

const playTimer = () => {
  timerStatus = false;
  playBtn.classList.toggle("hide");
  pauseBtn.classList.toggle("hide");
};

const resetTimer = () => {
  let timeOnDisplay;
  timerStatus = false;
  playBtn.classList.toggle("hide");
  pauseBtn.classList.toggle("hide");
  clearInterval(timerInterval);
  if (switchTime){
    timeOnDisplay = minutesTimer[0];
  }else{
    timeOnDisplay = minutesTimer[1];
  }
  timerDisplay.innerHTML = outputFormatted(Math.floor(timeOnDisplay/ (1000 * 60))) + ":" + outputFormatted(Math.floor((timeOnDisplay% (1000 * 60)) / 1000));
  timerStatus = true
  startTimer(timeOnDisplay)
};

playBtn.addEventListener("click", pauseTimer);
pauseBtn.addEventListener("click", playTimer);
resetBtn.addEventListener("click", resetTimer);

// ************ | Main Functions | ************

const porcent = (current_time, full_time) => {
  let current_porcent = (current_time*100)/full_time
  return current_porcent
};

let finishedPomodoro = 0;
function startTimer(time) {
  timerInterval = setInterval(() => {
    if (timerStatus) {
      let minute = Math.floor(time / (1000 * 60));
      let second = Math.floor((time % (1000 * 60)) / 1000);
      timerDisplay.innerHTML = outputFormatted(minute) + ":" + outputFormatted(second);
      if (time === -1000){
        if(!switchTime){
          switchTime = !switchTime // Change mode value
          finishedPomodoro += 1
          resetTimer(); //Work mode
        }
        else{
          switchTime = !switchTime
          resetTimer() // Change mode value / Relax mode
        }
      }
      time -= 1000;
    }
  }, 1000);
}

startTimer(minutesTimer[0]);