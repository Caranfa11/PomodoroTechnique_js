import finalView from "./leftView.js"
import rightView from "./rightView.js"
import {changeViewMode} from "../js/darkMode.js"

var todos;
var switchRightView = localStorage.getItem("rightView")
var darkmode = localStorage.getItem('darkmode');
var timer = document.createElement('script');
timer.src = "../js/timer.js"

document.getElementById("left-view").innerHTML = finalView;
document.getElementById("right-view").innerHTML = rightView;

if(switchRightView == 0){
    document.querySelector(".right__todo__background").classList.toggle("hide");
    document.querySelector(".right__background").classList.toggle("hide");
}

window.addEventListener('load', () => {
    
    if (darkmode == null || darkmode == 'false' || darkmode == undefined) {
        darkmode = !darkmode
        storeDarkMode(`${darkmode}`);
    } else if (darkmode == 'true') {
        changeViewMode(darkmode)
    }

    switchRightView = localStorage.getItem('rightView')

    if (switchRightView == null || switchRightView == undefined || switchRightView == 'false') {
        switchRightView = 0
        storeRightView(`${switchRightView}`);
    } else {
        switchRightView = localStorage.getItem("rightView")   
    }

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

document.getElementById("darkMode").addEventListener("click", e => {
    darkmode = !darkmode
    storeDarkMode(`${darkmode}`)
    changeViewMode(darkmode)
})

document.getElementById("switchInfo").addEventListener("click", e => {
    switchRightView == 0 ? switchRightView = 1 : switchRightView = 0;
    storeRightView(`${switchRightView}`);
    document.querySelector(".right__todo__background").classList.toggle("hide");
    document.querySelector(".right__background").classList.toggle("hide");
})

function storeDarkMode(value) {
    localStorage.setItem('darkmode', value);
}

function storeRightView(value) {
    localStorage.setItem('rightView', value);
}

function DisplayTodos(){

    const todoList = document.querySelector("#todoList")

    todoList.innerHTML = '';

    todos.forEach(todo => {

        const todoItem = document.createElement("div");

        const content = document.createElement("div");
        const button__edit__content = document.createElement("button"); 
        const button__delete__content = document.createElement("button"); 
        const done = document.createElement("input");
        
        done.type = "checkbox";
        done.checked = todo.done;

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`
        button__edit__content.innerHTML = `
        <div class="item__button" id="bt_edit">
            <p>edit</p><i class="fas fa-pencil"></i>
        </div>`;
        button__delete__content.innerHTML = `
        <div class="item__button" id="bt_delete">
            <p>delete</p><i class="fas fa-trash-alt"></i>
        </div>`;

        todoItem.classList.add("item");
        content.classList.add("item__description")
        button__edit__content.classList.add("item__edit")
        button__delete__content.classList.add("item__delete")
        
        if(darkmode){
            todoItem.classList.add("darkitem")
            content.classList.add("darkitem__description")
            button__edit__content.classList.add("darkitem__edit")
            button__delete__content.classList.add("darkitem__delete")
        }

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
}

document.body.append(timer);