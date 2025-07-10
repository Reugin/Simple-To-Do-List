var taskObject = [
    {
        name: 'Task 1'
    },
    {
        name: 'Task 2'
    },
]

//To display the add task window
function addWindowToggle() {
    document.getElementById('addTaskWindow').style.display = "flex";
    document.getElementById('main').style.filter = 'blur(3px)';
}

//To cancel add task window
function cancel() {
    document.getElementById('addTaskWindow').style.display = "none";
    document.getElementById('main').style.filter = 'blur(0px)';
}

//To add task in the list
function addTaskButton() {
    let value = document.getElementById('newTaskInput').value;

    //if input in empty then alert to enter task
    if (!value) {
        alert('Please enter task');
    } else {
        var template = '<div class="listItem">' +
            '<input type="checkbox" onChange="isChecked()" id="checkbox"></input>' + '<span id="value">' + value + '<span/>' +
            '</div>';
        //to add task in list
        document.getElementById('taskList').innerHTML += template;

        //to hide add task window
        document.getElementById('addTaskWindow').style.display = "none";
        document.getElementById('newTaskInput').value = "";
        document.getElementById('main').style.filter = 'blur(0px)';
    }
}

//To chcked checkbox and checnge the text decoration accordingly
function isChecked() {
    let toCheck = document.getElementById('checkbox').checked;
    let taskCompleted = document.getElementById('value');

    if (!toCheck) {
        taskCompleted.style.textDecoration = "none";
        taskCompleted.style.color = "#000";

    } else { // if not checked then the text decoration will be line-through
        taskCompleted.style.textDecoration = "line-through";
        taskCompleted.style.color = "#aaa";
    }

}
