const changeViewMode = (dark) => {
    document.querySelector(".template").classList.toggle("darkright_view")
    document.querySelector(".left-view").classList.toggle("darkModeleftview")
    document.querySelector(".active").classList.toggle("darkActive")
    document.querySelector(".circle__content").classList.toggle("darkcircle__content")
    document.querySelector(".backgroundCircle").classList.toggle("darkbackgroundCircle")
    // document.querySelector(".box").classList.toggle("darkbox");
    document.querySelector(".right-view").classList.toggle("darkright_view");
    document.querySelector(".buttonsArea__box").classList.toggle("darkbuttonsArea__box")
    document.querySelector(".buttons__content").classList.toggle("darkbuttons__content")
    document.querySelectorAll(".on").forEach(element => {
        element.classList.toggle("darkActive")
    })
    document.querySelectorAll(".pomodoro__count").forEach(element => {
        element.classList.toggle("darkbackgroundCircle")
    })
    document.querySelectorAll(".background__button").forEach(element =>{
        element.classList.toggle("darkbackground__button")
    })
    // document.querySelectorAll(".step").forEach(element =>{
    //     element.classList.toggle("darkbox")
    // })
    document.querySelector('body').classList.toggle("dark");
    document.querySelector(".box__todo").classList.toggle("darkbox__todo");
    document.querySelector(".icon__todo").classList.toggle("darkicon__todo");
    document.querySelectorAll(".item").forEach(element => {
        element.classList.toggle("darkitem");
    });
    document.querySelectorAll(".item__delete").forEach(element => {
        element.classList.toggle("darkitem__delete");
    });
    document.querySelectorAll(".item__edit").forEach(element => {
        element.classList.toggle("darkitem__edit");
    });
}

export {changeViewMode}