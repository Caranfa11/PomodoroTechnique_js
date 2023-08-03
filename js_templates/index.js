import finalView from "./leftView.js"
import rightView from "./rightView.js"
import {changeViewMode} from "../js/darkMode.js"

var todos;

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

        e.target.reset()

        DisplayTodos();

    })

    DisplayTodos();

})

function DisplayTodos(){
    const todoList = document.querySelector("#todoList")

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("item");

        const content = document.createElement("div");
        const button__edit__content = document.createElement("button"); 
        const button__delete__content = document.createElement("button"); 
        const button__edit = document.createElement("button");
        const button__delete = document.createElement("button");
        const done = document.createElement("input");
        
        done.type = "checkbox";
        done.checked = todo.done;

        content.classList.add("item__description")
        button__edit__content.classList.add("item__edit")
        button__delete__content.classList.add("item__delete")

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`
        button__edit__content.innerHTML = `
        <div class="item__button" id="bt_edit">
            <p>edit</p><i class="fas fa-pencil"></i>
        </div>
        `
        button__delete__content.innerHTML = `
        <div class="item__button" id="bt_delete">
            <p>delete</p><i class="fas fa-trash-alt"></i>
        </div>`

        todoItem.appendChild(content)
        todoItem.appendChild(button__edit__content)
        todoItem.appendChild(button__delete__content)


        todoList.appendChild(todoItem)

        button__edit__content.addEventListener("click", e => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem("todos", JSON.stringify(todos));
                DisplayTodos();
            })
        })

        button__delete__content.addEventListener("click", e => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
        })

    })

    if (darkmode == null || darkmode == 'false' || darkmode == undefined) {
        darkmode = !darkmode
        store(`${darkmode}`);
    } else if (darkmode == 'true') {
        changeViewMode(darkmode)
    }
}

var darkmode = localStorage.getItem('darkmode');

document.getElementById("left-view").innerHTML = finalView;
document.getElementById("right-view").innerHTML = rightView[1];

// load();

document.getElementById("darkMode").addEventListener("click", e => {
    darkmode = !darkmode
    store(`${darkmode}`)
    changeViewMode(darkmode)
})

// function load() {
//     if (darkmode == null || darkmode == 'false' || darkmode == undefined) {
//         darkmode = !darkmode
//         store(`${darkmode}`);
//     } else if (darkmode == 'true') {
//         changeViewMode(darkmode)
//     }
// }

function store(value) {
    localStorage.setItem('darkmode', value);
}

var timer = document.createElement('script');
timer.src = "../js/timer.js"
document.body.append(timer);
// var dark = document.createElement('script');
// dark.src = "../js/darkMode.js"
// document.body.append(dark);