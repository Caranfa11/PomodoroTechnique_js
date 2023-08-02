import finalView from "./leftView.js"
import rightView from "./rightView.js"
import {changeViewMode} from "../js/darkMode.js"

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.querySelector('#new__todo__form');

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const  todo = {
            content: e.target.elements.content.value,
            done: false,
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();

        DisplayTodos();

    })

})

function DisplayTodos(){
    const todoList = document.querySelector("#todolist")

    todoList.innerHTML = '';

    todos.forEach(todo => {
        // const todoItem = document.createElement
    })
}

var darkmode = localStorage.getItem('darkmode');

document.getElementById("left-view").innerHTML = finalView;
document.getElementById("right-view").innerHTML = rightView[1];

load();

document.getElementById("darkMode").addEventListener("click", e => {
    darkmode = !darkmode
    store(`${darkmode}`)
    changeViewMode(darkmode)
})

function load() {
    if (darkmode == null || darkmode == 'false' || darkmode == undefined) {
        darkmode = !darkmode
        store(`${darkmode}`);
    } else if (darkmode == 'true') {
        changeViewMode(darkmode)
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);
// var dark = document.createElement('script');
// dark.src = "../js/darkMode.js"
// document.body.append(dark);