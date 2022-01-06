let toDo = []

let inputBar = document.querySelector('#todo-input')

let submit = document.querySelector('#todo-form').addEventListener('submit', addToDo)

let toDoList = document.querySelector('#todo')

function addToDo(e) {
    e.preventDefault()

    let toDoInput = inputBar.value
    
    if (toDoInput) {
        toDo.push(toDoInput)
        renderToDos()
    }

    inputBar.value = ""
}


function renderToDos() {
    toDoList.innerHTML = ""
    for (toDoInput of toDo) {
        renderInput(toDoInput)
    }

    document.querySelector('#todo-number').innerHTML = toDo.length
}

function renderInput(toDoInput) {
    let li = document.createElement('li')
    li.classList.add("todo-item")
    li.innerHTML = toDoInput
    toDoList.appendChild(li)

    li.addEventListener('click', function(){finishToDo(toDoInput)})
}



// Complete to do

let completedToDo = []

let completedToDoList = document.querySelector('#complete')

function finishToDo(toDoInput) {
    completedToDo.push(toDoInput)


    toDo = toDo.filter(item => item !== toDoInput)

    renderToDos()
    renderCompletedToDos()
}

function renderCompletedToDos() {
    completedToDoList.innerHTML = ""

    for (i=0; i<completedToDo.length; i++) {
        renderComplete(finishToDo)
    }

    document.querySelector('#complete-number').innerHTML = completedToDo.length
}

function renderComplete(completed) {
    let li = document.createElement('li')
    li.classList.add('complete-item')
    li.innerHTML = completed
    completedToDoList.appendChild(li)
}