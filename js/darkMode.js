document.querySelector(".template").classList.toggle("darkright_view")
document.querySelector(".left-view").classList.toggle("darkModeleftview")
document.querySelector(".active").classList.toggle("darkActive")
document.querySelector(".circle__content").classList.toggle("darkcircle__content")
document.querySelector(".backgroundCircle").classList.toggle("darkbackgroundCircle")
document.querySelector(".box").classList.toggle("darkbox");
document.querySelector(".right-view").classList.toggle("darkright_view");
document.querySelector(".buttonsArea__box").classList.toggle("darkbuttonsArea__box")
document.body.style.background = "#151515";


document.querySelectorAll(".on").forEach(element => {
    element.classList.toggle("darkActive")
})

document.querySelectorAll(".pomodoro__count").forEach(element => {
    element.classList.toggle("darkbackgroundCircle")
})

document.querySelectorAll(".background__button").forEach(element =>{
    element.classList.toggle("darkbackground__button")
})

document.querySelectorAll(".step").forEach(element =>{
    element.classList.toggle("darkbox")
})