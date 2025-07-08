const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById("task-list");
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.ariaValueMax.trim();
    // console.log(taskText)
    if(taskText === "") {
        alert("Please enter a task!!!")
        return;
    }
    addTask(taskText);
    taskInput.value = "";
});