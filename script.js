const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById("task-list");
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    // console.log(taskText)
    if(taskText === "") {
        alert("Please enter a task!!!")
        return;
    }
    addTask(taskText);
    taskInput.value = "";
});
function addTask(taskText) {
    // created one list tag
    const li = document.createElement('li');
    li.className = "task-item";
    // created one span tag
    const span = document.createElement('span');
    span.className = "task-text";
    span.textContent = taskText;
    // created one button tag
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "x";
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
};
taskList.addEventListener('click', function(event) {
    const target = event.target;
    console.log(target)
    if(target.classList.contains('delete-btn'))  {
        const li = target.parentElement;
        taskList.removeChild(li);
    } else if(target.classList.contains('task-item') || target.classList.contains('task-text')) {
        const li = target.closest('.task-item');
        if(li) {
            li.classList.toggle('completed')
        }
    }
})