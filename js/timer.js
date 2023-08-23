// ************ | Variables & Functions Declaration | ************
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const pomodoroArray = [...document.querySelectorAll(".n__pomodoro")];
//const minutesTimer = [1500000, 300000]
const minutesTimer = [3000, 18000]

var timerStatus = false;
var switchTime = true;
let timerInterval;

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

  document.querySelector(".circle__content").classList.toggle("relax");
  document.querySelector(".left-view").classList.toggle("relax-shadow");
  document.querySelector(".box").classList.toggle("relax-shadow");
  document.querySelector(".box__todo").classList.toggle("relax-shadow");
  document.querySelectorAll(".n__pomodoro").forEach(element=>{
    element.classList.toggle("relax-pomodoro")
  });
  document.querySelectorAll(".step").forEach(element=>{
    element.classList.toggle("relax-shadow");
  });
  document.querySelectorAll(".darkbackgroundCircle").forEach(element=>{
    element.classList.toggle("relax-shadow")
  })
  document.querySelectorAll(".background__button").forEach(element=>{
    element.classList.toggle("relax")
  })
  
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
  return String(-current_porcent+100) + "%"
};

var activePomodoroIndex = 0;
var digitalClock = new Audio("../gallery/Digital_clock_sounds.mp3")
var relaxSounds = new Audio("../gallery/Relaxing_sound.mp3")
function startTimer(time) {
  timerInterval = setInterval(() => {
    if (timerStatus) {
      let minute = Math.floor(time / (1000 * 60));
      let second = Math.floor((time % (1000 * 60)) / 1000);
      timerDisplay.innerHTML = outputFormatted(minute) + ":" + outputFormatted(second);

      if (time === -1000){
        if(!switchTime){
          switchTime = !switchTime // Change mode value
          if(activePomodoroIndex < 4){
            var activePomodoro = document.querySelector(".active")
            if(activePomodoro){
              activePomodoroIndex = pomodoroArray.findIndex(
                (element) => element === activePomodoro
              );
              pomodoroArray[activePomodoroIndex].classList.toggle("active")
              pomodoroArray[activePomodoroIndex].classList.toggle("on")
              activePomodoroIndex++
              if (activePomodoroIndex <= 4){
                pomodoroArray[activePomodoroIndex].classList.toggle("active")
              }else{
                clearInterval(timerInterval)
                timerStatus = false
                startTimer(minutesTimer[0])
              };
            };
            resetTimer();
          }else{
            pomodoroArray.forEach(pomodoro=>{
              pomodoro.classList.remove("on")
              pomodoro.classList.remove("active")
            })

            pomodoroArray[0].classList.add("active")
            activePomodoroIndex = 0;
            clearInterval(timerInterval)
            timerStatus = false
            timerDisplay.innerHTML = outputFormatted(25)+":"+outputFormatted(0)
            startTimer(minutesTimer[0])
          } //Work mode
        }else{
          switchTime = !switchTime
          digitalClock.volume = 0.08
          digitalClock.play();
          resetTimer() // Change mode value / Relax mode
        }
      }

      if (switchTime && activePomodoroIndex < 5){
        document.querySelector(".active").style.opacity = porcent(time, minutesTimer[0]);
      }

      time -= 1000;
      if (time == 14000 && !switchTime){
        relaxSounds.volume = 0.09
        relaxSounds.play()
      }
    
    }
  }, 1000);
}

startTimer(minutesTimer[0]);