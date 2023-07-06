// ************ | Variables & Functions Declaration | ************
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const defaultMinutes = 1500000;
var timerStatus = false;
let timerInterval;

const outputFormatted = (number) => String(number).padStart(2, "0");

const pauseTimer = () => {
  timerStatus = true;
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
};

const playTimer = () => {
  timerStatus = false;
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
};

const resetTimer = () => {
  timerStatus = false;
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
  clearInterval(timerInterval);
  timerDisplay.innerHTML = outputFormatted(Math.floor(defaultMinutes / (1000 * 60))) + ":" + outputFormatted(Math.floor((defaultMinutes % (1000 * 60)) / 1000));
  startTimer(defaultMinutes)
};

playBtn.addEventListener("click", pauseTimer);
pauseBtn.addEventListener("click", playTimer);
resetBtn.addEventListener("click", resetTimer);


// ************ | Main Functions | ************

function startTimer(time) {
  timerInterval = setInterval(() => {
    if (timerStatus) {
      let minute = Math.floor(time / (1000 * 60));
      let second = Math.floor((time % (1000 * 60)) / 1000);
      timerDisplay.innerHTML = outputFormatted(minute) + ":" + outputFormatted(second);
      time -= 1000;

      if (time === 0){
        resetTimer();
      }
    }
  }, 1000);
}

startTimer(defaultMinutes);


const pomodorobtn = document.getElementsByClassName("pomodoro__check");

console.log(pomodorobtn);

pomodorobtn[0].addEventListener("click", () => {
  pomodorobtn.classList.remove("on")
})