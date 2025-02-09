// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
//Event listener
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');
    let item = document.createElement('li');
    item.innerText = inputTask.value;
    task.appendChild(item);
    let checkTask = document.createElement('button');
    checkTask.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkTask.classList.add('check-task');
    task.appendChild(checkTask);
    let deleteTask = document.createElement('button');
    deleteTask.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteTask.classList.add('delete-task');
    task.appendChild(deleteTask);
    if (inputTask.value === "") {
        alert('please enter a task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
    checkTask.addEventListener('click', function () {
        checkTask.parentElement.style.textDecoration = "line-through";
    });
    deleteTask.addEventListener('click', function () {
        deleteTask.parentElement.remove();
    })
});